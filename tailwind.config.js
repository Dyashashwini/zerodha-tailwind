/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "curious-blue": "#387ED1",
        "dove-gray": "#666666",
      },
      zIndex: {
        0: "0",
        10: "10",
        20: "20",
        50: "50",
        100: "100",
      },
    },
    borderWidth: {
      default: "1px",
      0: "0px",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
    },
  },
  plugins: [],
};
