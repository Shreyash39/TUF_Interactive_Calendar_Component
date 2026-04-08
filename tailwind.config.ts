import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'paper-light': '#fefefe',
      },
      boxShadow: {
        'paper': '0 10px 30px rgba(0, 0, 0, 0.2), 0 1px 8px rgba(0, 0, 0, 0.1)',
        'inner-paper': 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
        'day-hover': '0 4px 12px rgba(59, 130, 246, 0.3)',
        'spiral-hole': 'inset 0 2px 4px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        'paper-texture': "url(\"data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}

export default config