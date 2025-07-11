import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - YouTube Thumbnail Tester',
  description: 'Read our Privacy Policy to understand how we collect, use, and protect your information when using our YouTube Thumbnail Tester service.',
  alternates: {
    canonical: 'https://www.thumbnailtester.app/privacy-policy',
  },
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 mb-6">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">1. Information We Collect</h2>
              <p className="text-slate-600 mb-4">
                Our YouTube Thumbnail Tester is designed to respect your privacy. We collect minimal information necessary to provide our service:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Thumbnail images you upload for testing (processed locally in your browser)</li>
                <li>Basic usage analytics to improve our service</li>
                <li>Technical information such as browser type and device information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">2. How We Use Your Information</h2>
              <p className="text-slate-600 mb-4">
                We use the collected information solely for:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Providing thumbnail testing and preview services</li>
                <li>Improving our tool's functionality and user experience</li>
                <li>Analyzing usage patterns to enhance performance</li>
                <li>Ensuring the security and reliability of our service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">3. Data Storage and Security</h2>
              <p className="text-slate-600 mb-4">
                Your privacy is our priority:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Thumbnail images are processed locally in your browser and are not stored on our servers</li>
                <li>We do not collect or store personal information such as names, emails, or YouTube account details</li>
                <li>All data transmission is encrypted using industry-standard SSL/TLS protocols</li>
                <li>We implement appropriate security measures to protect against unauthorized access</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">4. Third-Party Services</h2>
              <p className="text-slate-600 mb-4">
                Our service uses third-party analytics services to understand usage patterns and improve our service:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li><strong>Google Analytics:</strong> We use Google Analytics to collect anonymous usage data, including page views, user interactions, and website performance metrics. This helps us understand how users interact with our thumbnail tester and improve the service.</li>
                <li>These analytics services collect anonymous usage data but do not have access to your uploaded thumbnails or personal information</li>
                <li>Google Analytics may use cookies and similar technologies to track your browsing behavior on our website</li>
                <li>You can opt out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">5. Cookies and Tracking</h2>
              <p className="text-slate-600 mb-4">
                We use cookies and tracking technologies for the following purposes:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li><strong>Essential Cookies:</strong> These cookies are necessary for the proper functioning of our thumbnail tester and cannot be disabled</li>
                <li><strong>Analytics Cookies:</strong> Google Analytics uses cookies to collect information about how visitors use our website, including page views, time spent on pages, and user interactions</li>
                <li><strong>Performance Cookies:</strong> These cookies help us understand website performance and identify areas for improvement</li>
              </ul>
              <p className="text-slate-600 mt-4">
                You can control cookie settings through your browser preferences. However, disabling certain cookies may affect the functionality of our service. For more information about Google Analytics cookies, please visit <a href="https://policies.google.com/technologies/cookies" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">Google's Cookie Policy</a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">6. Your Rights</h2>
              <p className="text-slate-600 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Use our service without providing personal information</li>
                <li>Clear your browser cache to remove any stored data</li>
                <li>Contact us with any privacy concerns</li>
                <li>Request information about what data we collect (if any)</li>
                <li>Opt out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on</li>
                <li>Control cookie settings through your browser preferences</li>
                <li>Request deletion of any analytics data collected about your usage</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">7. Children's Privacy</h2>
              <p className="text-slate-600 mb-4">
                Our YouTube Thumbnail Tester is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">8. Changes to This Policy</h2>
              <p className="text-slate-600 mb-4">
                We may update this Privacy Policy from time to time. We will notify users of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">9. Contact Us</h2>
              <p className="text-slate-600 mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us through our website or email us at <span className="text-blue-600">support@thumbnailtester.com</span>
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-slate-200">
              <p className="text-sm text-slate-500">
                This Privacy Policy is effective as of the date listed above and applies to all users of our YouTube Thumbnail Tester service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 