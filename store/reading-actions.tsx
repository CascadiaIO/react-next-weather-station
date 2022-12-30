/** @format */

import { Reading } from "./interfaces/reading.types";
import { readingActions } from "./reading-slice";

export const fetchReadingData = (stationId: string) => {
  return async (dispatch: any) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://swd.weatherflow.com/swd/rest/observations/station/${stationId}?token=ff3e7037-5cd4-477e-a719-f56c545d6aad`
      );

      if (!response.ok) {
        throw new Error("Could not fetch reading data!");
      }
      const data = (await response.json()) as Reading;
      return data;
    };

    try {
      const readingData = await fetchData();

      dispatch(
        readingActions.replaceReading({
          reading: readingData || null,
        })
      );
    } catch (error) {
      console.error("error: ", error);
    }
  };
};
