import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";

const BASE_URL = "https://runningtourslpgc.com";

const meta: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Legal Notice — Running Tours LPGC",
    description:
      "Legal notice and company information for Running Tours LPGC, an active tourism business in Las Palmas de Gran Canaria.",
  },
  es: {
    title: "Aviso Legal — Running Tours LPGC",
    description:
      "Aviso legal y datos identificativos de Running Tours LPGC, empresa de turismo activo en Las Palmas de Gran Canaria.",
  },
  fr: {
    title: "Mentions Légales — Running Tours LPGC",
    description:
      "Mentions légales et informations sur Running Tours LPGC, entreprise de tourisme actif à Las Palmas de Gran Canaria.",
  },
  de: {
    title: "Impressum — Running Tours LPGC",
    description:
      "Impressum und Unternehmensinformationen von Running Tours LPGC, einem aktiven Tourismusunternehmen in Las Palmas de Gran Canaria.",
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
      canonical: `${BASE_URL}/${locale}/legal`,
      languages: {
        en: `${BASE_URL}/en/legal`,
        es: `${BASE_URL}/es/legal`,
        fr: `${BASE_URL}/fr/legal`,
        de: `${BASE_URL}/de/legal`,
        "x-default": `${BASE_URL}/en/legal`,
      },
    },
  };
}

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
