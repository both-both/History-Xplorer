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
  color: {
    palette,

    light: {
      background: palette.offWhite,
      text: palette.charcoal,
    },

    dark: {
      background: palette.nearBlack,
      text: palette.sand,
    },
  },

  font: {
    primary: "Linden Hill",
    secondary: "Limelight",
  },
  fontSize: {
    xs: "1.25rem", //20px
    s: "1.5rem", //24px
    m: "2rem", //32px
    l: "2.25rem", //36px
    xl: "6rem", //6px
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
