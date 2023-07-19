import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const countSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state, action) => {
      state.count = state.count + action.payload;
    },
    decrease: (state, action) => {
      state.count = state.count - action.payload;
    },
  },
});

export const counterReducer = countSlice.reducer;
export const counterActions = countSlice.actions;
