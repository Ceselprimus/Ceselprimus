---
name: series-upload
description: N탄 시리즈 인포그래픽+설명문을 홈페이지에 업로드하는 전체 워크플로 자동화. 대표가 "N탄 올려주세요" 지시하면 사용. 이미지 변환→기사 생성→배치→빌드→검증→커밋메시지→카톡보고까지.
---

# N탄 시리즈 홈페이지 업로드

대표(이관호)가 인포그래픽 이미지(한글/영문 PNG)와 설명문(docx)을 주면 홈페이지에 반영하는 정형 워크플로.

## 입력 확인
1. 소스 파일 위치를 찾는다. 우선순위:
   - 사용자가 지정한 로컬 경로 (예: `docs/2607XX업로드문서/`)
   - 구글 드라이브 영업DB (`SNS 업로드 문건` 또는 `홈페이지` 폴더) — Drive MCP 연동 시
2. 한글 이미지 필수. 영문 이미지 유무 확인 → **영문 없으면 한글 전용 처리**(영문 사이트에서 자동 제외됨, 절대 한글 이미지를 영문에 노출하지 말 것 — 대표가 6/29 강하게 지적한 사항).
3. docx에서 텍스트 추출: PowerShell 또는 python zipfile로 `word/document.xml`에서 `<w:t>` 추출. 한글 파일명은 Bash에서 깨지므로 **PowerShell로 복사** 후 처리.

## 처리 순서
1. **이미지 변환**: PNG → webp (quality=90, PIL 사용). 저장명 규칙:
   - 국문: `public/media/series/series-N.webp`
   - 영문: `public/media/series/series-N-en.webp`
   - 원본 PNG는 저장소에 커밋하지 않음 (docs/ 폴더는 gitignore됨)
2. **기사 생성**: `app/insights/articles.ts` 배열 **맨 앞**에 추가.
   - 기존 기사(예: alphafarm-water-recovery) 구조를 그대로 따를 것
   - `heroContain: true` + 실제 픽셀 `heroWidth`/`heroHeight` 지정 (인포그래픽이므로)
   - 본문: docx의 "홈페이지용" 문구 우선 사용, 인포그래픽 안의 수치·섹션 구조 반영
   - 수치는 반드시 "추정치·조건에 따라 변동" 단서를 함께 (대표 인포그래픽에 있는 주석 그대로)
   - FAQ 3개 작성 (비용 질문은 "일률적으로 말씀드리기 어렵습니다" 회피 대신 범위+변수 프레임)
   - 영문 이미지가 있으면 `en` 하위 객체 필수 (title/metaTitle/description/lead/sections/faq/ctaTitle/ctaBody/lineupLabel)
   - 제목에 가능하면 '딸기수직농장' 또는 '수직농장' 키워드 포함 (홈 중심 SEO 방침 내에서 롱테일로)
3. **배치 판단** — 제목/내용에 '모델'이 들어가는 사업모델 제안형이면:
   - `app/home-content.ts` news.models에 추가 (koContent, 영문 있으면 enContent도)
   - 사업모델 글은 최신 인사이트에서 자동 제외됨 (HomePage.tsx modelSlugs 필터)
   - 기술/설명형이면 아무것도 안 해도 최신 인사이트에 자동 노출
4. **빌드·검증**: `npm run build` 통과 확인 → preview로 국문/영문 페이지, 홈 노출, 영문 사이트에 한글 이미지 미노출 확인
   - 주의: build와 dev서버가 .next를 공유하면 충돌 → dev 서버 정지 후 `rm -rf .next` → build
5. **산출물**: 복사-붙여넣기용 커밋 메시지(Summary+Description) + 카톡 보고 문구

## 카톡 보고 템플릿
```
[홈페이지 업데이트 보고 — M/D]

N탄 '제목' 반영 완료했습니다.
· 홈페이지 (배치 위치: 사업모델제안/최신인사이트) 노출
· (영문 있으면) 영문 홈페이지 동시 반영 / (없으면) 국내용이라 한글만 반영
· 배포 후 라이브 확인 완료하겠습니다
```

## 주의사항 (대표 피드백 이력)
- SNS 업로드는 별개 지시 — "순서대로 업로드" 지시 전까지 홈페이지만
- 모델 소개는 SNS에 올리지 않음 (7/5 지시: "장사 속 보임, 기술내용만")
- 내부용 자료(영업가이드, 상세자료)는 절대 홈페이지에 올리지 않음
- 발행 즉시 date로 몰아넣지 말고 여러 편이면 publishAt으로 화·금 분산 예약 검토
