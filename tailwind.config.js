/** @type {import('tailwindcss').Config} */
const MT = require("@material-tailwind/react/utils/withMT");
module.exports = MT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  extend: {
    fontFamily: {
      "peyda-th": ["Peyda-th", "sans-serif"],
      "peyda-rg": ["Peyda-rg", "sans-serif"],
      "peyda-md": ["Peyda-md", "sans-serif"],
      "peyda-md": ["Peyda-smb", "sans-serif"],
    },
  },

  plugins: [],
});
