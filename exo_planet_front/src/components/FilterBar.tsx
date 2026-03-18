import React from "react";

interface FilterBarProps {
  minRadius: string;
  setMinRadius: (v: string) => void;
  minMass: string;
  setMinMass: (v: string) => void;
  name: string;
  setName: (v: string) => void;
  filledOnly: boolean;
  setFilledOnly: (v: boolean) => void;
  highlightHabitable: boolean;
  setHighlightHabitable: (v: boolean) => void;
  onApply: () => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  minRadius,
  setMinRadius,
  minMass,
  setMinMass,
  name,
  setName,
  filledOnly,
  setFilledOnly,
  highlightHabitable,
  setHighlightHabitable,
  onApply,
}) => {
  return (
    <div className="filters">
      <input 
        type="number" 
        placeholder="MIN RADIUS (R⊕)" 
        value={minRadius}
        onChange={(e) => setMinRadius(e.target.value)}
      />
      <input 
        type="number" 
        placeholder="MIN MASS (MJ)" 
        value={minMass}
        onChange={(e) => setMinMass(e.target.value)}
      />
      <input 
        type="text" 
        placeholder="SEARCH PLANET NAME" 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>
        <input 
          type="checkbox" 
          checked={filledOnly} 
          onChange={(e) => setFilledOnly(e.target.checked)} 
        />
        COMPLETE DATA ONLY
      </label>

      <label className="habitable-label">
        <input 
          type="checkbox" 
          checked={highlightHabitable} 
          onChange={(e) => setHighlightHabitable(e.target.checked)} 
        />
        MONITOR HABITABLE ZONES
      </label>

      <button className="apply-filters-button" onClick={onApply}>APPLY FILTERS</button>
    </div>
  );
};
