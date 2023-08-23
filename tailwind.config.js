/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        main: ["Hind", "sans-serif"],
        accent: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#457B9D",
        secondary: "#A8DADC",
        accent: "#E63946",
        light: "#F1FAEE",
        dark: "#1D3557",
      },
    },
  },
  plugins: [],
};
