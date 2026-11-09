import type { Config } from "tailwindcss";

const accent = {
  50: "rgb(var(--accent-50) / <alpha-value>)",
  100: "rgb(var(--accent-100) / <alpha-value>)",
  200: "rgb(var(--accent-200) / <alpha-value>)",
  300: "rgb(var(--accent-300) / <alpha-value>)",
  400: "rgb(var(--accent-400) / <alpha-value>)",
  500: "rgb(var(--accent-500) / <alpha-value>)",
  600: "rgb(var(--accent-600) / <alpha-value>)",
  700: "rgb(var(--accent-700) / <alpha-value>)",
  800: "rgb(var(--accent-800) / <alpha-value>)",
  900: "rgb(var(--accent-900) / <alpha-value>)",
  950: "rgb(var(--accent-950) / <alpha-value>)",
};

const neutral = {
  50: "rgb(var(--neutral-50) / <alpha-value>)",
  100: "rgb(var(--neutral-100) / <alpha-value>)",
  200: "rgb(var(--neutral-200) / <alpha-value>)",
  300: "rgb(var(--neutral-300) / <alpha-value>)",
  400: "rgb(var(--neutral-400) / <alpha-value>)",
  500: "rgb(var(--neutral-500) / <alpha-value>)",
  600: "rgb(var(--neutral-600) / <alpha-value>)",
  700: "rgb(var(--neutral-700) / <alpha-value>)",
  800: "rgb(var(--neutral-800) / <alpha-value>)",
  900: "rgb(var(--neutral-900) / <alpha-value>)",
  950: "rgb(var(--neutral-950) / <alpha-value>)",
};

const config: Config = {
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
        slate: neutral,
        blue: accent,
        indigo: accent,
        emerald: accent,
        pink: accent,
        purple: accent,
        cyan: accent,
        amber: accent,
        red: accent,
        orange: accent,
        yellow: accent,
        lime: accent,
        green: accent,
        teal: accent,
        sky: accent,
        violet: accent,
        fuchsia: accent,
        rose: accent,
        brand: {
          ...accent,
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      animation: {
        "float-slow": "float 5s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
