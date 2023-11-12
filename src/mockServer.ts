import axios from "axios";

// Mock data store
const dataStore = {
  features: []
};

// Simulate saving a feature to the server
axios.interceptors.request.use((config) => {
  if (config.url === "/save-feature" && config.method === "post") {
    dataStore.features.push(config.data);
    return [200, { message: "Feature saved successfully" }];
  }
  return config;
});

// Simulate retrieving features from the server
axios.interceptors.request.use((config) => {
  if (config.url === "/get-features" && config.method === "get") {
    return [200, dataStore.features];
  }
  return config;
});
