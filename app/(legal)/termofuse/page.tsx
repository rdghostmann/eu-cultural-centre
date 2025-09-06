// app/(legal)/termofuse/page.tsx
export default function TermsOfUsePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8">Terms of Use</h1>
      <dl className="space-y-6">
        <div>
          <dt className="font-semibold">1. Acceptance of Terms</dt>
          <dd className="text-gray-700">
            By accessing or using this website, you agree to abide by these Terms of Use in full. If you're not on board, stop here.
          </dd>
        </div>
        <div>
          <dt className="font-semibold">2. Purpose and Scope</dt>
          <dd className="text-gray-700">
            This site is dedicated to showcasing Intercontinental Values, Cultural Exchange, Tourism, Sports, Knowledge Exchange, Creativity, Language Exchange, Climate Change, Humanitarian activities, Inclusion, Innovation and every topic displayed on our “AREAS OF WORK”—via exhibitions, events, publications, and dialogue. Use it respectfully.
          </dd>
        </div>
        <div>
          <dt className="font-semibold">3. User Conduct</dt>
          <dd className="text-gray-700">
            You must not misuse the website—no illegal content, hacking, impersonation, or infringement on intellectual property or others’ privacy.
          </dd>
        </div>
        <div>
          <dt className="font-semibold">4. Intellectual Property</dt>
          <dd className="text-gray-700">
            All content on this site—text, images, videos, logos—is protected by copyright. You may not print or download for personal, nor commercial use. Any use requires explicit written consent.
          </dd>
        </div>
        <div>
          <dt className="font-semibold">5. Registration and Forms</dt>
          <dd className="text-gray-700">
            If you register for events or mailing lists, you must provide accurate information. Submitting a form implies acceptance of these Terms and any ancillary terms communicated at submission.
          </dd>
        </div>
        <div>
          <dt className="font-semibold">6. Disclaimers &amp; Modifications</dt>
          <dd className="text-gray-700">
            Content may change from time to time. We strive for accuracy. Changes will be communicated via mail if you are our newsletter subscriber.
          </dd>
        </div>
        <div>
          <dt className="font-semibold">7. Governing Law</dt>
          <dd className="text-gray-700">
            These Terms are governed by the relevant laws of the European Union.
          </dd>
        </div>
        <div>
          <dt className="font-semibold">8. Amendments</dt>
          <dd className="text-gray-700">
            We may update these Terms at any time. Continued use after changes means you accept them.
          </dd>
        </div>
      </dl>
    </div>
  )
}
