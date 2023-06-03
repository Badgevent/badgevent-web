/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      colors: {
        "saturated-red": "#dd3311",
        "unsaturated-red": "#bb5555",
        "saturated-brown": "#aa6600",
        "unsaturated-brown": "#aa6633",
        "saturated-green": "#118822",
        "unsaturated-green": "#777755",
        "saturated-blue": "#2277cc",
        "unsaturated-blue": "#667788",
        "saturated-purple": "#bb44aa",
        "unsaturated-purple": "#996688",
      },
    },
    data: {
      selected: 'ui~="selected"',
    },
  },
  plugins: [],
};
