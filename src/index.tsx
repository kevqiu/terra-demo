import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

import "./index.css";
import Layout from "./features/Layout";
import HomePage from "./features/HomePage";

import store from "./state/store";

// import makeServer from "./mirage";
// makeServer({ environment: "development" });

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <CookiesProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Layout>
        </CookiesProvider>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
