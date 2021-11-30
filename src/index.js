import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

import "./index.css";
import AuthSession from "./features/AuthSession";
import Layout from "./features/Layout";
import HomePage from "./features/HomePage";
import LoginPage from "./features/LoginPage";
import TeamPage from "./features/TeamPage";
import TeamsListPage from "./features/TeamsListPage";
import ScorePage from "./features/ScorePage";
import PrintPage from "./features/PrintPage";

import store from "./state/store";

import makeServer from "./mirage";

makeServer({ environment: "development" });

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <CookiesProvider>
          <AuthSession>
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/teams" element={<TeamsListPage />} />
                <Route path="/teams/:teamId" element={<TeamPage />} />
                <Route path="/score" element={<ScorePage />} />
                <Route path="/print" element={<PrintPage />} />
                {/* <Route path="*" element={<HomePage />} /> */}
              </Routes>
            </Layout>
          </AuthSession>
        </CookiesProvider>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
