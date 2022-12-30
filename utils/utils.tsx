/** @format */

import { format } from "date-fns";

export function convertFromEpoch(timestamp: any, dateFormat = "Pp") {
  const formattedDate = format(new Date(timestamp * 1000), dateFormat);

  return formattedDate;
}
