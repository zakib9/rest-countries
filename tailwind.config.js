/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "darkModeElements": "#2B3743",
        "darkModeBackground": "#212E37",
        "lightModeText": "#212224",
        "lightModeBackground": "#FAFAFA",
        "darkModeText": "#FFFFFF",
        "lightModeInput": "#919191",
        
        
      },
      fontFamily: {
        Nunito: ["Nunito", "sans-serif"],

      },
    },
  },
  plugins: [],
}

