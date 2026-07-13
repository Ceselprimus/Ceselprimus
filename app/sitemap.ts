import type { MetadataRoute } from "next";
import { articles, isLive } from "./insights/articles";

const baseUrl = "https://www.ceslprimus.com";
// 솔루션·문의 등 잘 바뀌지 않는 정적 페이지 기준 날짜
const staticLastModified = new Date("2026-06-23T00:00:00+09:00");

const languages = {
  ko: baseUrl,
  en: `${baseUrl}/en`
};

export default function sitemap(): MetadataRoute.Sitemap {
  const live = articles.filter((a) => isLive(a));
  // 홈·인사이트 목록은 '최신 인사이트'를 노출하므로, 가장 최근 발행 글 날짜를 lastmod로 사용
  // (새 글이 나가면 자동으로 최신화되어 구글 재크롤 신호가 살아있음 — 고정값이면 "변경 없음"으로 신호가 죽음)
  const latestDate = live.reduce((max, a) => (a.date > max ? a.date : max), "2026-06-23");
  const freshLastModified = new Date(latestDate + "T00:00:00+09:00");

  return [
    { url: baseUrl, lastModified: freshLastModified, changeFrequency: "daily", priority: 1, alternates: { languages } },
    { url: `${baseUrl}/en`, lastModified: freshLastModified, changeFrequency: "daily", priority: 0.9, alternates: { languages } },
    { url: `${baseUrl}/alphafarm`, lastModified: staticLastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/alphacooling`, lastModified: staticLastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: staticLastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/insights`, lastModified: freshLastModified, changeFrequency: "weekly", priority: 0.7 },
    ...live.map((a) => ({
      url: `${baseUrl}/insights/${a.slug}`,
      lastModified: new Date(a.date + "T00:00:00+09:00"),
      changeFrequency: "monthly" as const,
      priority: 0.7
    })),
    { url: `${baseUrl}/en/insights`, lastModified: freshLastModified, changeFrequency: "weekly", priority: 0.6 },
    ...live
      .filter((a) => a.en)
      .map((a) => ({
        url: `${baseUrl}/en/insights/${a.slug}`,
        lastModified: new Date(a.date + "T00:00:00+09:00"),
        changeFrequency: "monthly" as const,
        priority: 0.6
      }))
  ];
}
