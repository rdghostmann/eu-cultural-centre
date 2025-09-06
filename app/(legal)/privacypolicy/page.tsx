// app/(legal)/privacypolicy/page.tsx
export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      <dl className="space-y-6">
        <div>
          <dt className="font-semibold">1. Overview</dt>
          <dd className="text-gray-700">
            We respect your privacy and comply with GDPR and relevant European regulations.
          </dd>
        </div>

        <div>
          <dt className="font-semibold">2. Personal Data We Collect</dt>
          <dd className="text-gray-700 space-y-2">
            <p>
              <strong>Voluntary submission:</strong> names, emails, organization
              data, event registration details.
            </p>
            <p>
              <strong>Automatic collection:</strong> IP address, device/browser
              type, site navigation patterns (via minimal, privacy-friendly
              analytics).
            </p>
          </dd>
        </div>

        <div>
          <dt className="font-semibold">3. Use of Information</dt>
          <dd className="text-gray-700">
            Your data helps us manage registrations, send updates, administer
            events, and improve our services.
          </dd>
        </div>

        <div>
          <dt className="font-semibold">4. Cookies &amp; Analytics</dt>
          <dd className="text-gray-700">
            We use essential cookies for functionality and may deploy
            privacy-focused analytics to understand usage trends without
            compromising anonymity.
          </dd>
        </div>

        <div>
          <dt className="font-semibold">5. Data Sharing &amp; Transfers</dt>
          <dd className="text-gray-700">
            We do not sell your data. We may share it with service providers
            (hosting, analytics, communications), but only under
            GDPR-compliant agreements. Data doesn’t leave the EEA unless
            strictly necessary and legally permissible.
          </dd>
        </div>

        <div>
          <dt className="font-semibold">6. Data Retention</dt>
          <dd className="text-gray-700">
            We keep personal data only as long as needed—for legitimate
            purposes, legal obligations, or until withdrawal of consent. After
            that, data is securely deleted or anonymized.
          </dd>
        </div>

        <div>
          <dt className="font-semibold">7. Your Rights Under GDPR</dt>
          <dd className="text-gray-700">
            You have the right to:
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Access your data</li>
              <li>Rectify inaccuracies</li>
              <li>Erase your data ("right to be forgotten")</li>
              <li>Restrict or object to processing</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
            Submit such requests via the website's contact mechanism.
          </dd>
        </div>

        <div>
          <dt className="font-semibold">8. Security Measures</dt>
          <dd className="text-gray-700">
            We take reasonable technical and organizational measures to protect
            your data—encryption, access controls, and regular reviews.
          </dd>
        </div>

        <div>
          <dt className="font-semibold">9. Policy Updates</dt>
          <dd className="text-gray-700">
            We may update this policy. The latest version will always be
            available on the site, and significant changes may be communicated
            via email or site announcements.
          </dd>
        </div>

        <div>
          <dt className="font-semibold">10. Contact</dt>
          <dd className="text-gray-700">
            For any privacy concerns or requests, reach out via our website’s
            contact form or the email provided on the site.
          </dd>
        </div>
      </dl>
    </div>
  )
}
