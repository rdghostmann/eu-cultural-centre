"use client";

import { useTranslations } from "next-intl";

export default function TermsOfUsePage() {
    const t = useTranslations("TermsOfUsePage");

    const sections = [
        {
            key: "acceptance",
            heading: t("sections.acceptance.heading"),
            text: t("sections.acceptance.text"),
        },
        {
            key: "purpose",
            heading: t("sections.purpose.heading"),
            text: t("sections.purpose.text"),
        },
        {
            key: "conduct",
            heading: t("sections.conduct.heading"),
            text: t("sections.conduct.text"),
        },
        {
            key: "intellectualProperty",
            heading: t("sections.intellectualProperty.heading"),
            text: t("sections.intellectualProperty.text"),
        },
        {
            key: "registration",
            heading: t("sections.registration.heading"),
            text: t("sections.registration.text"),
        },
        {
            key: "disclaimers",
            heading: t("sections.disclaimers.heading"),
            text: t("sections.disclaimers.text"),
        },
        {
            key: "law",
            heading: t("sections.law.heading"),
            text: t("sections.law.text"),
        },
        {
            key: "amendments",
            heading: t("sections.amendments.heading"),
            text: t("sections.amendments.text"),
        },
    ];

    return (
        <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
            <h1 className="text-3xl font-bold mb-8">
                {t("title")}
            </h1>

            <dl className="space-y-6">
                {sections.map((section) => (
                    <div key={section.key}>
                        <dt className="font-semibold text-[#205375]">
                            {section.heading}
                        </dt>
                        <dd className="text-gray-700">{section.text}</dd>
                    </div>
                ))}
            </dl>
        </div>
    );
}
