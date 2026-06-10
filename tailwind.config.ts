import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B1F1A",
        forest: "#0D5C45",
        mint: "#2AD489",
        ice: "#2374D9",
        energy: "#C9402C",
        amber: "#E8821E",
        paper: "#FAFAF6"
      },
      boxShadow: {
        soft: "0 32px 80px -32px rgba(11, 31, 26, 0.28)",
        card: "0 1px 2px rgba(11, 31, 26, 0.05), 0 20px 48px -28px rgba(11, 31, 26, 0.18)"
      },
      letterSpacing: {
        tightest: "-0.035em"
      }
    }
  },
  plugins: []
};

export default config;
