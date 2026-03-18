import { useState } from "react";
import type { ExoPlanet } from "../types/ExoPlanet";
import useExoPlanets from "../hooks/useExoPlanets";
import { ComparisonBox } from "./ComparisonBox";
import { FilterBar } from "./FilterBar";
import { Pagination } from "./Pagination";
import { PlanetTableBody } from "./PlanetTableBody";

export default function PlanetTable() {
  const {
    planets,
    loading,
    page,
    setPage,
    totalPages,
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
    handleFilter,
    activeHighlightHabitable,
  } = useExoPlanets();

  const [selectedExoPlanet, setSelectedExoPlanet] = useState<ExoPlanet | null>(null);
  const [selectedExoPlanet2, setSelectedExoPlanet2] = useState<ExoPlanet | null>(null);

  const handleSelectPlanet = (p: ExoPlanet) => {
    if (!selectedExoPlanet) {
      setSelectedExoPlanet(p);
    } else if (!selectedExoPlanet2) {
      if (selectedExoPlanet.id === p.id) {
        setSelectedExoPlanet(null);
      } else {
        setSelectedExoPlanet2(p);
      }
    } else {
      if (selectedExoPlanet.id === p.id) {
        setSelectedExoPlanet(null);
      } else if (selectedExoPlanet2.id === p.id) {
        setSelectedExoPlanet2(null);
      } else {
        const choice = window.prompt(
          `Comparison slots are full. Which planet would you like to replace?\n1. ${selectedExoPlanet.name}\n2. ${selectedExoPlanet2.name}\n(Enter 1 or 2)`
        );
        if (choice === "1") {
          setSelectedExoPlanet(p);
        } else if (choice === "2") {
          setSelectedExoPlanet2(p);
        }
      }
    }
  };

  const renderCell = (value: any, suffix: string = "") => {
    if (value === null || value === undefined || value === "") {
      return <span style={{ color: "#999", fontStyle: "italic" }}>N/A</span>;
    }
    return value + suffix;
  };

  if (loading) return <p className="loading-text">INITIALIZING DATA RETRIEVAL...</p>;

  return (
    <div className="table-container">
      <ComparisonBox
        selectedExoPlanet={selectedExoPlanet}
        selectedExoPlanet2={selectedExoPlanet2}
        onClose={() => {
          setSelectedExoPlanet(null);
          setSelectedExoPlanet2(null);
        }}
        renderCell={renderCell}
      />

      <FilterBar
        minRadius={minRadius}
        setMinRadius={setMinRadius}
        minMass={minMass}
        setMinMass={setMinMass}
        name={name}
        setName={setName}
        filledOnly={filledOnly}
        setFilledOnly={setFilledOnly}
        highlightHabitable={highlightHabitable}
        setHighlightHabitable={setHighlightHabitable}
        onApply={handleFilter}
      />

      <PlanetTableBody
        planets={planets}
        selectedExoPlanet={selectedExoPlanet}
        selectedExoPlanet2={selectedExoPlanet2}
        highlightHabitable={activeHighlightHabitable}
        onSelectPlanet={handleSelectPlanet}
        renderCell={renderCell}
      />

      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
}
