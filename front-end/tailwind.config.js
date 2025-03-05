/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: "300px",
      md: "768px",
      lg: "1024px",
      xl: "1400px",
      "2xl": "1536px",
    },
  },
  plugins: [],
}

