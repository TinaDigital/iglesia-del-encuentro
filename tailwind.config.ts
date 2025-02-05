import type { Config } from "tailwindcss"
import { nextui } from "@nextui-org/react"

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    screens: {
      "2xl": "1400px",
      "xl": "1280px",
      "lg": "1024px",
      "md": "768px",
      "sm": "640px",
      "xsm": "425px",
      "xxsm": "360px",
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#FF6B6B", // Coral rojo para el tema de la iglesia
          foreground: "#FFFFFF",
          50: "#fff1f1",
          100: "#ffe1e1", 
          200: "#ffc7c7",
          300: "#ffa0a0",
          400: "#ff6b6b",
          500: "#ff3d3d",
          600: "#ff1111",
          700: "#e60000",
          800: "#b30000",
          900: "#910000",
          950: "#4c0000",
        },
        secondary: {
          DEFAULT: "#4ECDC4", // Turquesa para acentos
          foreground: "#FFFFFF",
          50: "#f2fbfa",
          100: "#d6f3f1",
          200: "#aee7e4",
          300: "#7dd7d2",
          400: "#4ecdc4",
          500: "#34b0a7",
          600: "#2a8d86",
          700: "#25716c",
          800: "#225b57",
          900: "#204c49",
          950: "#0f2928",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        gradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        gradient: "gradient 8s linear infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    nextui({
      themes: {
        light: {
          colors: {
            primary: "#FF6B6B",
            secondary: "#4ECDC4",
          },
        },
        dark: {
          colors: {
            primary: "#FF6B6B",
            secondary: "#4ECDC4",
          },
        },
      },
    }),
  ],
}

export default config
