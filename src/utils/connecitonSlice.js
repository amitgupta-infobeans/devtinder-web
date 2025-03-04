import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
  name: "fetchConnections",
  initialState: null,
  reducers: {
    addConnections: (state, action) => {
      state =  action.payload;
      return state;
    },
    upateConnections:(state,action)=>{
      state = [...state, ...action.payload]
      return state;
    }
  },
});

export const { addConnections,upateConnections } = connectionSlice.actions;

export default connectionSlice.reducer;
