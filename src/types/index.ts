export type Respons = [string, FlightsRespons];

export interface FlightsRespons {
  type: string;
  features: Feature[];
}

export interface Feature {
  type: string;
  properties: Properties;
  geometry: Geometry;
}

export interface Properties {
  serial: string;
  registration: string;
  Name: string;
  altitude: number;
  pilot: string;
  organization: string;
  yaw: number;
}

export interface Geometry {
  coordinates: number[];
  type: string;
}

export interface ViewSettings {
  latitude: number;
  longitude: number;
  zoom: number;
  bearing?: number;
  pitch?: number;
}
