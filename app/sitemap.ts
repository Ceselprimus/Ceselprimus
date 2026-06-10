import type { MetadataRoute } from "next";

const baseUrl = "https://www.ceslprimus.com";
const lastModified = new Date("2026-06-10T00:00:00+09:00");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "daily",
      priority: 1
    }
  ];
}
