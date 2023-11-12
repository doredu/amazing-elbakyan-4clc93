// src/components/MapComponent/MapComponent.tsx
import React, { useRef, useEffect, useState } from "react";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { defaults as defaultInteractions, Select } from "ol/interaction";
import InfoPanel from "../InfoPanel/InfoPanel";
import { loadFeaturesFromServer } from "../../services/mapService";
import { FeatureData } from "../../models";

const MapComponent: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [selectedFeature, setSelectedFeature] = useState<FeatureData | null>(
    null
  );

  useEffect(() => {
    if (!mapRef.current) return;

    const vectorSource = new VectorSource();
    const selectInteraction = new Select();
    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new XYZ({
            url: "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          })
        }),
        new VectorLayer({
          source: vectorSource
        })
      ],
      view: new View({
        center: [0, 0],
        zoom: 2
      }),
      interactions: defaultInteractions().extend([selectInteraction]) // Add default interactions along with custom ones
    });

    // Event listener for feature selection
    selectInteraction.on("select", (event) => {
      const selected = event.selected[0];
      setSelectedFeature(selected ? selected.getProperties() : null);
    });

    // Load mocked features
    loadFeaturesFromServer().then((features) => {
      vectorSource.addFeatures(features);
    });

    return () => map.setTarget(undefined);
  }, []);

  return (
    <div
      ref={mapRef}
      style={{ width: "100%", height: "400px", position: "relative" }}
    >
      {selectedFeature && (
        <InfoPanel
          featureData={selectedFeature}
          onClose={() => setSelectedFeature(null)}
        />
      )}
    </div>
  );
};

export default MapComponent;
