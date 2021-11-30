import { createSlice } from "@reduxjs/toolkit";

import { getTeamByNumber, getTeams } from "./thunk";

const initialState = {
  allTeams: [],
  byNumber: {},
};

export const teamsSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTeams.fulfilled, (state, action) => {
      const teams = action.payload.teams;
      state.allTeams = teams.map((t) => t.number);
      state.byNumber = Object.assign(...teams.map((t) => ({ [t.number]: t })));
    });
    builder.addCase(getTeamByNumber.fulfilled, (state, action) => {
      const team = action.payload;
      if (!state.allTeams.includes(team.number))
        state.allTeams.push(team.number);
      state.byNumber[team.number] = team;
    });
  },
});

// export const {} = teamsSlice.actions;

export default teamsSlice.reducer;
