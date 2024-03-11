/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      dropShadow: {
        emoji: "0 0 75px rgb(255, 0, 0, 0.75)",
        custom: "0 0 50px rgb(200, 15, 15, 0.10)",
      },
    },
  },
  plugins: [],
};
