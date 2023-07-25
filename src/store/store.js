import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { counterReducer } from "./ducks/counterSlice";
import { searchReducer } from "./ducks/searchSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  search: searchReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
