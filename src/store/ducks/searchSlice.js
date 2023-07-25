import { createSlice } from "@reduxjs/toolkit";

// 저장할 데이터(상태)
const initialState = {
  searchKeyword: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,

  // state를 변경할 수 있는 함수들의 모음집
  reducers: {
    setQuery: (state, action) => {
      state.searchKeyword = action.payload;
    },
  },
});

export const searchReducer = searchSlice.reducer;
export const searchActions = searchSlice.actions;
