import { text } from "stream/consumers";
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
      primary: "#ED264E",
      secondary: "#F9DC5C",
      offwhite: "#F4FFFD",
      text: "#011936",
      themebg: "#465362",
    },
    plugins: [],
  },
};
