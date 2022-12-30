/** @format */

export type Reading = {
  station_id: number;
  station_name: string;
  public_name: string;
  latitude: number;
  longitude: number;
  timezone: string;
  elevation: number;
  is_public: boolean;
  status: Status;
  station_units: StationUnits;
  outdoor_keys: string[];
  obs: Ob[];
};

export type Status = {
  status_code: number;
  status_message: string;
};

export type StationUnits = {
  units_temp: string;
  units_wind: string;
  units_precip: string;
  units_pressure: string;
  units_distance: string;
  units_direction: string;
  units_other: string;
};

export type Ob = {
  timestamp: number;
  air_temperature: number;
  barometric_pressure: number;
  station_pressure: number;
  sea_level_pressure: number;
  relative_humidity: number;
  precip: number;
  precip_accum_last_1hr: number;
  precip_accum_local_day: number;
  precip_accum_local_yesterday: number;
  precip_minutes_local_day: number;
  precip_minutes_local_yesterday: number;
  wind_avg: number;
  wind_direction: number;
  wind_gust: number;
  wind_lull: number;
  solar_radiation: number;
  uv: number;
  brightness: number;
  lightning_strike_last_epoch: number;
  lightning_strike_last_distance: number;
  lightning_strike_count: number;
  lightning_strike_count_last_1hr: number;
  lightning_strike_count_last_3hr: number;
  feels_like: number;
  heat_index: number;
  wind_chill: number;
  dew_point: number;
  wet_bulb_temperature: number;
  wet_bulb_globe_temperature: number;
  delta_t: number;
  air_density: number;
  pressure_trend: string;
};

// FOR LIVE READINGS
export interface Summary {
  pressure_trend: string;
  strike_count_1h: number;
  strike_count_3h: number;
  precip_total_1h: number;
  strike_last_dist: number;
  strike_last_epoch: number;
  precip_accum_local_yesterday: number;
  precip_analysis_type_yesterday: number;
  feels_like: number;
  heat_index: number;
  wind_chill: number;
  raining_minutes: number[];
  dew_point: number;
  wet_bulb_temperature: number;
  wet_bulb_globe_temperature: number;
  air_density: number;
  delta_t: number;
  precip_minutes_local_day: number;
  precip_minutes_local_yesterday: number;
}

export interface LiveStatus {
  status: Status;
  device_id: number;
  type: string;
  source: string;
  summary: Summary;
  obs: number[][];
}
