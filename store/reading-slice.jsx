/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initReadingState = {
  reading: {},
};

const readingSlice = createSlice({
  name: "reading",
  initialState: initReadingState,
  reducers: {
    replaceReading(state, action) {
      state.reading = action.payload.reading;
    },
  },
});

export const readingActions = readingSlice.actions;
export default readingSlice;
