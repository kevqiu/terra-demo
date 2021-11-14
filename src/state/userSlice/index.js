import { createSlice } from "@reduxjs/toolkit";

import { validateAuthToken } from "./thunk";

const initialState = {
  // currentUser: null,
  // FOR TESTING
  currentUser: "some-token",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => (state.currentUser = null),
  },
  extraReducers: (builder) => {
    builder.addCase(validateAuthToken.fulfilled, (state, action) => {
      state.currentUser = action.payload;
    });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
