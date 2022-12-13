/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#06B6D4",
        secondary: "#64748B",
        dark: "#0F172A",
        darkish: "rgb(18, 28, 53)"
      },
      screens: {
        "2xl": "1320px",
        "sm": "360px"
      },
    },
  },
  plugins: [],
};
