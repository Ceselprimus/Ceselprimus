# CESeL Primus Homepage

CESeL Primus 기업 홈페이지 1차 검색용 랜딩페이지입니다.

## 방향

- CESeL Primus를 단순 딸기 수직농장 회사가 아니라 농식품·콜드체인 인프라를 위한 Tech Intelligence 솔루션 기업으로 표현합니다.
- 최신 IR 기준의 4개 라인업을 반영합니다: `AlphaFarm`, `AlphaCooling`, `AlphaEnergy`, `AlphaSupport`.
- 기존 `AlphaEMS` 단독 라인업 표현은 지양하고, `AlphaEnergy-EMS`와 `AlphaEnergy-PCU`를 `AlphaEnergy` 체계 안에서 정리합니다.
- 가격, ROI, 투자비, 수익 보장, 내부 IR 원문, Core/HGR 세부 기술 자료는 공개 페이지에서 제외합니다.

## 실행

```bash
npm install
npm run dev
```

로컬 URL:

```text
http://127.0.0.1:3000
```

프로덕션 빌드:

```bash
npm run build
```

## 주요 파일

- `app/page.tsx`: 랜딩페이지 섹션과 카피
- `app/layout.tsx`: SEO metadata
- `app/globals.css`: Tailwind 전역 스타일과 모션
- `public/media/hero-integrated-solution-v2.png`: 최종 히어로 이미지
- `public/media/cesel-portfolio-motion-v2.gif`: ASCII 텍스트 기반 로컬 생성 모션필름
- `public/media/cesel-portfolio-motion.gif`: 동일 모션필름 기본 파일명
- `public/media/cesel-logo-ci-transparent.png`: 누끼 처리 로고
- `public/media/cesel-logo-ci-white-transparent.png`: 다크 배경용 화이트 누끼 로고
- `public/media/cesel-logo-ci.png`: 로고 원본 복사본

## 검증

완료한 확인:

- `npm run build`
- 데스크톱 스크린샷: `output/playwright/desktop.png`
- 모바일 스크린샷: `output/playwright/mobile.png`
- 데스크톱/모바일 가로 overflow 없음
- 주요 이미지 lazy-load 정상
