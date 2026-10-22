import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tricomm: {
          DEFAULT: "#EA4F1D",
          orange: "#EA4F1D",
          light: "#FF6B35",
          dark: "#D44212",
          gray: "#7D8082",
          darkgray: "#1E293B",
          surface: "#F8FAFC",
        },
        whatsapp: {
          DEFAULT: "#25D366",
          hover: "#20bd5a",
          dark: "#128C7E",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-heading)", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 10px -2px rgba(30, 41, 59, 0.05), 0 1px 3px 0 rgba(30, 41, 59, 0.03)",
        "card-hover": "0 12px 28px -4px rgba(234, 79, 29, 0.16), 0 4px 10px -2px rgba(30, 41, 59, 0.04)",
        glow: "0 0 25px -5px rgba(234, 79, 29, 0.3)",
      },
      animation: {
        "fade-in": "fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in-up": "fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "scale-in": "scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translate3d(0, 12px, 0)" },
          "100%": { opacity: "1", transform: "translate3d(0, 0, 0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.92) translate3d(0, -6px, 0)" },
          "100%": { opacity: "1", transform: "scale(1) translate3d(0, 0, 0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
