export type Events = {
  events: Event[];
};

export type Event = {
  geometry: {
    type: string;
    coordinates: number[];
  };
  references: string[];
  region: string;
  detections: Detection[];
  supplyChain: SupplyChain[];
};

type Detection = {
  category: string;
  date: string;
  geometry: Geometry[];
};

type SupplyChain = {
  type: string;
  relationship: string;
  name: string;
  distance: number;
  id: string;
};

type Geometry = {
  type: string;
  coordinates: [[number[]]][];
};
