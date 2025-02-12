/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        firstColor: "#222d4f",
        secondColor: "#4ac4cf",
        thirdColor: "#fff7e0",
        forthColor: "#bac4c8",
        fifthColor: "#737e82"
      },
      screens:{
        sm:{max:"640px"},
        md:"800px"
      }
    },
  },
  plugins: [],
}