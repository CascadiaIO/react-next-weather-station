/** @format */

import { stationActions } from "./station-slice";

export const fetchStationData = () => {
  return async (dispatch: any) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://swd.weatherflow.com/swd/rest/stations?token=ff3e7037-5cd4-477e-a719-f56c545d6aad"
      );

      if (!response.ok) {
        throw new Error("Could not fetch station data!");
      }
      const data = await response.json();
      return data.stations[0];
    };

    try {
      const stationData = await fetchData();
      dispatch(
        stationActions.replaceStation({
          station: stationData || null,
        })
      );
    } catch (error) {
      console.error("error: ", error);
    }
  };
};
