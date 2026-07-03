# CESeL Primus 홈페이지 (ceslprimus.com)

주식회사 쎄슬프라이머스 농업회사법인의 국·영문 기업 홈페이지. 프리미엄 딸기 수직농장(알파팜) + 냉각·제습 + 콜드체인을 잇는 농식품 인프라 통합 솔루션 기업.

- 담당: 강호수(사업개발) / 대표: 이관호(Kevin Lee)
- 배포 도메인: https://www.ceslprimus.com (한국어), https://www.ceslprimus.com/en (영어)

## 스택
- Next.js 15 App Router (React, TypeScript), Tailwind CSS
- 배포: GitHub → Vercel 자동 배포 (`main` push 시)
- 스크립트: `npm run dev` / `npm run build` / `npm run start`
- 분석: GA4 (`G-EE93PZ4M0Q`), 문의 시 `generate_lead` 커스텀 이벤트

## 핵심 파일 지도
- `app/insights/articles.ts` — 인사이트 글 데이터(현재 13편). `Article` 인터페이스 + `en`(영문) 하위 객체. 헬퍼: `isLive()`, `liveArticles()`, `getArticle()`.
- `app/components/ArticleLayout.tsx` — 로케일 대응 상세 페이지 레이아웃(`locale: "ko"|"en"`). 관련 인사이트 자동 내부링크 포함.
- `app/components/InsightsBoard.tsx` — 게시판(카테고리 필터 + 검색 + 페이지네이션, PAGE_SIZE=6). `?cat=` URL 파라미터 지원.
- `app/components/SiteHeader.tsx` — 헤더. `langHref` prop으로 언어 토글 목적지 지정. 로고 항상 밝은 헤더 + 진회색.
- `app/HomePage.tsx` — 홈. NewsSection(최신소식 9개 자동), LineupSection(라인업 상세보기 + 관련 인사이트), HashScroll.
- `app/home-content.ts` — 국·영문 콘텐츠 딕셔너리(`koContent`/`enContent`): nav, footer, chat, faq, contact, news 등.
- `app/insights/page.tsx`, `app/insights/[slug]/page.tsx` — 국문 게시판/상세.
- `app/en/insights/page.tsx`, `app/en/insights/[slug]/page.tsx` — 영문 게시판/상세.
- `app/sitemap.ts` — `isLive` 글만 사이트맵에 포함(국문 /insights, 영문 /en/insights).
- `app/layout.tsx` — 메타/키워드/GA4 스크립트.
- `.github/workflows/daily-rebuild.yml` — 매일 09:00 KST(00:00 UTC) cron으로 Vercel 재빌드 트리거(예약 발행 반영). Deploy Hook은 GitHub Secret `VERCEL_DEPLOY_HOOK`에만 존재(공개 레포이므로 코드에 하드코딩 금지).
- `public/media/series/series-N.webp` (국문) + `series-N-en.webp` (영문) — SNS 시리즈 인포그래픽.

## 주요 규칙·컨벤션
- **양방향 i18n**: 모든 글은 `en` 하위 객체(title/lead/sections/faq/ctaTitle/ctaBody/lineupLabel)를 갖고, `categoryEn`으로 카테고리 영문 매핑. 이미지도 `heroImageEn` 별도. 새 글은 반드시 국·영문 둘 다 작성.
- **예약 발행**: `publishAt`(없으면 `date`)이 오늘 이하인 글만 공개. `isLive()`가 게시판·상세·홈·사이트맵 전부에서 게이트. 미래 날짜 `publishAt`을 넣으면 그 날 자동 공개(daily-rebuild cron이 재빌드).
- **인포그래픽 히어로**: 전체가 보여야 하는 이미지는 `heroContain: true` + `heroWidth`/`heroHeight` 지정. 일반 사진은 미지정(16:9 cover).
- **시리즈 이미지**: 국문 `series-N.webp`, 영문 `series-N-en.webp`. 원본 PNG는 webp 변환 후 저장소에 두지 않음.
- **SEO 클러스터**: '딸기수직농장' 등 타깃 키워드 중심 토픽 클러스터 + 같은 카테고리 글 자동 내부링크(ArticleLayout). JSON-LD(Article/BreadcrumbList/FAQPage), 메타 키워드, `knowsAbout` 구조화 데이터.

## 배포 워크플로
1. 파일 편집 → 2. 커밋+push(사용자는 주로 GitHub Desktop 사용) → 3. Vercel 자동 배포(1~2분).
- 새 글/변경 배포 시 **복사-붙여넣기용 커밋 메시지(Summary + Description)** 를 함께 제공하면 좋음.
- 배포 후 `https://www.ceslprimus.com/...` fetch로 라이브 검증.

## 현재 상태 (2026-07-02 기준)
- 인사이트 13편(국·영문 완비). 최신: `alphafarm-water-recovery`(8탄, 알파팜 물 회수·내부 재이용) 발행 완료.
- 시리즈 1~7 + 8탄 인포그래픽 반영. GA4·사이트맵·게시판·영문 사이트 정상.
- 예약 발행 시스템 + 매일 09:00 재빌드 cron 구축 완료.

## 로드맵 / 진행 예정
- '딸기수직농장' 클러스터 콘텐츠 주 2편 지속 발행(예약 발행 활용, 최대 30일치 사전 생성 가능).
- 색인·상위노출은 콘텐츠 누적 + 시간(수주~수개월). GSC 실적에서 '딸기수직농장' 평균순위 주간 추적.
- 소셜: 페이스북 개인계정, 네이버/구글 블로그(한·영), 링크드인(영문).
