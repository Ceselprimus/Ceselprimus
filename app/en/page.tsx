import type { Metadata } from "next";
import HomePage from "../HomePage";
import { enContent } from "../home-content";

export const metadata: Metadata = {
  title: { absolute: "Strawberry Vertical Farm EcoTech | Energy, Water, Waste Heat & CO₂ | CESeL Primus" },
  description:
    "CESeL Primus is a strawberry vertical farm–based EcoTech company providing LED-heat-assisted low-power dehumidification, 15°C/50% RH climate control, condensate recovery, outdoor-unit precooling, and waste heat and CO₂ utilization.",
  alternates: {
    canonical: "/en",
    languages: {
      "ko-KR": "/",
      en: "/en",
      "x-default": "/"
    }
  },
  openGraph: {
    title: "Strawberry Vertical Farm EcoTech | Energy, Water, Waste Heat & CO₂ | CESeL Primus",
    description:
      "CESeL Primus is a strawberry vertical farm–based EcoTech company providing LED-heat-assisted low-power dehumidification, 15°C/50% RH climate control, condensate recovery, outdoor-unit precooling, and waste heat and CO₂ utilization.",
    url: "https://www.ceslprimus.com/en",
    siteName: "CESeL Primus",
    locale: "en_US",
    images: [
      {
        url: "/media/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CESeL Primus — strawberry vertical farm–based EcoTech company"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Strawberry Vertical Farm EcoTech | Energy, Water, Waste Heat & CO₂ | CESeL Primus",
    description:
      "Reduce energy, recover water, and turn waste heat and CO₂ into productive resources — a strawberry vertical farm–based EcoTech company.",
    images: ["/media/og-image.jpg"]
  }
};

export default function HomeEn() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: `document.documentElement.lang="en";` }} />
      <HomePage content={enContent} />
    </>
  );
}
