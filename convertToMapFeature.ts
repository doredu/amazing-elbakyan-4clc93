import { toLonLat } from "ol/proj";
import { GeoJSON } from "ol/format";
import { Geometry as GeoJSONGeometry } from "geojson";

export const convertToMapFeature = (geometry: SimpleGeometry): MapFeature => {
  const format = new GeoJSON();
  const geoJsonGeometry = format.writeGeometryObject(geometry, {
    dataProjection: "EPSG:4326",
    featureProjection: "EPSG:3857"
  });

  return {
    geometry: geoJsonGeometry as GeoJSONGeometry.Geometry
    // Add other properties as needed
  };
};
