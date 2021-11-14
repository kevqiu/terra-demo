import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./state/userSlice";

export default configureStore({
  reducer: {
    user: userSlice,
  },
});
