import { createSlice } from "@reduxjs/toolkit";

const reviewRequestSlice = createSlice({
  name: "reviewRequest",
  initialState: null,
  reducers: {
    updateReview: (state, action) =>
      state.filter((v) => v._id !== action.payload),
    addReviews: (state, action) => action.payload,
    emptyReview: (state, action) => null,
  },
});
export const { addReviews, updateReview, emptyReview } =
  reviewRequestSlice.actions;
export default reviewRequestSlice.reducer;
