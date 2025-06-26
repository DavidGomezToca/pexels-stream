import { AppContainer, GlobalStyle } from "./App.styles";
import { ThemeProvider } from "styled-components";
import { THEMES } from "./utils/theme";
import { useAppContext } from "./context/App.context";
import Header from "./components/header/Header";
import ToolTips from "./utils/ToolTips";
import Body from "./components/body/Body";
import { Route, Routes } from "react-router-dom";
import WatchVideoContents from "./components/watchVideoContents/WatchVideoContents";

function App() {
  const { theme } = useAppContext();

  return (
    <ThemeProvider theme={THEMES[theme]}>
      <GlobalStyle />
      <ToolTips />
      <AppContainer>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/:id" element={<WatchVideoContents />} />
        </Routes>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
