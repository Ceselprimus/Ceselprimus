# 쎄슬프라이머스 홈페이지 — 인수인계 (2026-07-03)

이 문서는 Cowork 세션에서 진행한 작업을 Claude Code로 이어가기 위한 인수인계 노트입니다.
프로젝트 규칙·파일 지도는 `CLAUDE.md`에 있으니 함께 읽으세요.

---

## 1. 프로젝트 한 줄 요약
주식회사 쎄슬프라이머스 농업회사법인의 국·영문 기업 홈페이지(`ceslprimus.com`).
프리미엄 딸기 수직농장(알파팜) + 냉각·제습(알파쿨링) + 전력·데이터(알파에너지) + 사업화 지원(알파서포트)을 잇는 농식품·콜드체인 인프라 통합 솔루션 기업.

- 담당: 강호수(사업개발) · 대표: 이관호(Kevin Lee)
- 배포: GitHub(main push) → Vercel 자동 배포. 사용자는 주로 **GitHub Desktop**으로 커밋·push.
- 스택: Next.js 15 App Router / TypeScript / Tailwind. `npm run dev|build|start`.

## 2. 현재 상태 (2026-07-03 기준)
- **인사이트 13편**(국·영문 완비). 최신 8탄 `alphafarm-water-recovery`(물 회수·내부 재이용) 발행·라이브 완료.
- 시리즈 인포그래픽 1~8 반영(`public/media/series/series-N.webp` 국문, `series-N-en.webp` 영문).
- GA4(`G-EE93PZ4M0Q`) + `generate_lead` 문의 전환 이벤트 설치.
- 예약 발행 시스템(`publishAt` + `isLive()`) + 매일 09:00 KST 재빌드 cron(`.github/workflows/daily-rebuild.yml`) 구축.
- 영문 사이트(/en, /en/insights) 정상. 사이트맵·게시판(카테고리 필터·검색·페이지네이션) 정상.

## 3. 오늘(2026-07-03) 작업 내역 — 배포됨
대표님 지시 2건 반영:

**① 알파코어 본문 보강**
- `app/home-content.ts`의 `alphafarm.core`에 **6대 특징 배열(`features`)** 국·영문 추가:
  고밀도 재배랙 · 연중생산 · 저온제습 알파쿨링 · 에너지절감 알파에너지 · 물 생산 · 데이터센터 연계.
- `core.body`도 새 본문(코어-1 165㎡/연10~12톤, 코어-20 데이터센터·SOFC 연계)으로 보강.
- `app/HomePage.tsx` 알파코어 섹션에 features 카드 그리드 렌더링 추가(태그 칩 아래).
- 이미지는 기존 `alphacore-concept-2.webp`(SOFC+Core-20 조감도) 유지 — 새 본문과 일치.
- 원본 설명문 docx: 업로드본 "알파코어 홈페이지용 본문_한글_영문.docx" (텍스트만, 이미지 無).

**② 홈페이지 중심 SEO 재정비** (대표님 방향: '딸기수직농장 = 홈페이지')
- 홈 H1: "수직농장에서 콜드체인까지…" → **"딸기수직농장에서 콜드체인까지, 식품 인프라를 플랫폼으로."**
- eyebrow: "프리미엄 딸기수직농장 · 콜드체인 인프라 기술기업" / 첫 문단도 "프리미엄 딸기수직농장 알파팜" 앞배치. (영문 홈도 strawberry vertical farm으로)
- `app/layout.tsx` `title.default`·`description` 키워드('딸기수직농장') 맨 앞배치.
- `app/components/ArticleLayout.tsx`: 인사이트 상세 하단에 **홈으로 향하는 키워드 앵커 내부링크**("알파팜 딸기수직농장" / "AlphaFarm premium strawberry vertical farm") 추가 → 13편 전체 적용. 신호를 홈으로 집중.

## 4. 대표님 SEO 전략 방향 (앞으로 계속 지킬 것) — 중요
> 별도 랜딩 페이지 20개가 오히려 신호를 분산시켰다. 앞으로 대표 키워드('딸기수직농장', '딸기 수직농장', '프리미엄 딸기수직농장')는 **홈페이지가 담당**. 홈 제목/H1/첫 화면 카피를 키워드 중심으로. 하위 페이지는 홈을 밀어주는 보조로(홈으로 내부링크 + 명확한 앵커텍스트). 얇은/중복 페이지는 통합 또는 noindex 검토. 목표: "딸기수직농장 = 홈페이지"로 신호 집중.

- **noindex 권고(현 판단)**: 인사이트 13편은 실질 콘텐츠라 얇지 않음 → 지금은 noindex 하지 말고 '홈-보조' 구조 유지. 글은 롱테일(창업·연중생산·물 회수 등)을 노려 홈(head term)과 경쟁하지 않게. 실제 noindex는 GSC에서 진짜 중복이 확인될 때만 선별 적용.
- 메타 키워드 태그는 구글 순위에 효과 없음(참고).
- 색인·상위노출은 콘텐츠 누적 + 시간(수주~수개월). GSC 실적에서 '딸기수직농장' 평균순위 주간 추적.

## 5. 진행 예정 / 대기 작업
1. **SNS 9탄(알파코어) 업로드** — 대표님이 SNS 업로드 디렉토리에 9탄으로 넣어둠. 대표님 "순서대로 업로드" 지시 오면 `series-9.webp`/`series-9-en.webp`로 반영. (현재 이미지 파일 미수령 — 붙여넣기만 됨. 파일 업로드 필요.)
2. **'딸기수직농장' 클러스터 콘텐츠 주 2편** 지속 발행(예약 발행 활용, 최대 30일치 사전 생성 가능). `publishAt`에 미래 날짜 넣으면 그날 자동 공개.
3. **GSC 점검**: 홈 canonical·색인 상태·내부링크 확인. '딸기수직농장' 평균순위 주간 추적.
4. 소셜: 페이스북 개인계정, 네이버/구글 블로그(한·영), 링크드인(영문).

## 6. 핵심 파일 지도
- `app/insights/articles.ts` — 인사이트 데이터(13편). `Article` + `en` 하위 객체. 헬퍼 `isLive()`/`liveArticles()`/`getArticle()`.
- `app/home-content.ts` — 국·영문 콘텐츠 딕셔너리(`koContent`/`enContent`). `alphafarm.core`에 알파코어 6대 특징(`features`).
- `app/HomePage.tsx` — 홈. Hero(H1), LineupSection, AlphaCore 섹션(features 렌더), NewsSection(최신 9개 자동), HashScroll.
- `app/layout.tsx` — 메타/타이틀/키워드/GA4.
- `app/components/ArticleLayout.tsx` — 로케일 대응 상세(관련 인사이트 자동 링크 + 홈 키워드 앵커).
- `app/components/InsightsBoard.tsx` — 게시판(필터·검색·페이지네이션, PAGE_SIZE=6).
- `app/en/insights/*` — 영문 게시판/상세. `app/sitemap.ts` — isLive 글만 포함.
- `public/media/series/series-N(.|-en.)webp` — SNS 시리즈 인포그래픽.
- `.github/workflows/daily-rebuild.yml` — 09:00 KST 재빌드 cron. Deploy Hook은 GitHub Secret `VERCEL_DEPLOY_HOOK`에만(공개 레포라 코드 하드코딩 금지).

## 7. 주요 규칙·컨벤션
- **양방향 i18n**: 모든 글·홈 콘텐츠는 국·영문 둘 다. 이미지도 국문/영문 분리(`heroImageEn`, `series-N-en.webp`).
- **예약 발행**: `publishAt`(없으면 `date`)이 오늘 이하인 글만 공개. `isLive()`가 게시판·상세·홈·사이트맵 전부 게이트.
- **인포그래픽 히어로**: 전체가 보여야 하면 `heroContain: true` + `heroWidth`/`heroHeight`. 일반 사진은 미지정(16:9 cover).
- **시리즈 이미지**: 원본 PNG는 webp 변환 후 저장소에 두지 않음(webp만 커밋).
- **SEO**: JSON-LD(Article/BreadcrumbList/FAQPage), 홈 중심 대표 키워드, 하위→홈 키워드 앵커 내부링크.

## 8. 배포 워크플로 & 주의
1. 파일 편집 → 2. GitHub Desktop 커밋+push → 3. Vercel 자동 배포(1~2분) → 4. `https://www.ceslprimus.com/...` fetch로 라이브 검증.
- 배포 요청 시 **복사-붙여넣기용 커밋 메시지(Summary+Description)** 함께 제공.
- 공개 레포: Deploy Hook URL 등 비밀값은 절대 코드에 커밋 금지(GitHub Secrets만).

## 9. Claude Code에서 시작하기
```
cd C:\Hoso\02_Work\21_ceslprimus.com
claude
```
- 시작하면 `CLAUDE.md`가 자동 로드됨. 이 `HANDOFF.md`도 함께 읽으라고 첫 메시지에 지시하면 맥락이 완전히 이어짐.
- 예: "CLAUDE.md와 HANDOFF.md 읽고 현재 상태 파악해줘. 다음은 SNS 9탄 반영 또는 딸기수직농장 클러스터 글 예약 발행 차례야."
- Claude Code는 사용자 PC에서 직접 실행되므로 git 커밋·push까지 위임 가능(원하면).
