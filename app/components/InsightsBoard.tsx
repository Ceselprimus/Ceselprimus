"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { articles } from "../insights/articles";

const PAGE_SIZE = 6;

export default function InsightsBoard() {
  const sorted = useMemo(() => [...articles].sort((a, b) => b.date.localeCompare(a.date)), []);
  const categories = useMemo(() => ["전체", ...Array.from(new Set(sorted.map((a) => a.category)))], [sorted]);

  const [cat, setCat] = useState("전체");
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);

  // 라인업 등에서 /insights?cat=알파팜 으로 들어오면 해당 카테고리로 자동 필터
  useEffect(() => {
    const c = new URLSearchParams(window.location.search).get("cat");
    if (c && categories.includes(c)) setCat(c);
  }, [categories]);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return sorted.filter((a) => {
      const catOk = cat === "전체" || a.category === cat;
      const qOk = !query || (a.title + " " + a.description + " " + a.keywords.join(" ")).toLowerCase().includes(query);
      return catOk && qOk;
    });
  }, [sorted, cat, q]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(page, totalPages);
  const shown = filtered.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);

  return (
    <section className="mx-auto w-[min(1140px,92vw)] py-14 md:py-20">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => {
                setCat(c);
                setPage(1);
              }}
              className={`rounded-full px-4 py-2 text-[0.92rem] font-semibold transition ${
                cat === c ? "bg-forest text-white" : "bg-white text-ink/70 ring-1 ring-ink/12 hover:text-forest"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <input
          type="search"
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setPage(1);
          }}
          placeholder="검색 (제목·키워드)"
          aria-label="인사이트 검색"
          className="w-full rounded-full bg-white px-5 py-2.5 text-[0.95rem] text-ink outline-none ring-1 ring-ink/12 focus:ring-forest md:w-72"
        />
      </div>

      {shown.length > 0 ? (
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {shown.map((a) => (
            <a
              key={a.slug}
              href={`/insights/${a.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-ink/8 transition hover:-translate-y-1 hover:shadow-card"
            >
              <div className="relative aspect-[16/9] bg-paper">
                <Image
                  src={a.heroImage}
                  alt={a.heroAlt}
                  fill
                  className="object-contain p-2 transition duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width:768px) 50vw, 92vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-[0.85rem] font-semibold text-forest">
                  {a.category} · {a.date}
                </p>
                <h2 className="mt-2 text-[1.25rem] font-bold leading-snug tracking-tight text-ink">{a.title}</h2>
                <p className="mt-2.5 line-clamp-3 text-[0.98rem] leading-relaxed text-ink/65">{a.description}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[0.92rem] font-semibold text-forest">자세히 보기 →</span>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <p className="mt-14 text-center text-[1rem] text-ink/50">검색 결과가 없습니다.</p>
      )}

      {totalPages > 1 ? (
        <div className="mt-10 flex items-center justify-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setPage(p)}
              className={`h-10 w-10 rounded-full text-[0.95rem] font-semibold transition ${
                current === p ? "bg-forest text-white" : "bg-white text-ink/60 ring-1 ring-ink/12 hover:text-forest"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      ) : null}
    </section>
  );
}
