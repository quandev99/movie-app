/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["DM Sans", "Sans-serif"],
      },
      colors: {
        primary: "#ee3131",
        secondary: "#ced2e2",
      },
    },
  },
  plugins: [],
};
