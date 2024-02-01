import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./utils/styles.scss";

import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "@mui/material";
import { theme } from "./utils/themeProvider.ts";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
