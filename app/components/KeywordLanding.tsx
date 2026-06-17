import SiteHeader from "./SiteHeader";
import InquiryButton from "./InquiryButton";
import ChatWidget from "./ChatWidget";
import FloatingWhatsApp from "./FloatingWhatsApp";
import { koContent } from "../home-content";

export interface KeywordLandingProps {
  eyebrow: string;
  title: string;
  intro: string;
  blocks: { heading: string; body: string }[];
  ctaTitle: string;
  ctaBody: string;
  backHref: string;
  backLabel: string;
  jsonLd: object;
}

export default function KeywordLanding(p: KeywordLandingProps) {
  const c = koContent;
  return (
    <main id="top" className="bg-paper text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(p.jsonLd).replace(/</g, "\\u003c") }}
      />
      <SiteHeader nav={c.nav} contact={c.contact} />

      <section className="relative overflow-hidden bg-ink text-white">
        <div className="mx-auto w-[min(1140px,92vw)] pb-20 pt-36 md:pb-28 md:pt-44">
          <p className="text-[1rem] font-semibold text-mint">{p.eyebrow}</p>
          <h1 className="mt-5 max-w-3xl text-[2.1rem] font-bold leading-[1.18] tracking-tight md:text-[3rem]">
            {p.title}
          </h1>
          <p className="mt-6 max-w-2xl text-[1.1rem] leading-relaxed text-white/75 md:text-[1.2rem]">{p.intro}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="/#lineup"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[1rem] font-semibold text-ink transition hover:bg-mint"
            >
              솔루션 라인업 보기
            </a>
            <InquiryButton
              contact={c.contact}
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[1rem] font-semibold text-white ring-1 ring-white/40 transition hover:bg-white/10"
            >
              사업개발 문의
            </InquiryButton>
          </div>
        </div>
      </section>

      <section className="mx-auto w-[min(1140px,92vw)] py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {p.blocks.map((b, i) => (
            <div key={i} className="rounded-2xl bg-white p-7 ring-1 ring-ink/8 md:p-8">
              <h2 className="text-[1.3rem] font-bold tracking-tight text-ink md:text-[1.5rem]">{b.heading}</h2>
              <p className="mt-3 text-[1.04rem] leading-relaxed text-ink/68">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-ink/10 bg-white">
        <div className="mx-auto w-[min(1140px,92vw)] py-16 text-center md:py-20">
          <h2 className="text-[1.6rem] font-bold tracking-tight text-ink md:text-[2rem]">{p.ctaTitle}</h2>
          <p className="mx-auto mt-4 max-w-xl text-[1.05rem] leading-relaxed text-ink/65">{p.ctaBody}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <InquiryButton
              contact={c.contact}
              className="inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-[1rem] font-semibold text-white transition hover:bg-ink"
            >
              사업개발 문의
            </InquiryButton>
            <a
              href={p.backHref}
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[1rem] font-semibold text-ink ring-1 ring-ink/15 transition hover:ring-forest/40"
            >
              {p.backLabel}
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-ink py-10 text-center">
        <a href="/" className="text-[0.95rem] font-semibold text-white transition hover:text-mint">
          쎄슬프라이머스 홈으로
        </a>
        <p className="mt-3 text-[0.85rem] text-white/55">© 2026 쎄슬프라이머스. 모든 권리 보유.</p>
      </footer>

      <ChatWidget chat={c.chat} faq={c.faq} contact={c.contact} />
      <FloatingWhatsApp whatsapp={c.whatsapp} />
    </main>
  );
}
