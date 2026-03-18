import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";

const BASE_URL = "https://runningtourslpgc.com";

const meta: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Terms and Conditions — Running Tours LPGC",
    description:
      "Terms and conditions for booking running tours in Las Palmas de Gran Canaria with Running Tours LPGC.",
  },
  es: {
    title: "Términos y Condiciones — Running Tours LPGC",
    description:
      "Términos y condiciones para reservar running tours en Las Palmas de Gran Canaria con Running Tours LPGC.",
  },
  fr: {
    title: "Conditions Générales — Running Tours LPGC",
    description:
      "Conditions générales de réservation des visites en courant à Las Palmas de Gran Canaria avec Running Tours LPGC.",
  },
  de: {
    title: "Allgemeine Geschäftsbedingungen — Running Tours LPGC",
    description:
      "Allgemeine Geschäftsbedingungen für die Buchung von Lauftouren in Las Palmas de Gran Canaria bei Running Tours LPGC.",
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
      canonical: `${BASE_URL}/${locale}/terms`,
      languages: {
        en: `${BASE_URL}/en/terms`,
        es: `${BASE_URL}/es/terms`,
        fr: `${BASE_URL}/fr/terms`,
        de: `${BASE_URL}/de/terms`,
        "x-default": `${BASE_URL}/en/terms`,
      },
    },
  };
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
