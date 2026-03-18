"use client";

import LegalPageLayout from "@/components/LegalPageLayout";
import { useDictionary } from "@/i18n/DictionaryProvider";

export default function TermsPage() {
  const { dict } = useDictionary();
  const t = dict.legal.terms;

  return (
    <LegalPageLayout title={t.title}>
      <section className="mb-10">
        <h2 className="text-xl font-bold text-[#0C4A6E] mb-3">{t.introTitle}</h2>
        <p className="text-[#64748B] leading-relaxed">{t.introDescription}</p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-[#0C4A6E] mb-3">{t.serviceTitle}</h2>
        <p className="text-[#64748B] leading-relaxed">{t.serviceDescription}</p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-[#0C4A6E] mb-3">{t.requirementsTitle}</h2>
        <p className="text-[#64748B] leading-relaxed">{t.requirementsDescription}</p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-[#0C4A6E] mb-3">{t.risksTitle}</h2>
        <p className="text-[#64748B] leading-relaxed">{t.risksDescription}</p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-[#0C4A6E] mb-3">{t.pricingTitle}</h2>
        <p className="text-[#64748B] leading-relaxed">{t.pricingDescription}</p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-[#0C4A6E] mb-3">{t.bookingTitle}</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm text-[#64748B] mb-4">
          <li>{t.bookingStep1}</li>
          <li>{t.bookingStep2}</li>
          <li>{t.bookingStep3}</li>
          <li>{t.bookingStep4}</li>
        </ol>
        <p className="text-sm text-[#64748B] bg-gray-50 rounded-xl p-4">
          {t.bookingConfirmation}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-[#0C4A6E] mb-3">{t.withdrawalTitle}</h2>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <p className="text-sm text-amber-900 leading-relaxed">{t.withdrawalDescription}</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-[#0C4A6E] mb-3">{t.cancellationTitle}</h2>
        <div className="space-y-2">
          {[
            t.cancellation48,
            t.cancellation24,
            t.cancellationLess,
            t.cancellationProvider,
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-[#64748B]">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#F97316] shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-[#0C4A6E] mb-3">{t.confirmationTitle}</h2>
        <p className="text-[#64748B] leading-relaxed">{t.confirmationDescription}</p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-[#0C4A6E] mb-3">{t.disputeTitle}</h2>
        <p className="text-[#64748B] leading-relaxed">{t.disputeDescription}</p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#0C4A6E] mb-3">{t.lawTitle}</h2>
        <p className="text-[#64748B] leading-relaxed">{t.lawDescription}</p>
      </section>
    </LegalPageLayout>
  );
}
