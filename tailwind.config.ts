import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
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
        primaryLight: '#e5e7eb',
        secondaryLight: '#ffffff',
        borderLight: '#d7e0dc',
        primaryDark: '#121212',
        secondaryDark: '#1E1E1E',
        borderDark: '#292929'
      },
    },
  },
  plugins: [],
} satisfies Config;
