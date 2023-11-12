import axios from "axios";
import { MapFeature } from "../models";
import { Feature } from "ol";
import Point from "ol/geom/Point";

// Mock data: array of coordinates [longitude, latitude]
const mockedData = [
  [-1.815, 52.553], // Coordinate 1
  [-0.91, 52.486], // Coordinate 2
  [-1.464, 52.411] // Coordinate 3
  // Add more coordinates as needed
];

// Functions for interacting with backend...
export const saveFeatureToServer = async (
  feature: MapFeature
): Promise<any> => {
  // Simulate a server response
  return axios.post("/save-feature", feature);
};
export const loadFeaturesFromServer = async (): Promise<Feature[]> => {
  // Convert coordinates to OpenLayers features
  const features = mockedData.map((coord) => {
    const point = new Point(coord).transform("EPSG:4326", "EPSG:3857");
    return new Feature(point);
  });

  return features; // Replace with actual data from server in a real app
};
