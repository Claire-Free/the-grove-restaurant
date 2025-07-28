// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
//   colors: {
//   forest: "#1F3D2B",
//   beige: "#EAE3D2",
//   terracotta: "#D8705B",
//   white: "#FFFFFF",
// }
// }

// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#1F3D2B",
        beige: "#EAE3D2",
        terracotta: "#D8705B",
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
