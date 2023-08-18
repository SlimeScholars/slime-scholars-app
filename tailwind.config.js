/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
  ],
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
