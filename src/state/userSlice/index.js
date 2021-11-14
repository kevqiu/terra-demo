import { createSlice } from "@reduxjs/toolkit";

import { validateAuthToken } from "./thunk";

const initialState = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(validateAuthToken.fulfilled, (state, action) => {
      state.currentUser = action.payload;
    });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
