import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Privacy Policy - FENIX PLUS SA',
    description: 'Privacy Policy for FENIX PLUS SA construction company in Lausanne, Switzerland.',
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none bg-white rounded-xl shadow-sm p-8">
          <p><strong>Last Updated:</strong> February 10, 2026</p>
          
          <p>FENIX PLUS SA ("we," "our," or "us") is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or submit a quote request.</p>

          <h2>1. Information We Collect</h2>
          <p>We collect information you provide directly to us, including:</p>
          <ul>
            <li><strong>Contact Form Data:</strong> Name, email address, phone number, and message when you submit a quote request via our contact form.</li>
            <li><strong>Usage Data:</strong> Automated collection of IP addresses, browser types, and pages visited via standard web analytics (if enabled).</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and provide requested services</li>
            <li>Improve our website and customer experience</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>3. Data Storage and Retention</h2>
          <ul>
            <li>Form submissions are sent via email to our internal team using secure SMTP.</li>
            <li>We retain form data for a maximum of <strong>2 years</strong> for customer service and legal purposes.</li>
            <li>After retention period, data is securely deleted.</li>
          </ul>

          <h2>4. Data Sharing</h2>
          <p>We do <strong>not</strong> sell, trade, or rent your personal information to others. We may share your data with:</p>
          <ul>
            <li><strong>Service providers</strong> who assist in website operations (hosting, email delivery) under strict confidentiality agreements.</li>
            <li><strong>Legal authorities</strong> if required by law or to protect our rights.</li>
          </ul>

          <h2>5. Security</h2>
          <p>We implement reasonable technical and organizational measures to protect your data:</p>
          <ul>
            <li>HTTPS encryption for all data transmission</li>
            <li>Secure email transmission via Gmail (TLS)</li>
            <li>Limited access to personal data by authorized staff only</li>
            <li>Regular security reviews</li>
          </ul>

          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data (subject to legal retention limits)</li>
            <li>Opt out of future communications</li>
          </ul>
          <p>To exercise these rights, contact us at: <strong>contact@fenix-plus-sa.ch</strong></p>

          <h2>7. Changes to This Policy</h2>
          <p>We may update this Privacy Policy periodically. The updated version will be indicated by an updated "Last Updated" date. Continued use of the website after changes constitutes acceptance of the updated policy.</p>

          <h2>8. Contact Us</h2>
          <p>For questions about this Privacy Policy or our data practices, please contact:</p>
          <p><strong>FENIX PLUS SA</strong><br/>
          Email: contact@fenix-plus-sa.ch<br/>
          Address: Lausanne, Switzerland</p>
        </div>
      </div>
    </div>
  )
}
