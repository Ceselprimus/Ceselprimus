import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "../components/SiteHeader";
import ChatWidget from "../components/ChatWidget";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import { koContent } from "../home-content";
import { articles } from "./articles";

const url = "https://www.ceslprimus.com/insights";

export const metadata: Metadata = {
  title: { absolute: "인사이트 | 쎄슬프라이머스 — 결로·저온제습·수직농장 가이드" },
  description:
    "식품공장 결로, 저온저장고 곰팡이, 딸기수직농장 사업 등 현장 문제와 해결법을 다루는 쎄슬프라이머스 인사이트. 저온제습·쿨링시스템·콜드체인·스마트팜 실무 가이드.",
  keywords: ["쎄슬프라이머스 인사이트", "식품공장 결로", "저온저장고 결로", "저온제습", "쿨링시스템", "딸기수직농장", "콜드체인"],
  alternates: { canonical: "/insights" },
  openGraph: {
    title: "인사이트 | 쎄슬프라이머스",
    description: "현장 문제와 해결법 — 결로·저온제습·콜드체인·수직농장 실무 가이드.",
    url,
    siteName: "쎄슬프라이머스",
    locale: "ko_KR",
    images: [{ url: "/media/og-image.jpg", width: 1200, height: 630, alt: "쎄슬프라이머스 인사이트" }],
    type: "website"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${url}/#collection`,
  url,
  name: "쎄슬프라이머스 인사이트",
  inLanguage: "ko-KR",
  isPartOf: { "@id": "https://www.ceslprimus.com/#website" },
  about: { "@id": "https://www.ceslprimus.com/#organization" }
};

export default function InsightsPage() {
  const c = koContent;
  return (
    <main id="top" className="bg-paper text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <SiteHeader nav={c.nav} contact={c.contact} />

      <section className="bg-ink text-white">
        <div className="mx-auto w-[min(1140px,92vw)] pb-16 pt-32 md:pb-20 md:pt-44">
          <p className="text-[1rem] font-semibold text-mint">인사이트 · Insights</p>
          <h1 className="mt-4 text-[2rem] font-bold leading-[1.2] tracking-tight md:text-[2.8rem]">
            현장의 문제와 해결법을 기록합니다.
          </h1>
          <p className="mt-5 max-w-2xl text-[1.1rem] leading-relaxed text-white/75">
            식품공장 결로, 저온저장고 곰팡이, 딸기수직농장 사업까지 — 쎄슬프라이머스가 현장에서 마주한 문제와 해결 관점을 공유합니다.
          </p>
        </div>
      </section>

      <section className="mx-auto w-[min(1140px,92vw)] py-14 md:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {[...articles].sort((a, b) => b.date.localeCompare(a.date)).map((a) => (
            <a
              key={a.slug}
              href={`/insights/${a.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-ink/8 transition hover:-translate-y-1 hover:shadow-card"
            >
              <div className="relative aspect-[16/9] bg-ink/5">
                <Image src={a.heroImage} alt={a.heroAlt} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width:768px) 50vw, 92vw" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-[0.85rem] font-semibold text-forest">{a.category} · {a.date}</p>
                <h2 className="mt-2 text-[1.25rem] font-bold leading-snug tracking-tight text-ink">{a.title}</h2>
                <p className="mt-2.5 line-clamp-3 text-[0.98rem] leading-relaxed text-ink/65">{a.description}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[0.92rem] font-semibold text-forest">자세히 보기 →</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <footer className="bg-ink py-10 text-center">
        <a href="/" className="text-[0.95rem] font-semibold text-white transition hover:text-mint">쎄슬프라이머스 홈으로</a>
        <p className="mt-3 text-[0.85rem] text-white/55">© 2026 쎄슬프라이머스. 모든 권리 보유.</p>
      </footer>

      <ChatWidget chat={c.chat} faq={c.faq} contact={c.contact} />
      <FloatingWhatsApp whatsapp={c.whatsapp} />
    </main>
  );
}
