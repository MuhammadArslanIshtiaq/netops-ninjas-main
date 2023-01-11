/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0D081E",
        secondary: "#07ADDF",
        info: "#3B3541",
      },
      fontFamily: {
        sans: ["Manrope", ...defaultTheme.fontFamily.sans],
        DMSans: "DM Sans, sans-serif",
        suiGeneris: "Sui Generis Rg",
      },
      backgroundImage: {
        hero: "url('../public/assets/images/bg-hero.svg')",
      },
      boxShadow: {
        "blue-overlay": "0 -120px 120px 100px #14223d",
        "pink-overlay": "0 80px 80px 70px #b6246570",
        "blue-overlay-1": "0 -150px 120px 120px #3c466a",
        "pink-overlay-1": "0 140px 120px 120px #b6246570",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp"), require("@tailwindcss/forms")],
};
