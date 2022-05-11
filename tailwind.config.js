const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      backgroundImage: (theme) => ({
        editors: "url('../images/editors.png')",
        collage: "url('../images/collage.png')",
        wickedAd: "url('../images/wickedad.png')",
      }),


      colors: {
        //Midnight
        midnightBase: "#151726",
        midnightInterface: "#1C1E2D",
        midnightOverlay: "#232534",
        midnightSoft: "#6B6D7C",
        midnightSlight: "#8D8F9E",
        midnightText: "#DEE0EF",
        midnightFocusLow: "#1F212F",
        midnightFocusMedium: "#3E404F",
        midnightFocusHigh: "#4F5162",
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
        sunsetSoft: "#6B6D7C",
        sunsetSlight: "#8D8F9E",
        sunsetText: "#DEE0EF",
        sunsetFocusLow: "#292A3A",
        sunsetFocusMedium: "#414354",
        sunsetFocusHigh: "#535568",
        sunsetCoral: "#D1918F",
        sunsetSalmon: "#D6B4B4",
        sunsetFennel: "#709BBD",
        sunsetMint: "#AAC9D4",
        sunsetViolet: "#A392DC",
        sunsetSky: "#A0B6E8",
        //Morning
        morningBase: "#FDFDFE",
        morningInterface: "#F1F1F4",
        morningOverlay: "#D8DAE4",
        morningSoft: "#8388AD",
        morningSlight: "#5F6488",
        morningText: "#4E5377",
        morningFocusLow: "#C1C3D6",
        morningFocusMedium: "#AAB0D5",
        morningFocusHigh: "#949ABE",
        morningCoral: "#D26A5D",
        morningSalmon: "#F19A8E",
        morningViolet: "#886CDB",
        morningFennel: "#3788BE",
        morningSky: "#7397DE",
        morningMint: "#77AAB3",
      },
      fontFamily: {

        body: [
          '"IBM Plex Sans"',
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
