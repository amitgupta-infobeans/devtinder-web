import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import feedReducer from "./feedSlice";
import reviewRequestReducer from "./reviewRequestSlice";
import fetchConnectionsReducer from "./connecitonSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer,
    reviewRequest: reviewRequestReducer,
    fetchConnections: fetchConnectionsReducer,
  },
});

export default appStore;
