import { Geometry as GeoJSONGeometry } from "geojson";

// Define the type for your feature data
export interface MapFeature {
  // Define the properties of your feature, e.g., id, geometry in GeoJSON, etc.
  geometry: GeoJSONGeometry; // Replace with your actual geometry type
  // ... other properties
}
