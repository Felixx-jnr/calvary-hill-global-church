import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: "#6D2324",
        orange: "#D1AA42",
        darkmaroon: "#240C00",
        lightGrey: "#7C6D66",
        darkGrey: "#CAC2C0",
        midGrey: "#988F8A",
        smokeWhite: "#F8F2F1",
        darkBrown: "#1C110B",
      },
      fontFamily: {
        "sofia-regular": ["Sofia Pro Regular", "sans-serif"],
        "sofia-medium": ["Sofia Pro Medium", "sans-serif"],
        "sofia-semibold": ["Sofia Pro SemiBold", "sans-serif"],
        "sofia-bold": ["Sofia Pro Bold", "sans-serif"],
        europa: ["Europa Title", "sans-serif"],
        "kumbh-sans": ["Kumbh Sans", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      screens: {
        mid: "1190px",
        xs: "450px",
      },
    },
  },
  plugins: [],
};
export default config;
