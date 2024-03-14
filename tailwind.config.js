/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{svelte,html,js,ts,jsx,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require("daisyui")],
    daisyui: {
      themes: [
        {
            rompee: {
              primary: "#4948e7", //navbar
              "primary-focus": "#FF00FF",
              "primary-content": "#EDEDEE", //badge text for primary
              secondary: "#ad55ce", //some badges?
              "secondary-focus": "#FF00FF",
              "secondary-content": "#EDEDEE", //badge text for secondary
              accent: "#2b3a57", //buttons for websites
              "accent-focus": "#FF00FF",
              "accent-content": "#DDDDDE", //text inside buttons
              neutral: "#3131d3", //sidebar selecting
              "neutral-focus": "#FF00FF",
              "neutral-content": "#EDEDEE", //siderbar text color when selecting
              "base-100": "#1d232a", //background
              "base-200": "#191e24", //siderbar
              "base-300": "#242484", //theme select color
              "base-content": "#a6adbb", //siderbar text + icons on navbar
              info: "#55ce6d",
              success: "#55ceb4",
              warning: "#b19ce2",
              error: "#f7665f",
            },
          },
          "default",
          "valentine",
          "black",
          "dracula",
          "pastel",
          "forest",
      ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
      darkTheme: "dark", // name of one of the included themes for dark mode
      base: true, // applies background color and foreground color for root element by default
      styled: true, // include daisyUI colors and design decisions for all components
      utils: true, // adds responsive and modifier utility classes
      prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
      logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
      themeRoot: ":root", // The element that receives theme color CSS variables
    },
}

