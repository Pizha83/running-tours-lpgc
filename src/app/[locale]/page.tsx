import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Experiences from "@/components/Experiences";
import PrivateTourCTA from "@/components/PrivateTourCTA";
import HowItWorks from "@/components/HowItWorks";
import AboutGuide from "@/components/AboutGuide";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";
import JsonLd from "@/components/JsonLd";
import type { Locale } from "@/i18n/config";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <JsonLd locale={locale as Locale} />
      <Navbar />
      <Hero />
      <TrustBar />
      <Experiences />
      <PrivateTourCTA />
      <HowItWorks />
      <AboutGuide />
      <Gallery />
      <Reviews />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </>
  );
}
