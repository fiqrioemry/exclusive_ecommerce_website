/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    fontFamily: {
      DEFAULT: "Poppins",
      primary: "Poppins",
      secondary: "Manrope",
      tertiary: "Montserrat",
    },
    screens: {
      sm: "450px",
      md: "678px",
      lg: "860px",
      xl: "1180px",
    },
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#000000",
        tertiary: "#DB4444",
      },
    },
  },
  plugins: [],
};
