import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
  name: "fetchConnections",
  initialState: null,
  reducers: {
    addConnections: (state, action) => action.payload,
    upateConnections: (state, action) => {
      state = [...state, ...action.payload];
    },
  },
});

export const { addConnections, upateConnections } = connectionSlice.actions;

export default connectionSlice.reducer;
