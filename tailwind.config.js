/** @type {import('tailwindcss').Config} */
const MT = require("@material-tailwind/react/utils/withMT");
module.exports = MT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});
