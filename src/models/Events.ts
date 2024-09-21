export interface Event {
  geometry: EventGeometry;
  references: string[];
  region: string;
  detections: Detection[];
  supplyChain: SupplyChain[];
}

export interface Detection {
  category: DetectionCategory;
  date: Date;
  geometry: DetectionGeometry;
  areaOverlaps: AreaOverlap[];
  totalSize: number;
  nonOverlapSize: number;
}

export interface AreaOverlap {
  category: string;
  size: number;
}

export enum DetectionCategory {
  Deforestation = 'deforestation',
}

export interface DetectionGeometry {
  type: DetectionGeometryType;
  coordinates: Array<Array<Array<number[] | number>>>;
}

export enum DetectionGeometryType {
  MultiPolygon = 'MultiPolygon',
  Polygon = 'Polygon',
}

export interface EventGeometry {
  type: string;
  coordinates: number[];
}

export interface SupplyChain {
  type: string;
  relationship: string;
  name: string;
  distance: number;
  id: string;
}
