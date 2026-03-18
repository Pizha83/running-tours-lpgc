import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";

const BASE_URL = "https://runningtourslpgc.com";

const meta: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Cookie Policy — Running Tours LPGC",
    description:
      "Cookie policy for Running Tours LPGC. Learn about the cookies we use and how to manage your preferences.",
  },
  es: {
    title: "Política de Cookies — Running Tours LPGC",
    description:
      "Política de cookies de Running Tours LPGC. Conoce las cookies que utilizamos y cómo gestionar tus preferencias.",
  },
  fr: {
    title: "Politique de Cookies — Running Tours LPGC",
    description:
      "Politique de cookies de Running Tours LPGC. Découvrez les cookies que nous utilisons et comment gérer vos préférences.",
  },
  de: {
    title: "Cookie-Richtlinie — Running Tours LPGC",
    description:
      "Cookie-Richtlinie von Running Tours LPGC. Erfahren Sie, welche Cookies wir verwenden und wie Sie Ihre Einstellungen verwalten.",
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
      canonical: `${BASE_URL}/${locale}/cookies`,
      languages: {
        en: `${BASE_URL}/en/cookies`,
        es: `${BASE_URL}/es/cookies`,
        fr: `${BASE_URL}/fr/cookies`,
        de: `${BASE_URL}/de/cookies`,
        "x-default": `${BASE_URL}/en/cookies`,
      },
    },
  };
}

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
