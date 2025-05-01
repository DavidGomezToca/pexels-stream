interface ITHEME {
  text: string;
  background: string;
  settingsShadow: string;
  divider: string;
  backdrop: string;
  authBlue: string;
  youtubeRed: string;
  white: string;
  black: string;
  grey1: string;
  grey2: string;
  grey3: string;
}

export const darkTheme: ITHEME = {
  text: "#FFF",
  background: "#0F0F0F",
  settingsShadow: "#0E0E0E",
  divider: "#272727",
  backdrop: "#000",
  authBlue: "#3DA6FF",
  youtubeRed: "#FF0000",
  white: "#FFF",
  black: "#000",
  grey1: "#272727",
  grey2: "#373739",
  grey3: "#A9A9A9",
};

export const lightTheme: ITHEME = {
  text: "#000",
  background: "#FFF",
  settingsShadow: "#E1E1E1",
  divider: "#CCC",
  backdrop: "#000",
  authBlue: "#3DA6FF",
  youtubeRed: "#FF0000",
  white: "#FFF",
  black: "#000",
  grey1: "#272727",
  grey2: "#F2F2F2",
  grey3: "#606060",
};

export const THEMES = {
  dark: darkTheme,
  light: lightTheme,
};

declare module "styled-components" {
  export interface DefaultTheme extends ITHEME {}
}
