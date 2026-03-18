import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "../globals.css";
import { locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { DictionaryProvider } from "@/i18n/DictionaryProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const BASE_URL = "https://runningtourslpgc.com";

const metaByLocale: Record<
  Locale,
  { title: string; description: string; ogLocale: string }
> = {
  en: {
    title: "Running Tours LPGC — Discover Las Palmas Running",
    description:
      "Explore Las Palmas de Gran Canaria on a guided running tour. Run along Las Canteras Beach, through historic Vegueta, and discover the city with a local runner guide.",
    ogLocale: "en_US",
  },
  es: {
    title: "Running Tours LPGC — Descubre Las Palmas Corriendo",
    description:
      "Explora Las Palmas de Gran Canaria en un running tour guiado. Corre por la Playa de Las Canteras, el histórico Vegueta y descubre la ciudad con un guía corredor local.",
    ogLocale: "es_ES",
  },
  fr: {
    title: "Running Tours LPGC — Découvrez Las Palmas en Courant",
    description:
      "Explorez Las Palmas de Gran Canaria lors d'une visite guidée en courant. Courez le long de la plage de Las Canteras, à travers le quartier historique de Vegueta, avec un guide local.",
    ogLocale: "fr_FR",
  },
  de: {
    title: "Running Tours LPGC — Entdecke Las Palmas beim Laufen",
    description:
      "Erkunde Las Palmas de Gran Canaria auf einer geführten Lauftour. Laufe entlang des Las Canteras Strandes, durch das historische Vegueta und entdecke die Stadt mit einem lokalen Guide.",
    ogLocale: "de_DE",
  },
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const meta = metaByLocale[locale as Locale] ?? metaByLocale.en;

  const alternateLanguages = Object.fromEntries(
    locales.map((l) => [l, `${BASE_URL}/${l}`])
  );

  return {
    metadataBase: new URL(BASE_URL),
    title: meta.title,
    description: meta.description,
    keywords: [
      "running tour Las Palmas",
      "Gran Canaria running",
      "Las Palmas sightseeing run",
      "running tours Canary Islands",
      "active tourism Gran Canaria",
      "guided running tour",
      "Las Canteras Beach run",
      "Vegueta running tour",
    ],
    authors: [{ name: "Running Tours LPGC" }],
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        ...alternateLanguages,
        "x-default": `${BASE_URL}/en`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${BASE_URL}/${locale}`,
      siteName: "Running Tours LPGC",
      images: [
        {
          url: "/images/hero-las-canteras.jpg",
          width: 1200,
          height: 630,
          alt: "Running Tours LPGC — Las Palmas de Gran Canaria",
        },
      ],
      locale: meta.ogLocale,
      alternateLocale: locales
        .filter((l) => l !== locale)
        .map((l) => metaByLocale[l].ogLocale),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/images/hero-las-canteras.jpg"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <html lang={locale}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className={`${inter.variable} ${sora.variable} antialiased`}>
        <DictionaryProvider dict={dict} locale={locale as Locale}>
          {children}
        </DictionaryProvider>
      </body>
    </html>
  );
}
