import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Get SMTP config from environment
    const smtpHost = process.env.SMTP_HOST
    const smtpPort = Number(process.env.SMTP_PORT || 587)
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS
    const smtpFrom = process.env.SMTP_FROM
    const smtpTo = process.env.SMTP_TO

    if (!smtpHost || !smtpUser || !smtpPass || !smtpFrom || !smtpTo) {
      // In development, save to local file
      if (process.env.NODE_ENV === 'development') {
        const fs = require('fs')
        const path = require('path')
        const submissionsDir = path.join(process.cwd(), 'form-submissions')
        if (!fs.existsSync(submissionsDir)) {
          fs.mkdirSync(submissionsDir, { recursive: true })
        }
        const filename = path.join(submissionsDir, `submission-${Date.now()}.json`)
        fs.writeFileSync(filename, JSON.stringify(body, null, 2))
        return NextResponse.json({ success: true, message: 'Form saved locally (dev mode)' })
      }

      return NextResponse.json(
        { error: 'SMTP configuration missing' },
        { status: 500 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: false, // STARTTLS
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    // Email content
    const htmlContent = `
      <h2>New Quote Request from FENIX PLUS SA</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Service:</strong> ${service || 'Not specified'}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><small>This email was sent automatically from the FENIX PLUS SA website.</small></p>
    `

    // Send email
    await transporter.sendMail({
      from: smtpFrom,
      to: smtpTo,
      subject: `New Quote Request - ${name} - ${service || 'General Inquiry'}`,
      html: htmlContent,
    })

    return NextResponse.json({
      success: true,
      message: 'Quote request submitted successfully',
    })
  } catch (error) {
    console.error('Form submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
