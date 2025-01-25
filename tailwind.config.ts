import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./globals.css",
  ],
  
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--main-bg)",
        foreground: "var(--text-color)",
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        accent: "var(--accent-color)",
        "alternative-primary": "var(--alternative-primary-color)",
        "alternative-secondary": "var(--alternative-secondary-color)",
        "alternative-accent": "var(--alternative-accent-color)",
      },
    },
  },
  plugins: [],
} satisfies Config;