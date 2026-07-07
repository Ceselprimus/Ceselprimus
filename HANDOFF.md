# 쎄슬프라이머스 홈페이지 — 인수인계 (2026-07-07)

새 Claude Code 대화창에서 작업을 이어가기 위한 인수인계 노트. 프로젝트 규칙·파일 지도는 `CLAUDE.md`에 있으니 함께 읽으세요. 자동화 스킬은 `.claude/skills/`에 있습니다.

---

## 0. 새 대화 시작 시 첫 지시 예시
```
CLAUDE.md와 HANDOFF.md 읽고 현재 상태 파악해줘.
```
대표 카톡 지시가 오면: 원문을 그대로 붙여넣고 `/ceo-task` 실행 → 분류→처리→커밋메시지+카톡보고 자동.

## 1. 프로젝트 한 줄 요약
주식회사 쎄슬프라이머스 농업회사법인 국·영문 기업 홈페이지(`ceslprimus.com`). 프리미엄 딸기 수직농장(알파팜) + 냉각·제습(알파쿨링) + 전력·데이터(알파에너지) + 사업화 지원(알파서포트) 농식품·콜드체인 인프라 통합 솔루션 기업.
- 담당: 강호수 프로(사업개발) · 대표: 이관호(Kevin Lee, 말레이시아 상주) · 실장: 김낙순(캐나다)
- 배포: GitHub `main` push → Vercel 자동 배포(1~2분). 사용자는 **GitHub Desktop**으로 커밋·push.
- 스택: Next.js 15 App Router / TypeScript / Tailwind. `npm run dev|build|start`.

## 2. 현재 상태 (2026-07-07 기준)
- **인사이트 15편**. 국문 15 / 영문 14(10탄만 국문 전용이었다가 7/7 영문 추가로 이제 영문도 15편 상당 — 아래 참조).
- 홈 **'사업 모델 제안'** 그룹: 국문 6종 / 영문 6종. 그 아래 **최신 인사이트**(모델 글은 자동 제외).
- 홈 **알파코어 섹션**: 신규 인포그래픽(국·영문) + 6대 특징 통박스.
- **구축 사례**: 사진 카드 + 평택 유튜브 영상 카드(재생 버튼→임베드 모달).
- GA4(`G-EE93PZ4M0Q`)+generate_lead, 예약발행(`publishAt`+`isLive()`)+매일 09:00 재빌드 cron 정상.
- 최신 커밋(main): `dd68186 구축 사례에 평택 딸기수직농장 재배 영상 추가`. **작업 트리 클린**(단, 이번 세션에서 `.bkit` 언트랙+`.gitignore` 수정 미커밋 — 아래 5번).

## 3. 최근 세션(7/3~7/7) 작업 내역 — 전부 배포됨
1. **홈 중심 SEO 재정비**('딸기수직농장=홈페이지', 대표 방침): 홈 H1/title 키워드 앞배치, 랜딩 4개(alphafarm/alphacooling/alphasupport/contact)를 홈 보조 구조로 정리(제목에서 헤드키워드 제거, 키워드 나열블록 삭제→관련 인사이트 링크, 본문에 '딸기수직농장 알파팜' 앵커로 홈 내부링크).
2. **알파코어 보강**: 홈 알파코어 섹션 6대 특징 + 신규 인포그래픽 이미지(국문 `alphacore-hero.webp`, 영문 `alphacore-hero-en.webp`). 좌 이미지·우 텍스트, 6대 특징 통박스 리스트.
3. **인사이트 10·11탄 발행**:
   - 10탄 `knowledge-center-chp-strawberry-farm`(지식산업센터 유휴공간 재생형 CHP 연계 모델). 국문 발행 → 7/7 **영문(글로벌, SGD·"Underutilized Spaces & Buildings") 추가** → 영문 홈 Business Model Proposal 반영.
   - 11탄 `alphafarm-low-power-dehumidification`(저전력 저온제습, VPD). 국·영문.
4. **소식 섹션 개편**: '최신 인사이트' 위에 '사업 모델 제안'(Business Model Proposals) 그룹 신설. 사업모델 글(발효공장·발전소·석유화학수소·팜투리테일·코어20·지식산업센터)은 이 그룹에만 노출하고 최신 인사이트에서 자동 제외. '공식 채널' SNS 카드 블록 삭제. 사업모델 카드를 인사이트와 동일한 큰 카드(3열)로 통일.
5. **구축 사례에 평택 영상 추가**: 유튜브(6qe910dslRg) 영상을 사례 카드로. 썸네일 `case-pyeongtaek-plantyfarm.webp`, 클릭 시 `youtube-nocookie` 임베드 모달.
6. **업무 자동화 스킬 4종** + CLAUDE.md 최신화(4번 항목).

## 4. 대기 중 / 다음 할 일
- **SNS 게시**(사용자 직접, 문안은 `/sns-draft`로 생성): 11탄 저온제습 문안 준비됨(네이버 블로그→페북→링크드인 영문 순, 대표 개인계정 좋아요). SNS 9~11탄 대표 "순서대로 업로드" 지시 대기. **모델 소개 글은 SNS 금지**(대표 방침, "장사 속 보임").
- **지식산업센터 방문조사**(사용자 현장, 수·목): 대표가 준 '영업 참고서'의 신규 지산 리스트가 영업DB에 있음 → Drive 공유 또는 `docs/`로 전달되면 후보정리+방문체크리스트 지원 가능. 실장 요청: 분양중/미분양 지산 리스트.
- **GSC 주간 추적**(`/gsc-weekly`): '딸기수직농장' 순위. 다음 체크포인트 ~7/10. 히스토리 `docs/gsc-history/`(단 docs/는 gitignore라 로컬 보관).

## 5. ⚠️ 이번 세션 미커밋 변경 (사용자가 커밋 필요)
- `.gitignore`에 `.bkit/`, `.claude/settings.local.json` 추가
- `.bkit/`를 git 추적에서 제거(`git rm --cached`, 로컬 파일은 유지) — 공개 레포에 플러그인 런타임/감사 로그가 커밋돼 있던 것 정리
- **커밋 메시지 예시**: `chore: .bkit 플러그인 상태 폴더 gitignore 처리`
- GitHub Desktop에서 이 변경(삭제로 표시됨)을 커밋하면 됨.

## 6. 핵심 파일 지도
- `app/insights/articles.ts` — 인사이트 15편. `Article`+`en`. 한글 전용 글은 `en` 생략 가능(영문 사이트 자동 제외). `isLive()`/`liveArticles()`/`getArticle()`.
- `app/home-content.ts` — 국·영문 딕셔너리(`koContent`/`enContent`). `news.models`(사업 모델 제안), `alphafarm.core`(알파코어 6대 특징+이미지), `cases.items`(구축 사례, `youtubeId?` 필드로 영상 지원).
- `app/HomePage.tsx` — NewsSection(모델 카드+최신 인사이트, modelSlugs로 중복 제외), AlphaFarmSection(알파코어), CasesSection.
- `app/components/CasesGallery.tsx` — 사례 갤러리. 영상 카드→VideoModal(유튜브 임베드), 사진 카드→Lightbox(영상 제외 매핑).
- `app/components/ArticleLayout.tsx` — 상세(ko/en), 관련글+홈 키워드 앵커. `app/components/KeywordLanding.tsx` — 랜딩 4종 공용.
- `app/layout.tsx` — 메타/타이틀/GA4. `app/sitemap.ts` — isLive+`a.en` 게이트.
- `public/media/series/series-N(.|-en).webp` — 시리즈 인포그래픽. `public/media/concepts/` — 알파코어 등.
- `.claude/skills/{ceo-task,series-upload,gsc-weekly,sns-draft}` — 자동화 스킬.

## 7. 주요 규칙·컨벤션 (대표 피드백 반영)
- **홈 중심 SEO**: 대표 키워드('딸기수직농장')는 홈이 담당. 새 랜딩 페이지 남발 금지, 하위는 홈 보조.
- **양방향 i18n**: 글은 `en` 하위객체. **영문 이미지·문안 없으면 `en` 생략**(영문 사이트에 한글 노출 절대 금지 — 대표 강조).
- **사업 모델 vs 인사이트**: '~연계 모델' 등은 `news.models` 등록(사업 모델 제안에만, 최신 인사이트 제외). 기술·설명형만 인사이트.
- **보안**: 내부자료(영업가이드·상세 사업성·기술 세부)·건물 외관 사진 홈페이지/SNS 금지. 대표 연락처는 왓츠앱 번호만.
- **인포그래픽 히어로**: `heroContain:true`+`heroWidth`/`heroHeight`. 원본 PNG는 webp 변환 후 저장소 미보관(docs/는 gitignore).
- **보고 스타일**: 지시 접수는 "네, 알겠습니다"만. 완료보고는 결과+확인방법 중심으로 짧게.

## 8. 외부 연동 상태
- **구글 드라이브 MCP**: hosu676767@gmail.com 연동됨. 단 **영업DB 폴더 미공유** → 검색 안 됨. 공유되면 `SNS 업로드 문건`/`홈페이지`/`영업가이드`에서 파일 직접 수령 가능. 공유 전엔 `docs/` 하위 전달(한글 파일명은 PowerShell로 복사).
- SNS 직접 게시(네이버/링크드인/페이스북) 불가 — 문안까지만. 이지바로/IRIS는 OTP·화면 필요해 자동화 불가(품의서·검수확인서 초안까지만).
- 배포 후 `curl.exe -s https://www.ceslprimus.com/...` 로 라이브 검증.

## 9. 개발 팁
- **build↔dev 충돌 주의**: dev 서버 켜진 채 `npm run build` 하면 `.next` 공유로 dev가 깨짐. build 전 dev 정지 → `rm -rf .next` → build.
- preview_screenshot이 간헐 타임아웃(프리뷰 인프라 이슈) — preview_eval(fetch/DOM 측정)로 검증 대체 가능.
- 기존 콘솔 경고 2종(폰트 media=print 스왑, /en의 html lang=ko)은 알려진 별개 이슈(신규 에러 아님).
