import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";

const BASE_URL = "https://runningtourslpgc.com";

const meta: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Privacy Policy — Running Tours LPGC",
    description:
      "Learn how Running Tours LPGC processes your personal data in accordance with GDPR and Spanish data protection law.",
  },
  es: {
    title: "Política de Privacidad — Running Tours LPGC",
    description:
      "Cómo Running Tours LPGC trata tus datos personales conforme al RGPD y la legislación española de protección de datos.",
  },
  fr: {
    title: "Politique de Confidentialité — Running Tours LPGC",
    description:
      "Comment Running Tours LPGC traite vos données personnelles conformément au RGPD et à la législation espagnole.",
  },
  de: {
    title: "Datenschutzerklärung — Running Tours LPGC",
    description:
      "Erfahren Sie, wie Running Tours LPGC Ihre personenbezogenen Daten gemäß DSGVO und spanischem Datenschutzrecht verarbeitet.",
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
      canonical: `${BASE_URL}/${locale}/privacy`,
      languages: {
        en: `${BASE_URL}/en/privacy`,
        es: `${BASE_URL}/es/privacy`,
        fr: `${BASE_URL}/fr/privacy`,
        de: `${BASE_URL}/de/privacy`,
        "x-default": `${BASE_URL}/en/privacy`,
      },
    },
  };
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
