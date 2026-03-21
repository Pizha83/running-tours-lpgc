"use client";

import LegalPageLayout from "@/components/LegalPageLayout";
import { useDictionary } from "@/i18n/DictionaryProvider";

export default function WaiverPage() {
  const { dict, locale } = useDictionary();
  const t = dict.legal.waiver;

  return (
    <LegalPageLayout title={t.title}>
      <section className="mb-10">
        <h2 className="text-xl font-bold text-[#0C4A6E] mb-3">{t.activityTitle}</h2>
        <p className="text-[#64748B] leading-relaxed">{t.activityDescription}</p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-[#0C4A6E] mb-3">{t.riskTitle}</h2>
        <p className="text-[#64748B] leading-relaxed">{t.riskDescription}</p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-[#0C4A6E] mb-3">{t.fitnessTitle}</h2>
        <p className="text-[#64748B] leading-relaxed">{t.fitnessDescription}</p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-[#0C4A6E] mb-3">{t.medicalTitle}</h2>
        <p className="text-[#64748B] leading-relaxed">{t.medicalDescription}</p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-[#0C4A6E] mb-3">{t.guideTitle}</h2>
        <p className="text-[#64748B] leading-relaxed">{t.guideDescription}</p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-[#0C4A6E] mb-3">{t.insuranceTitle}</h2>
        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <p className="text-sm text-green-900 leading-relaxed">{t.insuranceDescription}</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-[#0C4A6E] mb-3">{t.liabilityTitle}</h2>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <p className="text-sm text-amber-900 leading-relaxed">{t.liabilityDescription}</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-[#0C4A6E] mb-3">{t.imageTitle}</h2>
        <p className="text-[#64748B] leading-relaxed">{t.imageDescription}</p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-[#0C4A6E] mb-3">{t.dataTitle}</h2>
        <p className="text-[#64748B] leading-relaxed">
          {t.dataDescription}{" "}
          <a href={`/${locale}/privacy`} className="text-[#F97316] underline hover:text-[#EA580C]">
            {t.dataLink}
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#0C4A6E] mb-3">{t.lawTitle}</h2>
        <p className="text-[#64748B] leading-relaxed">{t.lawDescription}</p>
      </section>
    </LegalPageLayout>
  );
}
