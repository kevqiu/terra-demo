import { createAsyncThunk } from "@reduxjs/toolkit";

import userAPI from "../../api/userAPI";

export const validateAuthToken = createAsyncThunk(
  "users/validateAuthToken",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const authToken = state.user.currentUser.authToken;
    const response = await userAPI.validateAuthToken(authToken);
    return response.data;
  }
);
