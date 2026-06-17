import type { MetadataRoute } from "next";

const baseUrl = "https://www.ceslprimus.com";
const lastModified = new Date("2026-06-10T00:00:00+09:00");

const languages = {
  ko: baseUrl,
  en: `${baseUrl}/en`
};

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "daily",
      priority: 1,
      alternates: { languages }
    },
    {
      url: `${baseUrl}/en`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.9,
      alternates: { languages }
    },
    { url: `${baseUrl}/alphafarm`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/alphacooling`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/alphasupport`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "weekly", priority: 0.7 }
  ];
}
