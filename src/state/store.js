import { configureStore } from "@reduxjs/toolkit";

import walletSlice from "./walletSlice";

export default configureStore({
  reducer: {
    wallet: walletSlice,
  },
});
