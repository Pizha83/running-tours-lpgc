"use client";

import LegalPageLayout from "@/components/LegalPageLayout";
import { useDictionary } from "@/i18n/DictionaryProvider";

export default function LegalNoticePage() {
  const { dict } = useDictionary();
  const t = dict.legal.legalNotice;

  return (
    <LegalPageLayout title={t.title}>
      <section className="mb-10">
        <h2 className="text-xl font-bold text-[#0C4A6E] mb-4">{t.ownerTitle}</h2>
        <div className="overflow-hidden rounded-xl border border-gray-200">
          <table className="w-full text-sm">
            <tbody>
              {[
                [t.ownerName, t.ownerNameValue],
                [t.ownerNif, t.ownerNifValue],
                [t.ownerAddress, t.ownerAddressValue],
                [t.ownerEmail, t.ownerEmailValue],
                [t.ownerPhone, t.ownerPhoneValue],
                [t.ownerRegistry, t.ownerRegistryValue],
              ].map(([label, value], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="px-4 py-3 font-semibold text-[#1E293B] w-1/3">{label}</td>
                  <td className="px-4 py-3 text-[#64748B]">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-[#0C4A6E] mb-3">{t.activityTitle}</h2>
        <p className="text-[#64748B] leading-relaxed">{t.activityDescription}</p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-[#0C4A6E] mb-3">{t.ipTitle}</h2>
        <p className="text-[#64748B] leading-relaxed">{t.ipDescription}</p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-[#0C4A6E] mb-3">{t.liabilityTitle}</h2>
        <p className="text-[#64748B] leading-relaxed">{t.liabilityDescription}</p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#0C4A6E] mb-3">{t.lawTitle}</h2>
        <p className="text-[#64748B] leading-relaxed">{t.lawDescription}</p>
      </section>
    </LegalPageLayout>
  );
}
