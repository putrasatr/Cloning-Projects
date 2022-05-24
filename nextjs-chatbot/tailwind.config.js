const { theme } = require("tailwindcss/defaultConfig");
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    ...theme,
    backgroundPosition: (theme) => theme("positions"),
    extend: {},
    screens: {
      sm: "480px",
    },
    text: {
      sm: "14px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
