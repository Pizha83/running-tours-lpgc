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

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Running Tours LPGC — Discover Las Palmas Running",
  description:
    "Explore Las Palmas de Gran Canaria on a guided running tour. Run along Las Canteras Beach, through historic Vegueta, and discover the city with a local runner guide.",
  keywords: [
    "running tour Las Palmas",
    "Gran Canaria running",
    "Las Palmas sightseeing run",
    "running tours Canary Islands",
    "active tourism Gran Canaria",
  ],
  openGraph: {
    title: "Running Tours LPGC — Discover Las Palmas Running",
    description:
      "The best way to discover Las Palmas is running. Guided running tours with a local.",
    images: ["/images/hero-las-canteras.jpg"],
    locale: "en_US",
    type: "website",
  },
};

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
