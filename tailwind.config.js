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
        tiara: "#cfdadc",
        smoke: "#f0f0f0",
        santa: "#a0a1b2",
        comet: "#5b617a",
        bay: "#50566c",
        river: "#464a5d",
        bright: "#3c3e4e",
        tuna: "#313340",
        haiti: "#2c2c35",
        cinder: "#252731",
        pearl: "#1e2028",
        mirage: "#1a1c23",
        ship: "#808080",
        shark: "#26282b",
        whale: "#1f2123",
        // Dark Theme
        picton: "#49d1ff",
        unBlue: "#77a9ff",
        wedgeWood: "#5282aa",
        electricBlue: "#81f1ef",
        lavender: "#c693ff",
        bombon: "#ff5c98",
        salmon: "#ff8074",
        harp: "#f6f6f6",
        express: "#21272f",
        pearl: "#191f28",
        mirage: "#1e2431",

        //Light Theme
        //Bombon is used here too
        carolina: "#96bede",
        dodgerBlue: "#298eff",
        tiffany: "#00bba6",
        softPurple: "#b37fff",
        //bonbom: "#ff5c98",
        fadedRed: "#ff777b",
        antiFlash: "#f3f4f5",
        alabaster: "#fafafa",
        athensGray: "#eef0f1",
        spoonPearl: "#9fa6ad",
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
