import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Terms of Service - FENIX PLUS SA',
    description: 'Terms of Service for FENIX PLUS SA construction company in Lausanne, Switzerland.',
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms of Service</h1>
        <div className="prose prose-slate max-w-none bg-white rounded-xl shadow-sm p-8">
          <p><strong>Last Updated:</strong> February 10, 2026</p>
          
          <p>These Terms of Service ("Terms") govern your use of the FENIX PLUS SA website and services. By accessing or using our website, you agree to be bound by these Terms.</p>

          <h2>1. Services Overview</h2>
          <p>FENIX PLUS SA provides construction and renovation services in Lausanne, Switzerland. Our website serves as an informational and quotation platform for prospective clients.</p>

          <h2>2. Quote Requests</h2>
          <ul>
            <li>Submitting a quote request through our contact form does <strong>not</strong> constitute a binding contract.</li>
            <li>All quoted prices and project details are valid for 30 days from the date of issuance.</li>
            <li>We reserve the right to modify or reject any quote request at our discretion.</li>
          </ul>

          <h2>3. Intellectual Property</h2>
          <ul>
            <li>All content on this website (text, images, logos, design) is the property of FENIX PLUS SA and is protected by intellectual property laws.</li>
            <li>You may not reproduce, distribute, or create derivative works without our prior written consent.</li>
          </ul>

          <h2>4. User Responsibilities</h2>
          <p>When using our website, you agree to:</p>
          <ul>
            <li>Provide accurate and complete information in contact forms</li>
            <li>Use the website for lawful purposes only</li>
            <li>Not engage in activities that could harm or disrupt our website or services</li>
            <li>Not attempt to gain unauthorized access to our systems</li>
          </ul>

          <h2>5. Limitation of Liability</h2>
          <p>FENIX PLUS SA shall not be liable for any indirect, incidental, special, or consequential damages arising from:</p>
          <ul>
            <li>Your use of our website</li>
            <li>Inability to access our website</li>
            <li>Any errors or omissions in content</li>
            <li>Unauthorized access to or alteration of your data</li>
          </ul>

          <h2>6. External Links</h2>
          <p>Our website may contain links to third-party websites. We are not responsible for the content, privacy practices, or legality of those external sites.</p>

          <h2>7. Data Protection</h2>
          <p>We are committed to protecting your personal data in accordance with applicable data protection laws, including the Swiss Federal Act on Data Protection (FADP). See our Privacy Policy for details.</p>

          <h2>8. Governing Law</h2>
          <p>These Terms are governed by and construed in accordance with the laws of Switzerland. Any disputes shall be resolved in the courts of Lausanne, Switzerland.</p>

          <h2>9. Changes to Terms</h2>
          <p>We reserve the right to modify these Terms at any time. Continued use of the website after changes constitutes your acceptance of the new Terms.</p>

          <h2>10. Contact</h2>
          <p>For questions about these Terms of Service, please contact:</p>
          <p><strong>FENIX PLUS SA</strong><br/>
          Email: contact@fenix-plus-sa.ch<br/>
          Address: Lausanne, Switzerland</p>
        </div>
      </div>
    </div>
  )
}
