/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx", "./src/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
      "black-background": "#121214",
      "light-background": "#fafafa",
      "light-400": "#e4e5f1",
      "light-500": "#d2d3db",
      "light-600": "#9394a5",
      "light-800": "#484b6a",
      "primary": "#F6F6F6",
      "purple-500": "#8b5cf6",
      "purple-800": "#6D28D9",
      "purple-900": "#581C87",
      "violet": "#31004a",
      "transparent": "transparent",
      "linkedin": "#0082C6",
      "green-900": "#00875F",
      "gray-600": "#202024",
      "white": "#ffffff",
      "black": "#000000",
      "red-900": "#AA0000",
    },
    fontFamily: {
      Kalam: "Kalam",
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};