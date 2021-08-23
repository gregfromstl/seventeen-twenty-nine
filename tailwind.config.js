const { guessProductionMode } = require("@ngneat/tailwind");

module.exports = {
  prefix: "",
  purge: {
    enabled: guessProductionMode(),
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "ghost-white": "#f7f7ff",
        green: {
          DEFAULT: "5efc8d",
        },
        blue: {
          light: "#27d6f1",
          DEFAULT: "#279Af1",
        },
        "coral-black": "#60656f",
        "orange-soda": {
          DEFAULT: "#f06449",
          dark: "#de5c43",
        },
      },
      fontFamily: {
        karla: ["Karla"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
