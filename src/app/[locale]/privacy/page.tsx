"use client";

import LegalPageLayout from "@/components/LegalPageLayout";
import { useDictionary } from "@/i18n/DictionaryProvider";

export default function PrivacyPolicyPage() {
  const { dict } = useDictionary();
  const t = dict.legal.privacy;

  return (
    <LegalPageLayout title={t.title}>
      <section className="mb-10">
        <h2 className="text-xl font-bold text-[#0C4A6E] mb-3">{t.introTitle}</h2>
        <p className="text-[#64748B] leading-relaxed">{t.introDescription}</p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-[#0C4A6E] mb-3">{t.controllerTitle}</h2>
        <p className="text-[#64748B] leading-relaxed">{t.controllerDescription}</p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-[#0C4A6E] mb-3">{t.purposeTitle}</h2>
        <div className="space-y-4">
          {[
            [t.purposeBooking, t.purposeBookingBasis],
            [t.purposePayment, t.purposePaymentBasis],
            [t.purposeContact, t.purposeContactBasis],
            [t.purposeTax, t.purposeTaxBasis],
          ].map(([purpose, basis], i) => (
            <div key={i} className="rounded-xl border border-gray-200 p-4">
              <p className="text-sm font-semibold text-[#1E293B]">{purpose}</p>
              <p className="text-xs text-[#64748B] mt-1">{basis}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-[#0C4A6E] mb-3">{t.recipientsTitle}</h2>
        <p className="text-[#64748B] mb-3">{t.recipientsDescription}</p>
        <ul className="list-disc list-inside space-y-1 text-[#64748B] text-sm">
          <li>{t.recipientStripe}</li>
          <li>{t.recipientTax}</li>
          <li>{t.recipientInvoicing}</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-[#0C4A6E] mb-3">{t.transfersTitle}</h2>
        <p className="text-[#64748B] leading-relaxed">{t.transfersDescription}</p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-[#0C4A6E] mb-3">{t.retentionTitle}</h2>
        <ul className="space-y-2 text-sm text-[#64748B]">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#F97316] shrink-0" />
            {t.retentionBooking}
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#F97316] shrink-0" />
            {t.retentionInvoicing}
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#F97316] shrink-0" />
            {t.retentionContact}
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-[#0C4A6E] mb-3">{t.rightsTitle}</h2>
        <p className="text-[#64748B] mb-3">{t.rightsDescription}</p>
        <ul className="list-disc list-inside space-y-1 text-[#64748B] text-sm mb-4">
          <li>{t.rightAccess}</li>
          <li>{t.rightRectification}</li>
          <li>{t.rightErasure}</li>
          <li>{t.rightRestriction}</li>
          <li>{t.rightPortability}</li>
          <li>{t.rightObjection}</li>
        </ul>
        <p className="text-sm text-[#64748B] bg-gray-50 rounded-xl p-4">
          {t.rightsExercise}
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#0C4A6E] mb-3">{t.complaintTitle}</h2>
        <p className="text-[#64748B] leading-relaxed">{t.complaintDescription}</p>
      </section>
    </LegalPageLayout>
  );
}
