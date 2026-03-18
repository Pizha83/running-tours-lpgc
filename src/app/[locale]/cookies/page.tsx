"use client";

import LegalPageLayout from "@/components/LegalPageLayout";
import { useDictionary } from "@/i18n/DictionaryProvider";

export default function CookiePolicyPage() {
  const { dict } = useDictionary();
  const t = dict.legal.cookies;

  return (
    <LegalPageLayout title={t.title}>
      <section className="mb-10">
        <h2 className="text-xl font-bold text-[#0C4A6E] mb-3">{t.introTitle}</h2>
        <p className="text-[#64748B] leading-relaxed">{t.introDescription}</p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-[#0C4A6E] mb-4">{t.typesTitle}</h2>

        <div className="space-y-4">
          <div className="rounded-xl border border-gray-200 p-5">
            <h3 className="text-base font-semibold text-[#1E293B] mb-2">{t.technicalTitle}</h3>
            <p className="text-sm text-[#64748B] leading-relaxed">{t.technicalDescription}</p>
          </div>

          <div className="rounded-xl border border-gray-200 p-5">
            <h3 className="text-base font-semibold text-[#1E293B] mb-2">{t.analyticsTitle}</h3>
            <p className="text-sm text-[#64748B] leading-relaxed">{t.analyticsDescription}</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-[#0C4A6E] mb-3">{t.managementTitle}</h2>
        <p className="text-[#64748B] mb-4">{t.managementDescription}</p>
        <ul className="space-y-2 text-sm text-[#64748B]">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#F97316] shrink-0" />
            {t.managementChrome}
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#F97316] shrink-0" />
            {t.managementFirefox}
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#F97316] shrink-0" />
            {t.managementSafari}
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#F97316] shrink-0" />
            {t.managementEdge}
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#0C4A6E] mb-3">{t.consentTitle}</h2>
        <p className="text-[#64748B] leading-relaxed">{t.consentDescription}</p>
      </section>
    </LegalPageLayout>
  );
}
