const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "400px",
        // => @media (min-width: 400px) { ... }
        ss: "440px",

        ...defaultTheme.screens,
      },
      fontFamily: {
        Roboto: "Roboto",
        Nunito: "Nunito",
      },
    },
  },

  plugins: [],
};
