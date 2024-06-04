/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'aqua': '##114086',
      },
      height: {
        '96': '24rem',  // Example custom height
        'cust': '25rem',
        'cust1': '26rem',
        'cust2': '27rem',
        'cust3': '28rem',
        'cust4': '29rem',
        'cust5': '30rem',
        'cust6': '39rem',
        '128': '32rem', // Another custom height
      },
      width: {
        '96': '24rem',  // Example custom height
        'cust': '25rem',
        'cust1': '26rem',
        'cust2': '27rem',
        'cust3': '28rem',
        'cust4': '29rem',
        'cust5': '30rem',
        'cust6': '39rem',
        '128': '32rem', // Another custom height
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
}

