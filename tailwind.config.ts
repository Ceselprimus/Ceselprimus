import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#081d1a",
        forest: "#0b4f3a",
        mint: "#1fbf78",
        ice: "#1f6ed4",
        energy: "#c92c2c",
        amber: "#ed7a16",
        paper: "#f6f8f5"
      },
      boxShadow: {
        soft: "0 20px 80px rgba(8, 29, 26, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
