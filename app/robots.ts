import type { MetadataRoute } from "next";

const baseUrl = "https://www.ceslprimus.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/"
      },
      {
        userAgent: ["GPTBot", "ChatGPT-User", "Google-Extended", "PerplexityBot", "ClaudeBot", "Claude-User"],
        allow: "/"
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`
  };
}
