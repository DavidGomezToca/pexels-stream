import React from "react";
import { AppContainer, GlobalStyle } from "./App.styles";
import { ThemeProvider } from "styled-components";
import { THEMES } from "./utils/theme";
import { useAppContext } from "./context/App.context";
import Header from "./components/header/Header";
import ToolTips from "./utils/ToolTips";

function App() {
  const { theme } = useAppContext();

  return (
    <ThemeProvider theme={THEMES[theme]}>
      <GlobalStyle />
      <ToolTips />
      <AppContainer>
        <Header />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
