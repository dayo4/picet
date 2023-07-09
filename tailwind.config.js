/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
  ],
  theme: {
    extend: {
      screens: {
        sm: "600px",
        md: "960px",
        lg: "1264px",
        xl: "1904px",
      },
      colors: {
        "my-pri-color": 'rgb(231, 202, 125)',
        "my-pri-color-trans": 'rgba(231, 202, 125, 0.9)',
        "my-pri-color-trans-1": 'rgba(231, 202, 125, 0.75)',
        "my-pri-color-trans-2": 'rgba(231, 202, 125, 0.5)',
        "my-pri-color-trans-3": 'rgba(231, 202, 125, 0.25)',

        // Secondary Color
        "my-sec-color": 'rgb(39, 64, 96)',
        "my-sec-color-trans": 'rgba(39, 64, 96, 0.9)',
        "my-sec-color-trans-1": 'rgba(39, 64, 96, 0.75)',
        "my-sec-color-trans-2": 'rgba(39, 64, 96, 0.5)',
        "my-sec-color-trans-3": 'rgba(39, 64, 96, 0.25)',
      },
    },
  },
  plugins: [],
};
