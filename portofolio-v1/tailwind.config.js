/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Onest", "sans-serif"],
      },
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        tertiary: "var(--tertiary-color)",
      },
    },
    screens: {
      // => @media (min-width: 320px)
      phone: "320px",
      // => @media (min-width: 675px)
      tablet: "675px",
      // => @media (min-width: 1024px)
      laptop: "1024px",
    },
  },
  plugins: [],
};
