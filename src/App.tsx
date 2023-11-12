import React from "react";
import { MapComponent } from "./components";
import { saveFeatureToServer, loadFeaturesFromServer } from "./services";
import {
  convertOLGeometryToGeoJSON,
  convertGeoJSONToOLGeometry
} from "./utils";
import { MapFeature } from "./models";

const App: React.FC = () => {
  // App logic...

  return (
    <div>
      <MapComponent />
      {/* Other components... */}
    </div>
  );
};

export default App;
