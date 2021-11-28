import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./userSlice";
import teamsSlice from "./teamSlice";

export default configureStore({
  reducer: {
    user: userSlice,
    teams: teamsSlice,
  },
});
