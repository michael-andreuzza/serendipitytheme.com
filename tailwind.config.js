const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      zIndex: {
        0: 0,
        10: 10,
        20: 20,
        30: 30,
        40: 40,
        50: 50,
        25: 25,
        50: 50,
        75: 75,
        100: 100,
        auto: "auto",
      },
      backgroundImage: (theme) => ({
        squares: "url('../images/serendipityhero.png')",
        wickedAd: "url('../images/wickedad.png')",

      }),
      boxShadow: {
        DEFAULT: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
        thick: "0px 13px 40px rgb(0 0 0 / 30%), 0px 4px 4px rgb(0 0 0 / 20%)",
      },
      colors: {

        //Midnight
        midnightBase: "#171824",
        midnightSurface: "#202132",
        midnightOverlay: "#28293E",
        midnightInactive: "#383957",
        midnightSubtle: "#484970",
        midnightText: "#E0DEF2",

        midnightHightlight: "#2A2837",
        midnightHighInactive: "#211F2D",
        midnightHighlight: "#3A384A",

        midnightCoraline: "#F28779",
        midnightDusk: "#E6A097",
        midnightGeode: "#C084FC",
        midnightFennel: "#4fc1ec",
        midnightTruesky: "#78A9FF",
        midnightSpray: "#9EF0F0",
        //Sunset
        sunsetBase: "#202132",
        sunsetSurface: "#28293E",
        //Morning
        morningBase: "#FAF4ED",
        morningSurface: "#FFFAF3",
        morningOverlay: "#F2E9DE",
        morningInactive: "#9893A5",
        morningSubtle: "#6E6A86",
        morningText: "#575279",

        morningHightlight: "#EEE9E6",
        morningHighInactive: "#F2EDE9",
        morningHighlight: "#E4DFDE",

        morningCoraline: "#bf6458",
        morningDusk: "#f78677",
        morningGeode: "#8510F9",
        morningFennel: "#21a5bf",
        morningTruesky: "#478BFF",
        morningSpray: "#199c7f",

      },
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        tiny: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
      },
      fontFamily: {
        serif: ['"IBM Plex Serif"', "Lucida Bright"], // Ensure fonts with spaces have " " surrounding it.
        mono: ['"IBM Plex Mono"', "ui-monospace"], // Ensure fonts with spaces have " " surrounding it.
        sans: [
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
        ], // Ensure fonts with spaces have " " surrounding it.
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
