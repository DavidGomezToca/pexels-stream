import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppContextProvider } from "./context/App.context";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);