/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"]
  },
  async redirects() {
    return [
      {
        // 라인업 04를 알파엔지니어링으로 전환하며 알파서포트 랜딩 정리(2026-07-13).
        // 기존 검색 유입·링크는 홈 문의 섹션(사업협력·해외 프로젝트)으로 영구 이전.
        source: "/alphasupport",
        destination: "/#contact",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
