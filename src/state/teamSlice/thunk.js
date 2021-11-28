import { createAsyncThunk } from "@reduxjs/toolkit";

import teamsAPI from "../../api/teamsAPI";

export const getTeams = createAsyncThunk("teams/getTeams", async () => {
  const response = await teamsAPI.getTeams();
  return response.json();
});

export const submitTeamScore = createAsyncThunk(
  "teams/submitTeamScore",
  async (values) => {
    const response = await teamsAPI.submitTeamScore(values);
    return response.json();
  }
);
