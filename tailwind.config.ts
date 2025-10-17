import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans]
      },
      borderRadius: {
        "2xl": "var(--radius)"
      },
      boxShadow: {
        card: "0px 10px 40px -24px rgba(15, 18, 24, 0.45)"
      }
    }
  },
  plugins: [typography]
};

export default config;
