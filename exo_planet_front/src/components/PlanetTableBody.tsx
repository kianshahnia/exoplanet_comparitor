import React, { useState } from "react";
import type { ExoPlanet } from "../types/ExoPlanet";

interface PlanetTableBodyProps {
  planets: ExoPlanet[];
  selectedExoPlanet: ExoPlanet | null;
  selectedExoPlanet2: ExoPlanet | null;
  highlightHabitable: boolean;
  onSelectPlanet: (p: ExoPlanet) => void;
  renderCell: (value: any, suffix?: string) => React.ReactNode;
}

export const PlanetTableBody: React.FC<PlanetTableBodyProps> = ({
  planets,
  selectedExoPlanet,
  selectedExoPlanet2,
  highlightHabitable,
  onSelectPlanet,
  renderCell,
}) => {
  const [expandedCell, setExpandedCell] = useState<string | null>(null);

  const toggleExpand = (id: string, col: string) => {
    const cellId = `${id}-${col}`;
    setExpandedCell(expandedCell === cellId ? null : cellId);
  };

  const isColExpanded = (colName: string) => {
    return expandedCell?.endsWith(`-${colName}`);
  };

  return (
    <table className="table">
      <thead className="table-header">
        <tr className="table-entries">
          <th>Action</th>
          <th className={isColExpanded('id') ? 'is-expanded' : ''}>ID</th>
          <th className={isColExpanded('name') ? 'is-expanded' : ''}>Name</th>
          <th className={isColExpanded('hostname') ? 'is-expanded' : ''}>Hostname</th>
          <th className={isColExpanded('pnum') ? 'is-expanded' : ''}># Planets</th>
          <th className={isColExpanded('method') ? 'is-expanded' : ''}>Discovery Method</th>
          <th className={isColExpanded('year') ? 'is-expanded' : ''}>Discovery Year</th>
          <th className={isColExpanded('facility') ? 'is-expanded' : ''}>Facility</th>
          <th className={isColExpanded('radius') ? 'is-expanded' : ''}>Radius (R⊕)</th>
          <th className={isColExpanded('mass') ? 'is-expanded' : ''}>Mass (MJ)</th>
          <th className={isColExpanded('temp') ? 'is-expanded' : ''}>Eq. Temp (K)</th>
          <th className={isColExpanded('spectype') ? 'is-expanded' : ''}>Star Spectral Type</th>
          <th className={isColExpanded('st_temp') ? 'is-expanded' : ''}>Star Temp (K)</th>
          <th className={isColExpanded('st_rad') ? 'is-expanded' : ''}>Star Radius</th>
          <th className={isColExpanded('st_mass') ? 'is-expanded' : ''}>Star Mass</th>
          <th className={isColExpanded('dist') ? 'is-expanded' : ''}>Distance (ly)</th>
          <th className={isColExpanded('update') ? 'is-expanded' : ''}>Row Update</th>
          <th className={isColExpanded('release') ? 'is-expanded' : ''}>Release Date</th>
        </tr>
      </thead>
      <tbody>
        {planets.map((p) => {
          const isSelected = selectedExoPlanet?.id === p.id || selectedExoPlanet2?.id === p.id;
          const isHabitable = highlightHabitable && p.habitability;

          let rowClass = "";
          if (isSelected) {
            rowClass = "row-selected";
          } else if (isHabitable) {
            rowClass = "row-habitable";
          }

          const getCellClass = (col: string) => {
            return `expandable ${expandedCell === `${p.id}-${col}` ? 'is-expanded' : ''}`;
          };

          return (
            <tr key={p.id} className={rowClass}>
              <td>
                <button className="compare-button" onClick={() => onSelectPlanet(p)}>
                  +
                </button>
              </td>
              <td 
                className={getCellClass('id')} 
                onClick={() => toggleExpand(p.id, 'id')}
              >
                {renderCell(p.id)}
              </td>
              <td 
                className={getCellClass('name')} 
                onClick={() => toggleExpand(p.id, 'name')}
              >
                {renderCell(p.name)}
              </td>
              <td 
                className={getCellClass('hostname')} 
                onClick={() => toggleExpand(p.id, 'hostname')}
              >
                {renderCell(p.hostname)}
              </td>
              <td 
                className={getCellClass('pnum')} 
                onClick={() => toggleExpand(p.id, 'pnum')}
              >
                {renderCell(p.sy_pnum)}
              </td>
              <td 
                className={getCellClass('method')} 
                onClick={() => toggleExpand(p.id, 'method')}
              >
                {renderCell(p.discoverymethod)}
              </td>
              <td 
                className={getCellClass('year')} 
                onClick={() => toggleExpand(p.id, 'year')}
              >
                {renderCell(p.disc_year)}
              </td>
              <td 
                className={getCellClass('facility')} 
                onClick={() => toggleExpand(p.id, 'facility')}
              >
                {renderCell(p.disc_facility)}
              </td>

              <td 
                className={getCellClass('radius')} 
                onClick={() => toggleExpand(p.id, 'radius')}
              >
                {p.pl_rade ? p.pl_rade.toFixed(2) : renderCell(null)}
              </td>
              <td 
                className={getCellClass('mass')} 
                onClick={() => toggleExpand(p.id, 'mass')}
              >
                {p.pl_bmassj ? p.pl_bmassj.toFixed(2) : renderCell(null)}
              </td>
              <td 
                className={getCellClass('temp')} 
                onClick={() => toggleExpand(p.id, 'temp')}
              >
                {p.pl_eqt ? p.pl_eqt.toFixed(0) : renderCell(null)}
              </td>

              <td 
                className={getCellClass('spectype')} 
                onClick={() => toggleExpand(p.id, 'spectype')}
              >
                {renderCell(p.st_spectype)}
              </td>
              <td 
                className={getCellClass('st_temp')} 
                onClick={() => toggleExpand(p.id, 'st_temp')}
              >
                {renderCell(p.st_teff)}
              </td>
              <td 
                className={getCellClass('st_rad')} 
                onClick={() => toggleExpand(p.id, 'st_rad')}
              >
                {renderCell(p.st_rad)}
              </td>
              <td 
                className={getCellClass('st_mass')} 
                onClick={() => toggleExpand(p.id, 'st_mass')}
              >
                {renderCell(p.st_mass)}
              </td>

              <td 
                className={getCellClass('dist')} 
                onClick={() => toggleExpand(p.id, 'dist')}
              >
                {p.sy_dist ? p.sy_dist.toFixed(1) : renderCell(null)}
              </td>

              <td 
                className={getCellClass('update')} 
                onClick={() => toggleExpand(p.id, 'update')}
              >
                {p.rowupdate
                  ? new Date(p.rowupdate).toLocaleDateString()
                  : renderCell(null)}
              </td>
              <td 
                className={getCellClass('release')} 
                onClick={() => toggleExpand(p.id, 'release')}
              >
                {p.releasedate
                  ? new Date(p.releasedate).toLocaleDateString()
                  : renderCell(null)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
