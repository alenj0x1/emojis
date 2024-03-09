/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      dropShadow: {
        emoji: "0 0 75px rgb(255, 0, 0, 0.75)",
      },
    },
  },
  plugins: [],
};
