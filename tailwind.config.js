const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      backgroundImage: (theme) => ({
        squares: "url('../images/serendipityhero.png')",
        wickedAd: "url('../images/wickedad.png')",
      }),
      boxShadow: {
        button: "-2px 5px 0px 0px rgb(0 0 0 / 20%)",
        ripple: "-8px -8px 24px 0 rgba(255, 255, 255, .8), 8px 8px 12px 0 rgba(0, 0, 0, .06), -2px -2px 4px 0 rgba(255, 255, 255, 1), 2px 2px 4px 0 rgba(0, 0, 0, .06), 2px 2px 8px 0 rgba(0, 0, 0, .01) inset, -2px -2px 8px 0 rgba(255, 255, 255, .6) inset",

      },

      colors: {
        //Midnight
        midnightBase: "#151726",
        midnightInterface: "#1C1E2D",
        midnightOverlay: "#232534",
        midnightMuted: "#6B6D7C",
        midnightSubtle: "#8D8F9E",
        midnightText: "#DEE0EF",
        midnightHightlightLow: "#1F212F",
        midnightHighlightMedium: "#3E404F",
        midnightHighlightHigh: "#4F5162",
        midnightCoral: "#EE8679",
        midnightSalmon: "#F8D2C9",
        midnightFennel: "#5BA2D0",
        midnightMint: "#9CCFD8",
        midnightViolet: "#A78BFA",
        midnightSky: "#94B8FF",
        //Sunset
        sunsetBase: "#202231",
        sunsetInterface: "#272938",
        sunsetOverlay: "#363847",
        sunsetMuted: "#6B6D7C",
        sunsetSubtle: "#8D8F9E",
        sunsetText: "#DEE0EF",
        sunsetHightlightLow: "#292A3A",
        sunsetHighlightMedium: "#414354",
        sunsetHighlightHigh: "#535568",
        sunsetCoral: "#D1918F",
        sunsetSalmon: "#EDD5D6",
        sunsetFennel: "#709BBD",
        sunsetMint: "#AAC9D4",
        sunsetViolet: "#A392DC",
        sunsetSky: "#A0B6E8",
        //Morning
        morningBase: "#FAF4ED",
        morningInterface: "#FFFAF3",
        morningOverlay: "#F2E9DE",
        morningMuted: "#9893A5",
        morningSubtle: "#797593",
        morningText: "#575279",
        morningHightLow: "#F4EDE8",
        morningHighMedium: "#DFDAD9",
        morningHighlightHigh: "#CECACD",
        morningCoral: "#D26A5D",
        morningSalmon: "#C8A299",
        morningViolet: "#886CDB",
        morningFennel: "#3788BE",
        morningSky: "#7397DE",
        morningMint: "#77AAB3",
      },
      fontFamily: {
        display: ['"Fugaz One"', 'cursive'],

        sans: [
          '"Inter"',
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
