import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import HomePage from "./features/HomePage";
import TeamsListPage from "./features/TeamsListPage";
import TeamJudgingPage from "./features/TeamJudgingPage";

import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<TeamsListPage />} />
          <Route path="/teamslist" element={<TeamsListPage />} />
          <Route path="/teamjudging" element={<TeamJudgingPage />} />
        </Routes>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
