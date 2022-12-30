/** @format */

import { configureStore } from "@reduxjs/toolkit";
import stationSlice from "./station-slice";
import readingSlice from "./reading-slice";

const store = configureStore({
  reducer: { station: stationSlice.reducer, reading: readingSlice.reducer },
});

export default store;
