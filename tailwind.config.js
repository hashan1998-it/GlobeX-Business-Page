/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#23A6F0",
        secondary1: "#40BB15",
        secondary2: "#3C403D",
        darkBg: "#252B42",
        textColor: "#252B42"
      },
    },
  },
  plugins: [],
}

