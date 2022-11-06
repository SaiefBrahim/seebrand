/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#FBB03B",

          secondary: "#00ADB5",

          accent: "#9f1239",

          neutral: "#303841",

          "base-100": "#EEEEEE",

          info: "#4DC8F5",

          success: "#1B7941",

          warning: "#E1AF09",

          error: "#EE6877",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
