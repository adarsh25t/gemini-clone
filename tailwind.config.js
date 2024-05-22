/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "Gray":"#1F1F1F",
        "Dark":"#252525"
      }
    },
  },
  plugins: [],
}

