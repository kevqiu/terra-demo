import { createSlice } from "@reduxjs/toolkit";

import { getTeams, submitTeamScore } from "./thunk";

const initialState = {
  teams: [],
};

export const teamsSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTeams.fulfilled, (state, action) => {
      state.teams = action.payload.teams;
    });
  },
});

// export const {} = teamsSlice.actions;

export default teamsSlice.reducer;
