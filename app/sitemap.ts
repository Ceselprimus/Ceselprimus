import type { MetadataRoute } from "next";
import { articles, isLive } from "./insights/articles";

const baseUrl = "https://www.ceslprimus.com";
const lastModified = new Date("2026-06-23T00:00:00+09:00");

const languages = {
  ko: baseUrl,
  en: `${baseUrl}/en`
};

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl, lastModified, changeFrequency: "daily", priority: 1, alternates: { languages } },
    { url: `${baseUrl}/en`, lastModified, changeFrequency: "daily", priority: 0.9, alternates: { languages } },
    { url: `${baseUrl}/alphafarm`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/alphacooling`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/alphasupport`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/insights`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    ...articles
      .filter((a) => isLive(a))
      .map((a) => ({
        url: `${baseUrl}/insights/${a.slug}`,
        lastModified: new Date(a.date + "T00:00:00+09:00"),
        changeFrequency: "monthly" as const,
        priority: 0.7
      })),
    { url: `${baseUrl}/en/insights`, lastModified, changeFrequency: "weekly", priority: 0.6 },
    ...articles
      .filter((a) => a.en && isLive(a))
      .map((a) => ({
        url: `${baseUrl}/en/insights/${a.slug}`,
        lastModified: new Date(a.date + "T00:00:00+09:00"),
        changeFrequency: "monthly" as const,
        priority: 0.6
      }))
  ];
}
