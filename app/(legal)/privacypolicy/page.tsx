// app/(legal)/privacypolicy/page.tsx

import { useTranslations } from 'next-intl';

const rights = [
  "Access your data",
  "Rectify inaccuracies",
  "Erase your data (\"right to be forgotten\")",
  "Restrict or object to processing",
  "Data portability",
  "Withdraw consent at any time",
]
function GdprRights() {
  return (
    <ul className="list-disc list-inside mt-2 space-y-1">
      {rights.map((right, idx) => (
        <li key={idx}>{right}</li>
      ))}
    </ul>
  )
}


export default function PrivacyPolicyPage() {

  const t = useTranslations('PrivacyPolicyPage');
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8">{t('title')}</h1>
      <dl className="space-y-6">
        <div>
          <dt className="font-semibold">{t('sections.overview.heading')}</dt>
          <dd className="text-gray-700">
            {t('sections.overview.text')}
          </dd>
        </div>

        <div>
          <dt className="font-semibold">{t('sections.personalData.heading')}</dt>
          <dd className="text-gray-700 space-y-2">
            <p>
              {t('sections.personalData.voluntary')}
            </p>
            <p>
              {t('sections.personalData.automatic')}
            </p>
          </dd>
        </div>

        <div>
          <dt className="font-semibold">{t('sections.useOfInformation.heading')}</dt>
          <dd className="text-gray-700">
            {t('sections.useOfInformation.text')}
          </dd>
        </div>

        <div>
          <dt className="font-semibold">{t('sections.cookies.heading')}</dt>
          <dd className="text-gray-700">
            {t('sections.cookies.text')}
          </dd>
        </div>

        <div>
          <dt className="font-semibold">{t('sections.dataSharing.heading')}</dt>
          <dd className="text-gray-700">
            {t('sections.dataSharing.text')}
          </dd>
        </div>

        <div>
          <dt className="font-semibold">{t('sections.dataRetention.heading')}</dt>
          <dd className="text-gray-700">
            {t('sections.dataRetention.text')}
          </dd>
        </div>

        <div>
          <dt className="font-semibold">{t('sections.gdprRights.heading')}</dt>
          <dd className="text-gray-700">
            {t('sections.gdprRights.text')}
            <ul className="list-disc list-inside mt-2 space-y-1">
              {t.raw("sections.gdprRights.rightsList").map((right: string, idx: number) => (
                <li key={idx}>{right}</li>
              ))}
            </ul>
            <p className="mt-2">{t('sections.gdprRights.footer')}</p>
          </dd>
        </div>

        <div>
          <dt className="font-semibold">{t('sections.security.heading')}</dt>
          <dd className="text-gray-700">
            {t('sections.security.text')}
          </dd>
        </div>

        <div>
          <dt className="font-semibold">{t('sections.policyUpdates.heading')}</dt>
          <dd className="text-gray-700">
            {t('sections.policyUpdates.text')}
          </dd>
        </div>

        <div>
          <dt className="font-semibold">{t('contact.heading')}</dt>
          <dd className="text-gray-700">
            {t("contact.text")}
          </dd>
        </div>
      </dl>
    </div>
  )
}
