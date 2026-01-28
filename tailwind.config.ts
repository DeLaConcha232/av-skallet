import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          hover: "hsl(var(--primary-hover))",
          light: "hsl(var(--primary-light))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          hover: "hsl(var(--secondary-hover))",
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
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Custom brand colors from palette
        carbon: {
          50: "hsl(var(--carbon-50))",
          100: "hsl(var(--carbon-100))",
          200: "hsl(var(--carbon-200))",
          300: "hsl(var(--carbon-300))",
          400: "hsl(var(--carbon-400))",
          500: "hsl(var(--carbon-500))",
          600: "hsl(var(--carbon-600))",
          700: "hsl(var(--carbon-700))",
          800: "hsl(var(--carbon-800))",
          900: "hsl(var(--carbon-900))",
          950: "hsl(var(--carbon-950))",
        },
        lavender: {
          50: "hsl(var(--lavender-50))",
          100: "hsl(var(--lavender-100))",
          200: "hsl(var(--lavender-200))",
          300: "hsl(var(--lavender-300))",
          400: "hsl(var(--lavender-400))",
          500: "hsl(var(--lavender-500))",
          600: "hsl(var(--lavender-600))",
          700: "hsl(var(--lavender-700))",
          800: "hsl(var(--lavender-800))",
          900: "hsl(var(--lavender-900))",
          950: "hsl(var(--lavender-950))",
        },
        emerald: {
          50: "hsl(var(--emerald-50))",
          100: "hsl(var(--emerald-100))",
          200: "hsl(var(--emerald-200))",
          300: "hsl(var(--emerald-300))",
          400: "hsl(var(--emerald-400))",
          500: "hsl(var(--emerald-500))",
          600: "hsl(var(--emerald-600))",
          700: "hsl(var(--emerald-700))",
          800: "hsl(var(--emerald-800))",
          900: "hsl(var(--emerald-900))",
          950: "hsl(var(--emerald-950))",
        },
        amethyst: {
          50: "hsl(var(--amethyst-50))",
          100: "hsl(var(--amethyst-100))",
          200: "hsl(var(--amethyst-200))",
          300: "hsl(var(--amethyst-300))",
          400: "hsl(var(--amethyst-400))",
          500: "hsl(var(--amethyst-500))",
          600: "hsl(var(--amethyst-600))",
          700: "hsl(var(--amethyst-700))",
          800: "hsl(var(--amethyst-800))",
          900: "hsl(var(--amethyst-900))",
          950: "hsl(var(--amethyst-950))",
        },
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius)",
        sm: "var(--radius-sm)",
      },
      fontFamily: {
        'heading': 'var(--font-heading)',
        'body': 'var(--font-body)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'var(--gradient-hero)',
        'card-gradient': 'var(--gradient-card)',
        'mesh-gradient': 'var(--gradient-mesh)',
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
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-slower": "float 10s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px hsl(var(--primary) / 0.3)',
        'glow-md': '0 0 25px -5px hsl(var(--primary) / 0.4)',
        'glow-lg': '0 0 40px -8px hsl(var(--primary) / 0.5)',
        'glow-emerald': '0 0 30px -5px hsl(var(--emerald-500) / 0.4)',
        'glow-amethyst': '0 0 30px -5px hsl(var(--amethyst-500) / 0.4)',
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
