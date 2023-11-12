import { Geometry } from "ol/geom";

interface MapFeature {
  id?: string; // Optional identifier
  geometry: Geometry; // Assuming GeoJSON format for geometry
  // Add other properties as needed
}
export default MapFeature;
