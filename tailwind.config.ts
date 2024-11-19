import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        custom1: ['"integral-cf"', 'sans-serif'], // Match 'CustomFont1' with @font-face name
        custom2: ['"CustomFont2"', 'sans-serif'], // Match 'CustomFont2' with @font-face name
      },
      screens:{
      'xs':'250px'
      }
    },
  },
  plugins: [],
} satisfies Config;
