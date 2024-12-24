/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        shad: "0 2px 2px 2px #ccc",
        inputShad: "0   2px 2px 2px #0062ff",
      },

      screens: {
        minScreen: { max: "600px" },
      },
    },
  },
  plugins: [],
};
