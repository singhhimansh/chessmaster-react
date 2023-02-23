/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'chesslers': "url('https://chesslers.com/icons/piecesgrp.svg')",
      },
      colors: {
        golden: {
          300: "#ffb400",
        },
    },
    },
  },
  plugins: [],
}
