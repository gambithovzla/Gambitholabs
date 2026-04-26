import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink:      "#07090d",
        ink1:     "#0b0f15",
        ink2:     "#11161f",
        ink3:     "#19202b",
        ink4:     "#232b38",
        fg:       "#f3f6fb",
        fg2:      "#b6c0cf",
        fg3:      "#7d8898",
        fg4:      "#4d5664",
        brand:    "#3a7bff",
        brand2:   "#5a92ff",
        brandlo:  "#2a5ed6",
        signal:   "#4ade80",
        whatsapp: "#25d366",
        wahi:     "#2ee072",
        warn:     "#f5a524",
        error:    "#ff5c6c",
        hexa: {
          bg:      "#000000",
          panel:   "#0a0e14",
          cyan:    "#2bd4ff",
          green:   "#2bff7a",
          orange:  "#ff8a2b",
          pink:    "#ff3df0",
        },
      },
      fontFamily: {
        sans:     ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono:     ["var(--font-mono)", "ui-monospace", "monospace"],
        terminal: ["'Share Tech Mono'", "monospace"],
        hexa:     ["'VT323'", "monospace"],
      },
      borderRadius: {
        xs: "4px",
        sm: "6px",
        md: "10px",
        lg: "14px",
        xl: "20px",
      },
      maxWidth: {
        container: "1200px",
        narrow:    "880px",
      },
      boxShadow: {
        1: "0 1px 0 rgba(255,255,255,0.04) inset, 0 1px 2px rgba(0,0,0,0.4)",
        2: "0 8px 24px -8px rgba(0,0,0,0.6), 0 2px 4px rgba(0,0,0,0.3)",
        3: "0 24px 48px -16px rgba(0,0,0,0.7), 0 4px 12px rgba(0,0,0,0.4)",
        glow: "0 0 0 1px #3a7bff, 0 0 24px rgba(58,123,255,0.35)",
        wa:   "0 1px 0 rgba(255,255,255,0.06) inset, 0 8px 24px -8px rgba(37,211,102,0.5)",
      },
      keyframes: {
        pulse2: {
          "0%, 100%": { opacity: "1" },
          "50%":       { opacity: "0.4" },
        },
      },
      animation: {
        pulse2: "pulse2 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
