import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@/styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "@/store";
import I18n from "./i18n.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
        <I18n />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
