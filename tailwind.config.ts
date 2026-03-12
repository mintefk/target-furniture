import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px"
      }
    },
    extend: {
      colors: {
        background: "#f7f3ee",
        foreground: "#111111",
        muted: {
          DEFAULT: "#e2d8cd",
          foreground: "#6f665d"
        },
        accent: {
          DEFAULT: "#c8a27b",
          foreground: "#111111"
        },
        border: "#e5ddd2",
        card: {
          DEFAULT: "#ffffff",
          foreground: "#111111"
        }
      },
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "sans-serif"],
        display: ["system-ui", "ui-sans-serif", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 23, 42, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;

