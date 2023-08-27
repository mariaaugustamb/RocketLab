/** @type {import('tailwindcss').Config} */

let withMT = require("@material-tailwind/react/utils/withMT");
 
 withMT = ({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});

export default withMT

