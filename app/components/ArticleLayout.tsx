import Image from "next/image";
import SiteHeader from "./SiteHeader";
import InquiryButton from "./InquiryButton";
import ChatWidget from "./ChatWidget";
import FloatingWhatsApp from "./FloatingWhatsApp";
import { koContent } from "../home-content";
import type { Article } from "../insights/articles";

const baseUrl = "https://www.ceslprimus.com";

export default function ArticleLayout({ article }: { article: Article }) {
  const c = koContent;
  const url = `${baseUrl}/insights/${article.slug}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${url}/#article`,
      headline: article.title,
      description: article.description,
      image: `${baseUrl}${article.heroImage}`,
      datePublished: article.date,
      dateModified: article.date,
      inLanguage: "ko-KR",
      author: { "@type": "Organization", name: "쎄슬프라이머스", "@id": `${baseUrl}/#organization` },
      publisher: { "@id": `${baseUrl}/#organization` },
      mainEntityOfPage: url,
      keywords: article.keywords.join(", ")
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: baseUrl },
        { "@type": "ListItem", position: 2, name: "인사이트", item: `${baseUrl}/insights` },
        { "@type": "ListItem", position: 3, name: article.title, item: url }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: article.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a }
      }))
    }
  ];

  return (
    <main id="top" className="bg-paper text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <SiteHeader nav={c.nav} contact={c.contact} />

      <article className="mx-auto w-[min(760px,92vw)] pb-16 pt-32 md:pt-40">
        <p className="flex items-center gap-2 text-[0.9rem] font-semibold text-forest">
          <a href="/insights" className="hover:underline">인사이트</a>
          <span aria-hidden>·</span>
          <span>{article.category}</span>
          <span aria-hidden>·</span>
          <span className="font-normal text-ink/45">{article.date} · 약 {article.readMin}분</span>
        </p>
        <h1 className="mt-4 text-[1.9rem] font-bold leading-[1.25] tracking-tight text-ink md:text-[2.5rem]">
          {article.title}
        </h1>
        <p className="mt-5 text-[1.1rem] leading-relaxed text-ink/70">{article.lead}</p>

        <figure className="mt-8 overflow-hidden rounded-2xl bg-ink/5">
          {article.heroContain ? (
            <Image
              src={article.heroImage}
              alt={article.heroAlt}
              width={article.heroWidth ?? 1200}
              height={article.heroHeight ?? 800}
              className="h-auto w-full"
              sizes="(min-width:760px) 760px, 92vw"
            />
          ) : (
            <div className="relative aspect-[16/9]">
              <Image src={article.heroImage} alt={article.heroAlt} fill className="object-cover" sizes="(min-width:760px) 760px, 92vw" />
            </div>
          )}
        </figure>

        <div className="mt-10 space-y-9">
          {article.sections.map((s, i) => (
            <section key={i}>
              <h2 className="text-[1.35rem] font-bold tracking-tight text-ink md:text-[1.6rem]">{s.h}</h2>
              {s.paras.map((p, j) => (
                <p key={j} className="mt-3 text-[1.05rem] leading-[1.8] text-ink/75">{p}</p>
              ))}
              {s.bullets ? (
                <ul className="mt-4 space-y-2">
                  {s.bullets.map((b, k) => (
                    <li key={k} className="flex gap-2.5 text-[1.02rem] leading-relaxed text-ink/75">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-forest" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        <section className="mt-12 rounded-2xl bg-white p-6 ring-1 ring-ink/8 md:p-8">
          <h2 className="text-[1.3rem] font-bold tracking-tight text-ink">자주 묻는 질문</h2>
          <div className="mt-4 divide-y divide-ink/8">
            {article.faq.map((f, i) => (
              <div key={i} className="py-4">
                <p className="text-[1.05rem] font-bold text-ink">Q. {f.q}</p>
                <p className="mt-2 text-[1.02rem] leading-relaxed text-ink/72">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-2xl bg-forest/[0.05] p-6 text-center ring-1 ring-forest/20 md:p-8">
          <h2 className="text-[1.3rem] font-bold tracking-tight text-ink md:text-[1.5rem]">{article.ctaTitle}</h2>
          <p className="mx-auto mt-3 max-w-lg text-[1.02rem] leading-relaxed text-ink/68">{article.ctaBody}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <InquiryButton
              contact={c.contact}
              className="inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-[1rem] font-semibold text-white transition hover:bg-ink"
            >
              사업개발 문의
            </InquiryButton>
            <a
              href={article.lineupHref}
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[1rem] font-semibold text-ink ring-1 ring-ink/15 transition hover:ring-forest/40"
            >
              {article.lineupLabel}
            </a>
          </div>
        </section>

        <div className="mt-10">
          <p className="text-[0.82rem] font-bold tracking-wide text-ink/45">관련 키워드 · Related Keywords</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {article.relatedKeywords.map((kw, i) => (
              <li key={i} className="rounded-full bg-white px-3.5 py-1.5 text-[0.85rem] text-ink/55 ring-1 ring-ink/8">{kw}</li>
            ))}
          </ul>
        </div>

        <div className="mt-10 border-t border-ink/10 pt-6">
          <a href="/insights" className="text-[0.95rem] font-semibold text-forest hover:underline">← 인사이트 목록으로</a>
        </div>
      </article>

      <footer className="bg-ink py-10 text-center">
        <a href="/" className="text-[0.95rem] font-semibold text-white transition hover:text-mint">쎄슬프라이머스 홈으로</a>
        <p className="mt-3 text-[0.85rem] text-white/55">© 2026 쎄슬프라이머스. 모든 권리 보유.</p>
      </footer>

      <ChatWidget chat={c.chat} faq={c.faq} contact={c.contact} />
      <FloatingWhatsApp whatsapp={c.whatsapp} />
    </main>
  );
}
