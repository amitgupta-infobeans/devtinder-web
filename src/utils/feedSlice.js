import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: {
    feed: null,
    offsetFeed: 1,
  },
  reducers: {
    addFeed: (state, action) => {
      state.feed = action.payload;
    },
    removeFeed: (state, action) => {
     const updatedData = state.feed.filter((v) => v._id !== action.payload);
     state.feed = updatedData;
      // return state;
    },
    addMoreFeed: (state, action) => {
      state.feed = [...state.feed, ...action.payload];
    },
    updateOffsetFeed: (state, action) => {
      state.offsetFeed = state.offsetFeed + 1;
    },
    emptyFeed: (state, action) => {
      state.feed = null;
      state.offsetFeed = 1;
    },
  },
});

export const { addFeed, removeFeed, addMoreFeed, updateOffsetFeed, emptyFeed } =
  feedSlice.actions;
export default feedSlice.reducer;
