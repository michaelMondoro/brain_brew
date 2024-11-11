/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.svelte"],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {dark: {
        ...require("daisyui/src/theming/themes")["dark"],
        secondary: "beige",
      }},
      {light: {
        ...require("daisyui/src/theming/themes")["light"],
        secondary: "lightblue",
      }}],
  }
}

