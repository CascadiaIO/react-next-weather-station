/** @format */
export interface StationMeta {
  share_with_wf: boolean;
  share_with_wu: boolean;
  elevation: number;
}

export interface Station {
  location_id: number;
  station_id: number;
  name: string;
  public_name: string;
  latitude: number;
  longitude: number;
  timezone: string;
  timezone_offset_minutes: number;
  station_meta: StationMeta;
  last_modified_epoch: number;
  created_epoch: number;
  devices: Device[];
  station_items: StationItem[];
  is_local_mode: boolean;
}

export interface Device {
  device_id: number;
  serial_number: string;
  location_id: number;
  device_meta: DeviceMeta;
  device_type: string;
  hardware_revision: string;
  firmware_revision: string;
  device_settings?: DeviceSettings;
}

export interface DeviceMeta {
  agl: number;
  name: string;
  environment: string;
  wifi_network_name: string;
}

export interface DeviceSettings {
  show_precip_final: boolean;
}

export interface StationItem {
  location_item_id: number;
  location_id: number;
  device_id: number;
  item: string;
  sort: number;
  station_id: number;
  station_item_id: number;
}

export interface Status {
  status_code: number;
  status_message: string;
}
