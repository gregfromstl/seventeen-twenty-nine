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
        "spring-green": "5efc8d",
        blue: "#279Af1",
        "coral-black": "#60656f",
        "orange-soda": "#f06449",
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
