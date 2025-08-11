/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#FEEDBC",
        primaryColor: "#F9B800",
      },
      fontFamily: {
        segoueUIThin: ["segoe-ui", "sans-serif"],
        segoueUIRegular: ["segoe-ui-semi", "sans-serif"],
        segoueUIBold: ["segoe-ui-bold", "sans-serif"],
        segoueUIExtraBold: ["segoe-ui-extra", "sans-serif"],
      },
    },
  },
  plugins: [],
};
