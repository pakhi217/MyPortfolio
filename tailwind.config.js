/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ivory: "#FDFAF4",
        "warm-white": "#FAF8F5",
        sage: {
          50: "#f4f7f4",
          100: "#e3ebe3",
          200: "#c5d6c5",
          300: "#9ab99a",
          400: "#6e976e",
          500: "#4d7a4d",
          600: "#3a5e3a",
          700: "#2e4b2e",
          800: "#263d26",
          900: "#1e301e",
        },
        rose: {
          dusty: "#C9A0A0",
          light: "#E8C5C5",
          pale: "#F5E6E6",
        },
        taupe: {
          100: "#F0EBE3",
          200: "#D9D0C4",
          300: "#BFB3A4",
          400: "#A39585",
          500: "#8A7B6E",
          600: "#6E6358",
        },
        gold: {
          light: "#E8D5A0",
          DEFAULT: "#C9A84C",
          deep: "#A07830",
        },
        charcoal: {
          DEFAULT: "#2C2C2C",
          light: "#444444",
          dark: "#1A1A1A",
        },
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease forwards",
        "slide-up": "slideUp 0.8s ease forwards",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
        cursor: "cursorGlow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideUp: {
          from: { opacity: 0, transform: "translateY(30px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
