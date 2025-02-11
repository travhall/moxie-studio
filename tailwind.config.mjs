/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  pattern:
    /bg-(ivory-rose|monstera|rose-gold|midnite)-(50|100|200|300|400|500|600|700|800|900)/,
  safelist: [
    "col-span-1",
    "col-span-2",
    "col-span-3",
    "col-span-4",
    "col-span-5",
    "col-span-6",
    "col-span-7",
    "col-span-8",
    "row-span-1",
    "row-span-2",
    "row-span-3",
    "row-span-4",
    "row-span-5",
    "row-span-6",
    "row-span-7",
    "row-span-8",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "text-gradient":
          "linear-gradient(to right, hsl(var(--text-gradient-start)), hsl(var(--text-gradient-end)))",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "ivory-rose": {
          DEFAULT: "hsl(var(--ivory-rose-500))",
          50: "hsl(var(--ivory-rose-50))",
          100: "hsl(var(--ivory-rose-100))",
          200: "hsl(var(--ivory-rose-200))",
          300: "hsl(var(--ivory-rose-300))",
          400: "hsl(var(--ivory-rose-400))",
          500: "hsl(var(--ivory-rose-500))",
          600: "hsl(var(--ivory-rose-600))",
          700: "hsl(var(--ivory-rose-700))",
          800: "hsl(var(--ivory-rose-800))",
          900: "hsl(var(--ivory-rose-900))",
        },
        monstera: {
          DEFAULT: "hsl(var(--monstera-500))",
          50: "hsl(var(--monstera-50))",
          100: "hsl(var(--monstera-100))",
          200: "hsl(var(--monstera-200))",
          300: "hsl(var(--monstera-300))",
          400: "hsl(var(--monstera-400))",
          500: "hsl(var(--monstera-500))",
          600: "hsl(var(--monstera-600))",
          700: "hsl(var(--monstera-700))",
          800: "hsl(var(--monstera-800))",
          900: "hsl(var(--monstera-900))",
        },
        "rose-gold": {
          DEFAULT: "hsl(var(--rose-gold-500))",
          50: "hsl(var(--rose-gold-50))",
          100: "hsl(var(--rose-gold-100))",
          200: "hsl(var(--rose-gold-200))",
          300: "hsl(var(--rose-gold-300))",
          400: "hsl(var(--rose-gold-400))",
          500: "hsl(var(--rose-gold-500))",
          600: "hsl(var(--rose-gold-600))",
          700: "hsl(var(--rose-gold-700))",
          800: "hsl(var(--rose-gold-800))",
          900: "hsl(var(--rose-gold-900))",
        },
        midnite: {
          DEFAULT: "hsl(var(--midnite-500))",
          50: "hsl(var(--midnite-50))",
          100: "hsl(var(--midnite-100))",
          200: "hsl(var(--midnite-200))",
          300: "hsl(var(--midnite-300))",
          400: "hsl(var(--midnite-400))",
          500: "hsl(var(--midnite-500))",
          600: "hsl(var(--midnite-600))",
          700: "hsl(var(--midnite-700))",
          800: "hsl(var(--midnite-800))",
          900: "hsl(var(--midnite-900))",
        },
      },
      fontFamily: {
        sans: ["Mulish", "sans-serif"],
        display: [
          "Nyght Serif",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "Times",
          "serif",
        ],
        "display-italic": [
          "Nyght Serif Italic",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "Times",
          "serif",
        ],
        "display-bold": [
          "Nyght Serif Dark",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "Times",
          "serif",
        ],
        "display-bold-italic": [
          "Nyght Serif Dark Italic",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "Times",
          "serif",
        ],
      },
    },
    fontSize: {
      xs: ["0.75rem", "1.125rem"],
      sm: ["0.825rem", "1.125rem"],
      base: ["0.9375rem", "1.3125rem"],
      lg: ["1.1875rem", "1.525rem"],
      xl: ["1.4375rem", "1.725rem"],
      "2xl": ["1.8125rem", "2.175rem"],
      "3xl": ["2.3125rem", "2.775rem"],
      "4xl": ["2.875rem", "3.45rem"],
      "5xl": ["3.5625rem", "4.275rem"],
      "6xl": ["4.375rem", "5.25rem"],
      "7xl": ["5.1875rem", "6.225rem"],
      "8xl": ["6.0rem", "7.2rem"],
    },
  },
  plugins: [],
};
