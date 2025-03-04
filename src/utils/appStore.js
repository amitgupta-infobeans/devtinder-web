import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import feedReducer from "./feedSlice";
import revieewRequestReducer from "./reviewRequestSlice";
import fetchConnectionsReducer from "./connecitonSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer,
    reviewRequest: revieewRequestReducer,
    fetchConnections: fetchConnectionsReducer,
  },
});

export default appStore;
