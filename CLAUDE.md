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
- `app/insights/articles.ts` — 인사이트 글 데이터(현재 15편, 일부 한글 전용). `Article` 인터페이스 + `en`(영문) 하위 객체. 헬퍼: `isLive()`, `liveArticles()`, `getArticle()`.
- `app/components/ArticleLayout.tsx` — 로케일 대응 상세 페이지 레이아웃(`locale: "ko"|"en"`). 관련 인사이트 자동 내부링크 포함.
- `app/components/InsightsBoard.tsx` — 게시판(카테고리 필터 + 검색 + 페이지네이션, PAGE_SIZE=6). `?cat=` URL 파라미터 지원.
- `app/components/SiteHeader.tsx` — 헤더. `langHref` prop으로 언어 토글 목적지 지정. 로고 항상 밝은 헤더 + 진회색.
- `app/HomePage.tsx` — 홈. NewsSection(사업 모델 제안 카드 + 최신 인사이트 9개 자동 — 모델 글은 최신 인사이트에서 자동 제외), LineupSection(라인업 상세보기 + 관련 인사이트), AlphaCore 섹션(9탄 인포그래픽+6대 특징), HashScroll.
- `app/home-content.ts` — 국·영문 콘텐츠 딕셔너리(`koContent`/`enContent`): nav, footer, chat, faq, contact, news 등.
- `app/insights/page.tsx`, `app/insights/[slug]/page.tsx` — 국문 게시판/상세.
- `app/en/insights/page.tsx`, `app/en/insights/[slug]/page.tsx` — 영문 게시판/상세.
- `app/sitemap.ts` — `isLive` 글만 사이트맵에 포함(국문 /insights, 영문 /en/insights).
- `app/layout.tsx` — 메타/키워드/GA4 스크립트.
- `.github/workflows/daily-rebuild.yml` — 매일 09:00 KST(00:00 UTC) cron으로 Vercel 재빌드 트리거(예약 발행 반영). Deploy Hook은 GitHub Secret `VERCEL_DEPLOY_HOOK`에만 존재(공개 레포이므로 코드에 하드코딩 금지).
- `public/media/series/series-N.webp` (국문) + `series-N-en.webp` (영문) — SNS 시리즈 인포그래픽.

## 주요 규칙·컨벤션
- **양방향 i18n**: 글은 `en` 하위 객체(title/lead/sections/faq/ctaTitle/ctaBody/lineupLabel)를 갖고, `categoryEn`으로 카테고리 영문 매핑. 이미지도 `heroImageEn` 별도. **영문 이미지·문안이 없는 한글 전용 글은 `en` 생략** — 영문 게시판/사이트맵/영문 홈에서 자동 제외됨(영문 사이트에 한글 콘텐츠 노출 절대 금지, 대표 강조 사항).
- **사업 모델 제안 vs 최신 인사이트**: 제목·내용이 '~연계 모델' 등 사업모델형이면 `home-content.ts` news.models에 등록(홈 '사업 모델 제안' 그룹에만 노출, 최신 인사이트에서 자동 제외). 기술·설명형 글만 최신 인사이트에 노출. 모델 소개는 SNS에 올리지 않음(대표 방침).
- **예약 발행**: `publishAt`(없으면 `date`)이 오늘 이하인 글만 공개. `isLive()`가 게시판·상세·홈·사이트맵 전부에서 게이트. 미래 날짜 `publishAt`을 넣으면 그 날 자동 공개(daily-rebuild cron이 재빌드).
- **인포그래픽 히어로**: 전체가 보여야 하는 이미지는 `heroContain: true` + `heroWidth`/`heroHeight` 지정. 일반 사진은 미지정(16:9 cover).
- **시리즈 이미지**: 국문 `series-N.webp`, 영문 `series-N-en.webp`. 원본 PNG는 webp 변환 후 저장소에 두지 않음.
- **SEO 클러스터**: '딸기수직농장' 등 타깃 키워드 중심 토픽 클러스터 + 같은 카테고리 글 자동 내부링크(ArticleLayout). JSON-LD(Article/BreadcrumbList/FAQPage), 메타 키워드, `knowsAbout` 구조화 데이터.

## 배포 워크플로
1. 파일 편집 → 2. 커밋+push(사용자는 주로 GitHub Desktop 사용) → 3. Vercel 자동 배포(1~2분).
- 새 글/변경 배포 시 **복사-붙여넣기용 커밋 메시지(Summary + Description)** 를 함께 제공하면 좋음.
- 배포 후 `https://www.ceslprimus.com/...` fetch로 라이브 검증.

## 현재 상태 (2026-07-07 기준)
- 인사이트 15편. 10탄 `knowledge-center-chp-strawberry-farm`(지식산업센터 CHP 모델) — 7/7 영문(글로벌, SGD) 추가로 국·영문 완비. 11탄 `alphafarm-low-power-dehumidification`(저전력 저온제습, 국·영문).
- 홈 '사업 모델 제안' 6종(국·영문 모두). 그 아래 최신 인사이트(모델 글 자동 제외). 홈 알파코어 섹션 신규 인포그래픽(`concepts/alphacore-hero(.|-en).webp`) + 6대 특징 통박스.
- 구축 사례에 평택 유튜브 영상 카드 추가(`cases.items`의 `youtubeId` 필드, 클릭 시 임베드 모달). GA4·사이트맵·게시판·영문 사이트 정상.
- '딸기수직농장 = 홈페이지' SEO 방침 적용 완료: 홈 H1/title 키워드 앞배치, 랜딩 4개는 홈 보조 구조(키워드 앵커로 홈 링크), 인사이트 하단 홈 키워드 링크.
- 예약 발행 시스템 + 매일 09:00 재빌드 cron 구축 완료.
- 상세 인수인계는 `HANDOFF.md` 참조.

## 업무 자동화 스킬 (.claude/skills/)
반복 업무는 스킬로 정형화되어 있음. 대표 지시가 오면 해당 스킬을 사용할 것:
- `/ceo-task` — 대표 카톡 지시 원문을 받아 분류→실행→커밋메시지+카톡보고 생성 (진입점, 애매하면 이것부터)
- `/series-upload` — N탄 시리즈 홈페이지 업로드 전체 워크플로 (이미지 변환→기사→배치→검증→보고)
- `/gsc-weekly` — GSC 성과 CSV 주간 분석 (히스토리: `docs/gsc-history/`)
- `/sns-draft` — 채널별(링크드인 영문/블로그/페북) SNS 문안 생성

## 외부 연동 상태
- **구글 드라이브 MCP**: hosu676767@gmail.com 계정으로 연동됨. 단 **영업DB 폴더는 아직 이 계정에 미공유** — 대표(또는 강프로 업무계정)가 영업DB 폴더를 hosu676767@gmail.com에 공유하면 `SNS 업로드 문건`/`홈페이지` 폴더에서 파일 직접 수령 가능. 공유 전까지는 사용자가 `docs/` 하위에 파일을 넣어주는 방식 사용(예: `docs/260706업로드문서/` — gitignore됨).
- SNS 직접 게시(네이버/링크드인/페이스북)는 불가 — 문안 생성까지만, 게시는 사용자가.
- 이지바로/IRIS는 OTP·화면 필요해 자동화 불가 — 품의서·검수확인서 초안 작성까지만 지원.

## 로드맵 / 진행 예정
- '딸기수직농장' 클러스터 콘텐츠 주 2편 지속 발행(예약 발행 활용, 최대 30일치 사전 생성 가능).
- 색인·상위노출은 콘텐츠 누적 + 시간(수주~수개월). GSC 실적에서 '딸기수직농장' 평균순위 주간 추적(다음 체크포인트 ~7/10, `/gsc-weekly`).
- 대기 중: ① SNS 9~11탄 순차 게시(대표 "순서대로 업로드" 지시 대기, 모델 글은 SNS 금지) ② 지식산업센터 방문조사 지원(영업 참고서 리스트가 영업DB에 있어 Drive 공유/docs 전달 필요). (지식산업센터 글로벌 영문 → 영문 홈 반영은 7/7 완료)
- 소셜: 페이스북 개인계정, 네이버/구글 블로그(한·영), 링크드인(영문).
