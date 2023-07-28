import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { counterReducer } from "./ducks/counterSlice";
import { searchReducer } from "./ducks/searchSlice";
import { mapReducer } from "./ducks/mapSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  search: searchReducer,
  map: mapReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
