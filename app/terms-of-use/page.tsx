import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use - YouTube Thumbnail Tester',
  description: 'Read our Terms of Use for the YouTube Thumbnail Tester service. Learn about user responsibilities, intellectual property rights, service availability, and more.',
  alternates: {
    canonical: 'https://www.thumbnailtester.app/terms-of-use',
  },
}

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms of Use</h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 mb-6">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">1. Acceptance of Terms</h2>
              <p className="text-slate-600 mb-4">
                By accessing and using our YouTube Thumbnail Tester service, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">2. Description of Service</h2>
              <p className="text-slate-600 mb-4">
                Our YouTube Thumbnail Tester is a free online tool that allows users to:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Upload and preview thumbnail images in YouTube context</li>
                <li>Test thumbnails across different devices and screen sizes</li>
                <li>Compare multiple thumbnail variations</li>
                <li>Analyze thumbnail performance and visual impact</li>
                <li>Optimize thumbnails for better click-through rates</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">3. User Responsibilities</h2>
              <p className="text-slate-600 mb-4">
                When using our service, you agree to:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Upload only images that you own or have the right to use</li>
                <li>Not upload any content that is illegal, harmful, or violates third-party rights</li>
                <li>Not use the service for any commercial exploitation without permission</li>
                <li>Not attempt to reverse engineer or interfere with the service</li>
                <li>Not upload files that exceed reasonable size limits</li>
                <li>Respect the intellectual property rights of others</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">4. Intellectual Property</h2>
              <p className="text-slate-600 mb-4">
                The YouTube Thumbnail Tester service, including its design, functionality, and content, is owned by us and protected by intellectual property laws. You retain ownership of any images you upload, but you grant us a limited license to process and display them for the purpose of providing our service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">5. Service Availability</h2>
              <p className="text-slate-600 mb-4">
                We strive to maintain high service availability, but we do not guarantee uninterrupted access to our thumbnail tester. The service may be temporarily unavailable due to maintenance, updates, or technical issues. We reserve the right to modify or discontinue the service at any time.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">6. Disclaimers</h2>
              <p className="text-slate-600 mb-4">
                Our service is provided "as is" without warranties of any kind. We do not guarantee:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>That the service will meet your specific requirements</li>
                <li>That the service will be error-free or uninterrupted</li>
                <li>That the results will improve your YouTube performance</li>
                <li>That uploaded images will be completely secure</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">7. Limitation of Liability</h2>
              <p className="text-slate-600 mb-4">
                In no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">8. Privacy and Data</h2>
              <p className="text-slate-600 mb-4">
                Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information. By using our service, you consent to the collection and use of information as described in our Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">9. Prohibited Uses</h2>
              <p className="text-slate-600 mb-4">
                You may not use our service to:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Upload malicious software or harmful content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use automated tools to access the service excessively</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on the rights of others</li>
                <li>Use the service for commercial purposes without permission</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">10. Termination</h2>
              <p className="text-slate-600 mb-4">
                We may terminate or suspend your access to our service immediately, without prior notice, for any reason, including if you breach these Terms of Use. Upon termination, your right to use the service will cease immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">11. Changes to Terms</h2>
              <p className="text-slate-600 mb-4">
                We reserve the right to modify these Terms of Use at any time. We will notify users of any material changes by posting the updated terms on this page and updating the "Last updated" date. Your continued use of the service after such changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">12. Governing Law</h2>
              <p className="text-slate-600 mb-4">
                These Terms of Use shall be governed by and construed in accordance with the laws of the jurisdiction in which we operate, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">13. Contact Information</h2>
              <p className="text-slate-600 mb-4">
                If you have any questions about these Terms of Use, please contact us through our website or email us at <span className="text-blue-600">support@thumbnailtester.com</span>
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-slate-200">
              <p className="text-sm text-slate-500">
                These Terms of Use are effective as of the date listed above and apply to all users of our YouTube Thumbnail Tester service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 