import type { Metadata } from "next";
import SiteHeader from "../../components/SiteHeader";
import ChatWidget from "../../components/ChatWidget";
import FloatingWhatsApp from "../../components/FloatingWhatsApp";
import InsightsBoard from "../../components/InsightsBoard";
import { enContent } from "../../home-content";

const url = "https://www.ceslprimus.com/en/insights";

export const metadata: Metadata = {
  title: { absolute: "Insights | CESeL Primus — Vertical Farm, Cooling & Cold Chain Guides" },
  description:
    "Field problems and solutions from CESeL Primus — strawberry vertical farming, low-temperature dehumidification, cooling, and cold-chain practical guides.",
  keywords: ["strawberry vertical farm", "vertical farming", "low-temperature dehumidification", "cold chain", "AlphaFarm", "CESeL Primus insights"],
  alternates: {
    canonical: "/en/insights",
    languages: { "ko-KR": "/insights", en: "/en/insights", "x-default": "/insights" }
  },
  openGraph: {
    title: "Insights | CESeL Primus",
    description: "Field problems and solutions — vertical farm, cooling, cold chain.",
    url,
    siteName: "CESeL Primus",
    locale: "en_US",
    images: [{ url: "/media/og-image.jpg", width: 1200, height: 630, alt: "CESeL Primus Insights" }],
    type: "website"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${url}/#collection`,
  url,
  name: "CESeL Primus Insights",
  inLanguage: "en-US",
  isPartOf: { "@id": "https://www.ceslprimus.com/#website" },
  about: { "@id": "https://www.ceslprimus.com/#organization" }
};

export default function EnInsightsPage() {
  const c = enContent;
  return (
    <main id="top" className="bg-paper text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <SiteHeader nav={c.nav} contact={c.contact} langHref="/insights" />

      <section className="bg-ink text-white">
        <div className="mx-auto w-[min(1140px,92vw)] pb-16 pt-32 md:pb-20 md:pt-44">
          <p className="text-[1rem] font-semibold text-mint">Insights</p>
          <h1 className="mt-4 text-[2rem] font-bold leading-[1.2] tracking-tight md:text-[2.8rem]">
            We record field problems and solutions.
          </h1>
          <p className="mt-5 max-w-2xl text-[1.1rem] leading-relaxed text-white/75">
            From food-factory condensation to cold-storage mold and strawberry vertical farming — CESeL Primus shares the problems we meet on site and how we solve them.
          </p>
        </div>
      </section>

      <InsightsBoard locale="en" />

      <footer className="bg-ink py-10 text-center">
        <a href="/en" className="text-[0.95rem] font-semibold text-white transition hover:text-mint">CESeL Primus home</a>
        <p className="mt-3 text-[0.85rem] text-white/55">© 2026 CESeL Primus Co., Ltd. All rights reserved.</p>
      </footer>

      <ChatWidget chat={c.chat} faq={c.faq} contact={c.contact} />
      <FloatingWhatsApp whatsapp={c.whatsapp} />
    </main>
  );
}
