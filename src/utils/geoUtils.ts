import { GeoJSON } from "ol/format";
import { Geometry as GeoJSONGeometry } from "geojson";
import { Geometry } from "ol/geom";

// Functions for GeoJSON and OpenLayers conversions...

export const convertOLGeometryToGeoJSON = (
  olGeometry: Geometry
): GeoJSONGeometry => {
  const format = new GeoJSON();
  const geoJsonGeometry = format.writeGeometryObject(olGeometry, {
    dataProjection: "EPSG:4326", // Output projection
    featureProjection: "EPSG:3857" // Projection of the source data (OpenLayers default)
  });

  return geoJsonGeometry as GeoJSONGeometry;
};

export const convertGeoJSONToOLGeometry = (
  geoJsonGeometry: GeoJSONGeometry
): Geometry => {
  const format = new GeoJSON();
  const olGeometry = format.readGeometry(geoJsonGeometry, {
    dataProjection: "EPSG:4326", // Projection of the source data
    featureProjection: "EPSG:3857" // Output projection (OpenLayers default)
  });

  return olGeometry;
};
