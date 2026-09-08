const palette = {
  black: "#000000",
  nearBlack: "#151515",
  charcoal: "#1F1F1F",
  bronze: "#695E48",
  sand: "#C7BD8D",
  gold: "#D29E62",
  offWhite: "#F5F5F5",
  cream: "#FFE9BF",
} as const;

export const theme = {
  colors: {
    palette,

    lightmode: {
      background: palette.offWhite,
      text: palette.charcoal,
    },

    darkmode: {
      background: palette.nearBlack,
      text: palette.sand,
    },
  },

  fonts: {
    primary: "Linden Hill",
    secondary: "Limelight",
  },
  fontSizes: {
    xs: "0.8rem",
    s: "1rem",
    m: "1.25rem",
    l: "1.5rem",
    xl: "1.8rem",
  },
  lineHeigth: {
    xs: "1.25rem",
    s: "1.5rem",
    m: "1.8rem",
    l: "2rem",
    xl: "2.5rem",
  },
} as const;
export type Theme = typeof theme;
