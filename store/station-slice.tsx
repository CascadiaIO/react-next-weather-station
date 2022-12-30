/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { Station } from "./interfaces/station.types";

const initStation: Station = {
  location_id: 0,
  station_id: 0,
  name: "",
  public_name: "",
  latitude: 0,
  longitude: 0,
  timezone: "",
  timezone_offset_minutes: 0,
  station_meta: {
    share_with_wf: false,
    share_with_wu: false,
    elevation: 0,
  },
  last_modified_epoch: 0,
  created_epoch: 0,
  devices: [],
  station_items: [],
  is_local_mode: false,
};

const stationSlice = createSlice({
  name: "station",
  initialState: { station: initStation },
  reducers: {
    replaceStation(state, action) {
      state.station = action.payload.station;
    },
  },
});

export const stationActions = stationSlice.actions;
export default stationSlice;
