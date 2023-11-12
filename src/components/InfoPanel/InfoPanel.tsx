import React from "react";
import { FeatureData } from "../../models";
interface InfoPanelProps {
  featureData: FeatureData | null;
  onClose: () => void;
}

const InfoPanel: React.FC<InfoPanelProps> = ({ featureData, onClose }) => {
  if (!featureData) return null;

  return (
    <div
      style={{
        position: "absolute",
        right: "10px",
        top: "10px",
        backgroundColor: "white",
        padding: "10px",
        border: "1px solid black"
      }}
    >
      <h3>Feature Info</h3>
      <p>{JSON.stringify(featureData)}</p> {/* Display feature data */}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default InfoPanel;
