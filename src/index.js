import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import AuthSession from "./features/AuthSession";
import Layout from "./features/Layout";
import HomePage from "./features/HomePage";
import LoginPage from "./features/LoginPage";
import TeamPage from "./features/TeamPage";
import TeamsListPage from "./features/TeamsListPage";
import TeamJudgingPage from "./features/TeamJudgingPage";

import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <AuthSession>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/teams" element={<TeamsListPage />} />
              <Route path="/team/:teamId" element={<TeamPage />} />
              <Route path="/teamjudging" element={<TeamJudgingPage />} />
            </Routes>
          </Layout>
        </AuthSession>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
