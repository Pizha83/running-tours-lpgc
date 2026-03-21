import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";

const BASE_URL = "https://runningtourslpgc.com";

const meta: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Liability Waiver — Running Tours LPGC",
    description:
      "Liability waiver and assumption of risk for running tours in Las Palmas de Gran Canaria with Running Tours LPGC.",
  },
  es: {
    title: "Exención de Responsabilidad — Running Tours LPGC",
    description:
      "Exención de responsabilidad y asunción de riesgos para running tours en Las Palmas de Gran Canaria con Running Tours LPGC.",
  },
  fr: {
    title: "Décharge de Responsabilité — Running Tours LPGC",
    description:
      "Décharge de responsabilité et acceptation des risques pour les visites en courant à Las Palmas de Gran Canaria avec Running Tours LPGC.",
  },
  de: {
    title: "Haftungsausschluss — Running Tours LPGC",
    description:
      "Haftungsausschluss und Risikoübernahme für Lauftouren in Las Palmas de Gran Canaria bei Running Tours LPGC.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const m = meta[locale as Locale] ?? meta.en;

  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: `${BASE_URL}/${locale}/waiver`,
      languages: {
        en: `${BASE_URL}/en/waiver`,
        es: `${BASE_URL}/es/waiver`,
        fr: `${BASE_URL}/fr/waiver`,
        de: `${BASE_URL}/de/waiver`,
        "x-default": `${BASE_URL}/en/waiver`,
      },
    },
  };
}

export default function WaiverLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
