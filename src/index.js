import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "components/App";
import { GlobalStyles } from "styles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <BrowserRouter basename="/TodoList">
      <App />
      <GlobalStyles />
    </BrowserRouter>
  </ThemeProvider>
);
