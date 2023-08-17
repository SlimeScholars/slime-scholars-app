/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hotpink: "#F649DA",
        white: "#FFFEFA",
        grey: "#A4A1A1",
      },
    },
  },
  plugins: [],
};
