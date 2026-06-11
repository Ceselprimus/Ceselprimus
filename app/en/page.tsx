import type { Metadata } from "next";
import HomePage from "../HomePage";
import { enContent } from "../home-content";

export const metadata: Metadata = {
  title: "CESeL Primus | From Vertical Farms to Cold Chain — Food Infrastructure as One Platform",
  description:
    "CESeL Primus is an agri-food and cold-chain infrastructure technology company. Starting from premium strawberry vertical farming, we connect cooling & dehumidification, energy & operations management, cold chain, and business development support — AlphaFarm, AlphaCooling, AlphaEnergy, and AlphaSupport.",
  alternates: {
    canonical: "/en",
    languages: {
      "ko-KR": "/",
      en: "/en",
      "x-default": "/"
    }
  },
  openGraph: {
    title: "CESeL Primus | Food Infrastructure as One Platform",
    description:
      "From vertical farms to cold chain — AlphaFarm, AlphaCooling, AlphaEnergy, and AlphaSupport connect production to business development.",
    url: "https://www.ceslprimus.com/en",
    siteName: "CESeL Primus",
    locale: "en_US",
    images: [
      {
        url: "/media/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CESeL Primus integrated solution portfolio"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "CESeL Primus | Food Infrastructure as One Platform",
    description:
      "From vertical farms to cold chain — AlphaFarm, AlphaCooling, AlphaEnergy, and AlphaSupport.",
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
