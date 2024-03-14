import React from "react";
import { AppContainer, GlobalStyle } from "./App.styles";
import { ThemeProvider } from "styled-components";
import { THEMES } from "./utils/theme";
import { useAppContext } from "./context/App.context";
import Header from "./components/header/Header";

function App() {
  const { theme } = useAppContext();

  return (
    <ThemeProvider theme={THEMES[theme]}>
      <GlobalStyle />
      <AppContainer>
        <Header />
        YOU STREAM v0.13.0
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
