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
        "main-bg": "var(--main-bg)",
        "header-bg": "var(--header-bg)",
        "footer-bg": "var(--footer-bg)",
        primary: "var(--primary-text)",
        secondary: "var(--secondary-text)",
        accent: "var(--accent-text)",
        "console-bg": "var(--console-bg)",
        "console-attribute": "var(--console-attribute-text)",
        "console-value": "var(--console-value-text)",
      },
    },
  },
  plugins: [],
} satisfies Config;