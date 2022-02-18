import { createSlice } from "@reduxjs/toolkit";

// import { login, validateAuthToken } from "./thunk";

const initialState = {
  currentUser: null,
};

export const walletSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.currentUser = action.payload;
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(login.fulfilled, (state, action) => {
    //   state.currentUser = action.payload.auth_token;
    // });
    // builder.addCase(validateAuthToken.fulfilled, (state, action) => {
    //   state.currentUser = action.payload.auth_token;
    // });
  },
});

export const { logout, setUser } = walletSlice.actions;

export default walletSlice.reducer;
