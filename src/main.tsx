import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme.Styled.ts";
import { GlobalStyle } from "./styles/Global.styled.ts";
import { DateContextProvider } from "./Context/useDate.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <DateContextProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </DateContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
