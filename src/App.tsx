import React from "react";
import { AppContainer, GlobalStyle } from "./App.styles";
import { ThemeProvider } from "styled-components";
import { THEMES } from "./utils/theme";

function App() {
  const currentTheme = "dark";

  return (
    <ThemeProvider theme={THEMES[currentTheme]}>
      <GlobalStyle />
      <AppContainer>YOU STREAM v0.11.0</AppContainer>
    </ThemeProvider>
  );
}

export default App;
