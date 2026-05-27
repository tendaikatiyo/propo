/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        easishop: {
          green: "#188754",
        },
      },
      fontFamily: {
        bricolage: ["Bricolage Grotesque", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundColor: {
        default: "#f9f9f9",
      },
    },
  },
  plugins: [],
}
