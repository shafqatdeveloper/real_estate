/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        // => @media (min-width: 640px) { ... }
        md: "800px",
        // => @media (min-width: 768px) { ... }
        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      backgroundImage: {
        "hb-contractor": "url('./components/assets/bg.jpeg')",
        "building": "url('./components/assets/building.png')",

      },
      fontFamily :{
        signature : ["Great Vibes"]
      }
    },
  },
  plugins: [],
};
