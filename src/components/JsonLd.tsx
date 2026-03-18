import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { reviews } from "@/lib/data";

const BASE_URL = "https://runningtourslpgc.com";

function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "@id": `${BASE_URL}/#business`,
    name: "Running Tours LPGC",
    description:
      "Guided running tours in Las Palmas de Gran Canaria. Explore the city's beaches, historic Vegueta, and scenic viewpoints with a local runner guide.",
    url: BASE_URL,
    telephone: "+34671201007",
    email: "info@runningtourslpgc.com",
    image: `${BASE_URL}/images/hero-las-canteras.jpg`,
    logo: `${BASE_URL}/images/logo-running-tours.png`,
    priceRange: "€35–€90",
    currenciesAccepted: "EUR",
    paymentAccepted: "Credit Card, Stripe",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Las Palmas de Gran Canaria",
      addressRegion: "Canary Islands",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.1235,
      longitude: -15.4363,
    },
    sameAs: [
      "https://www.instagram.com/runningtourslpgc/",
      "https://www.strava.com/clubs/2017860",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "50",
      bestRating: "5",
      worstRating: "1",
    },
    founder: {
      "@type": "Person",
      name: "Dani Mesa",
      alternateName: "Nano",
      jobTitle: "Running Guide",
    },
    areaServed: {
      "@type": "City",
      name: "Las Palmas de Gran Canaria",
    },
    tourismType: ["Running", "Active Tourism", "Sightseeing"],
    availableLanguage: [
      { "@type": "Language", name: "English" },
      { "@type": "Language", name: "Spanish" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

async function FAQSchema({ locale }: { locale: Locale }) {
  const dict = await getDictionary(locale);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dict.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function OffersSchema() {
  const tours = [
    {
      name: "Las Canteras Running Experience",
      description:
        "Run along Las Canteras Beach, one of the most beautiful urban beaches in Europe, finishing at the Alfredo Kraus Auditorium.",
      price: "35",
      duration: "PT75M",
      distance: "5-7 km",
    },
    {
      name: "Historic Vegueta Run",
      description:
        "Run through Vegueta, the historic heart of Las Palmas. Discover the Cathedral, Santa Ana Square, and centuries of history.",
      price: "40",
      duration: "PT90M",
      distance: "4-6 km",
    },
    {
      name: "Las Palmas Full Tour",
      description:
        "Explore Las Palmas from end to end — from the port to the natural pools of La Laja through the vibrant city center.",
      price: "55",
      duration: "PT120M",
      distance: "10-12 km",
    },
  ];

  const schema = tours.map((tour) => ({
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.name,
    description: tour.description,
    touristType: "Runners",
    provider: { "@id": `${BASE_URL}/#business` },
    offers: {
      "@type": "Offer",
      price: tour.price,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    },
    itinerary: {
      "@type": "ItemList",
      description: `${tour.distance}, approximately ${tour.duration}`,
    },
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function ReviewsSchema() {
  const schema = reviews.map((review) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: { "@id": `${BASE_URL}/#business` },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: 5,
    },
    author: {
      "@type": "Person",
      name: review.name,
    },
    reviewBody: review.text,
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function BreadcrumbSchema({ locale }: { locale: Locale }) {
  const homeLabels: Record<Locale, string> = {
    en: "Home",
    es: "Inicio",
    fr: "Accueil",
    de: "Startseite",
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: homeLabels[locale],
        item: `${BASE_URL}/${locale}`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function JsonLd({ locale }: { locale: Locale }) {
  return (
    <>
      <LocalBusinessSchema />
      <OffersSchema />
      <FAQSchema locale={locale} />
      <ReviewsSchema />
      <BreadcrumbSchema locale={locale} />
    </>
  );
}
