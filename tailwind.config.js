const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        onest: ["Onest", "sans-serif"],
      },

    },
    colors: {
      ...colors,
      primary: "#FF385C",
      secondary: "#F9DC5C",
      offwhite: "#FFFFFB",
      text: "#000000",
      themebg: "#b8b8d1",
      themebg2: "#5b5f97",
    },
    plugins: [],
  },
};
