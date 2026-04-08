import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'paper-light': '#fafaf8',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        'paper': '0 2px 4px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.5)',
        'deep': '0 4px 8px rgba(0,0,0,0.15)',
        'inner-soft': 'inset 0 2px 4px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
} satisfies Config;