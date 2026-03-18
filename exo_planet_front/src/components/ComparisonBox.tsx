import React from "react";
import { type ExoPlanet, EARTH_DATA } from "../types/ExoPlanet";

interface ComparisonBoxProps {
  selectedExoPlanet: ExoPlanet | null;
  selectedExoPlanet2: ExoPlanet | null;
  onClose: () => void;
  renderCell: (value: any, suffix?: string) => React.ReactNode;
}

export const ComparisonBox: React.FC<ComparisonBoxProps> = ({
  selectedExoPlanet,
  selectedExoPlanet2,
  onClose,
  renderCell,
}) => {
  if (!selectedExoPlanet && !selectedExoPlanet2) return null;

  return (
    <div className="comparison-box">
      <h3 className="comparison-header">
        COMPARING: {selectedExoPlanet2 ? selectedExoPlanet2.name : "EARTH"} 
        &nbsp;//&nbsp;
        {selectedExoPlanet ? selectedExoPlanet.name : "EARTH"}
      </h3>
      <div className="comparison-grid">
        <div className="comparison-item">
          <h4>{selectedExoPlanet2 ? `[ PLANET-02 ] ${selectedExoPlanet2.name}` : "[ HOME ] EARTH"}</h4>
          <p>RADIUS: {selectedExoPlanet2 ? renderCell(selectedExoPlanet2.pl_rade?.toFixed(2)) : "1.0"} R⊕</p>
          <p>TEMP: {selectedExoPlanet2 ? renderCell(selectedExoPlanet2.pl_eqt?.toFixed(0)) : "255"} K</p>
        </div>
        <div className="comparison-item">
          <h4>{selectedExoPlanet ? `[ PLANET-01 ] ${selectedExoPlanet.name}` : "[ HOME ] EARTH"}</h4>
          <p>RADIUS: {selectedExoPlanet ? renderCell(selectedExoPlanet.pl_rade?.toFixed(2)) : "1.0"} R⊕</p>
          <p>TEMP: {selectedExoPlanet ? renderCell(selectedExoPlanet.pl_eqt?.toFixed(0)) : "255"} K</p>
        </div>
        <div className="comparison-item highlight">
          <h4>RATIO (RADIUS)</h4>
          <p>
            {(selectedExoPlanet?.pl_rade || EARTH_DATA.pl_rade) && (selectedExoPlanet2?.pl_rade || EARTH_DATA.pl_rade)
              ? `${((selectedExoPlanet?.pl_rade || EARTH_DATA.pl_rade) / (selectedExoPlanet2?.pl_rade || EARTH_DATA.pl_rade)).toFixed(2)}x` 
              : "N/A"}
          </p>
        </div>
      </div>
      <button className="apply-filters-button" style={{ marginTop: "20px" }} onClick={onClose}>TERMINATE COMPARISON</button>
    </div>
  );
};
