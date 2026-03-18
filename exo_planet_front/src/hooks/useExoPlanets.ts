import { useState, useEffect, useCallback } from "react";
import type { ExoPlanet } from "../types/ExoPlanet";

export default function useExoPlanets() {
  const [planets, setPlanets] = useState<ExoPlanet[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);
  const [size] = useState<number>(10);
  const [totalPages, setTotalPages] = useState<number>(0);

  // Local state for the filter inputs (what the user is typing)
  const [minRadius, setMinRadius] = useState<string>("");
  const [minMass, setMinMass] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [filledOnly, setFilledOnly] = useState<boolean>(false);
  const [highlightHabitable, setHighlightHabitable] = useState<boolean>(false);

  // The actual filters used for fetching data
  const [activeFilters, setActiveFilters] = useState({
    minRadius: "",
    minMass: "",
    name: "",
    filledOnly: false,
    highlightHabitable: false,
  });

  const fetchPlanets = useCallback(() => {
    setLoading(true);
    
    const params = new URLSearchParams();
    params.append("page", page.toString());
    params.append("size", size.toString());
    if (activeFilters.minRadius) params.append("minRadius", activeFilters.minRadius);
    if (activeFilters.minMass) params.append("minMass", activeFilters.minMass);
    if (activeFilters.name) params.append("name", activeFilters.name);
    if (activeFilters.filledOnly) params.append("filledOnly", "true");
    if (activeFilters.highlightHabitable) params.append("highlightHabitable", "true");

    fetch(`/api/planets?${params.toString()}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP status ${res.status}`);
        return res.json();
      })
      .then((data: any) => {
        const allPlanets = data.content ? data.content : data;
        setPlanets(allPlanets);
        setTotalPages(data.totalPages || 0);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching planets:", err);
        setPlanets([]);
        setLoading(false);
      });
  }, [page, size, activeFilters]);

  useEffect(() => {
    fetchPlanets();
  }, [fetchPlanets]);

  const handleFilter = () => {
    setActiveFilters({
      minRadius,
      minMass,
      name,
      filledOnly,
      highlightHabitable,
    });
    setPage(0);
  };

  return {
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
    activeHighlightHabitable: activeFilters.highlightHabitable,
    fetchPlanets,
    size
  };
}
