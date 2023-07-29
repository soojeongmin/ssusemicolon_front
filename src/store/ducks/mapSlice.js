import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  center: {
    latitude: 37.49457247983994,
    longitude: 126.95975997149995,
  },

  radius: 2,
  level: 3,
};

const level2Radius = {
  1: 0.2,
  2: 0.4,
  3: 0.8,
  4: 1.5,
  5: 2,
  6: 3,
};

const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setCenter: (state, action) => {
      const { latitude, longitude } = action.payload;
      state.center.latitude = latitude;
      state.center.longitude = longitude;
    },
    setRadius: (state, action) => {
      state.radius = action;
    },
    setRadiusByLevel: (state, action) => {
      const level =
        Number(action.payload) >= 6 ? 6 : Number(action.payload) || 2;
      state.radius = level2Radius[level];
    },
    setLevel: (state, action) => {
      const newLevel = action.payload;
      state.level = newLevel;
      state.radius =
        level2Radius[Number(newLevel) >= 6 ? 6 : Number(newLevel) || 2];
    },
  },
});

export const mapReducer = mapSlice.reducer;
export const mapActions = mapSlice.actions;
