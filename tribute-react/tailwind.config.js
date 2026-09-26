/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#fbf9f1",   // Define custom color
        emerald: "#064e3b", // Define custom color
        gold: "#d4af37",    // Define custom color
        dark: "#1a1a1a",
      },
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};