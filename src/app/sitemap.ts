import type { MetadataRoute } from "next";

const BASE_URL = "https://runningtourslpgc.com";
const locales = ["en", "es", "fr", "de"];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/privacy", "/terms", "/cookies", "/legal"];

  return pages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${BASE_URL}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: page === "" ? ("weekly" as const) : ("monthly" as const),
      priority: page === "" ? 1.0 : 0.3,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${BASE_URL}/${l}${page}`])
        ),
      },
    }))
  );
}
