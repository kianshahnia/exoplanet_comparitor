import { useEffect, useState } from "react";

export interface ExoPlanet {
  id: number;
  name: string;
  hostname: string;
  sy_pnum: number;
  discoverymethod: string;
  disc_year: number;
  disc_facility: string;
  pl_rade: number;
  pl_bmassj: number;
  pl_eqt: number;
  st_spectype: string;
  st_teff: number;
  st_rad: number;
  st_mass: number;
  sy_dist: number;
  rowupdate: string;
  releasedate: string;
}

export default function PlanetTable() {
  const [planets, setPlanets] = useState<ExoPlanet[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);
  const [size] = useState<number>(10);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    setLoading(true);

    fetch(`/api/planets?page=${page}&size=${size}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP status ${res.status}`);
        return res.json();
      })
      .then((data: any) => {
        const allPlanets = Array.isArray(data) ? data : (data.content || []);
        
        setPlanets(allPlanets);
        
        if (data.totalPages) {
            setTotalPages(data.totalPages);
        } else {
            setTotalPages(Math.ceil(allPlanets.length / size));
        }

        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching planets:", err);
        setPlanets([]);
        setLoading(false);
      });
  }, [page, size]);

  const renderCell = (value: any, suffix: string = "") => {
    if (value === null || value === undefined || value === "") {
      return <span style={{ color: "#999", fontStyle: "italic" }}>N/A</span>;
    }
    return value + suffix;
  };

  if (loading) return <p className="loading-text">Loading planets...</p>;
  if (!planets || planets.length === 0) return <p>No planets found.</p>;

  const startIndex = page * size;
  const currentTableData = planets.length > size ? planets.slice(startIndex, startIndex + size) : planets;

  return (
    <div className="table-container">
      <table className="table">
        <thead className="table-header">
          <tr className="table-entries">
            <th>ID</th>
            <th>Name</th>
            <th>Hostname</th>
            <th># Planets</th>
            <th>Discovery Method</th>
            <th>Discovery Year</th>
            <th>Facility</th>
            <th>Radius (R⊕)</th>
            <th>Mass (MJ)</th>
            <th>Eq. Temp (K)</th>
            <th>Star Spectral Type</th>
            <th>Star Temp (K)</th>
            <th>Star Radius</th>
            <th>Star Mass</th>
            <th>Distance (ly)</th>
            <th>Row Update</th>
            <th>Release Date</th>
          </tr>
        </thead>
        <tbody>
          {currentTableData.map((p) => (
            <tr key={p.id}>
              {/* IDs and Names usually exist, but good to be safe */}
              <td>{renderCell(p.id)}</td>
              <td>{renderCell(p.name)}</td>
              <td>{renderCell(p.hostname)}</td>
              <td>{renderCell(p.sy_pnum)}</td>
              <td>{renderCell(p.discoverymethod)}</td>
              <td>{renderCell(p.disc_year)}</td>
              <td>{renderCell(p.disc_facility)}</td>
              
              {/* Numeric fields with formatting logic */}
              <td>{p.pl_rade ? p.pl_rade.toFixed(2) : renderCell(null)}</td>
              <td>{p.pl_bmassj ? p.pl_bmassj.toFixed(2) : renderCell(null)}</td>
              <td>{p.pl_eqt ? p.pl_eqt.toFixed(0) : renderCell(null)}</td>
              
              <td>{renderCell(p.st_spectype)}</td>
              <td>{renderCell(p.st_teff)}</td>
              <td>{renderCell(p.st_rad)}</td>
              <td>{renderCell(p.st_mass)}</td>
              
              <td>{p.sy_dist ? p.sy_dist.toFixed(1) : renderCell(null)}</td>
              
              {/* Date handling */}
              <td>
                {p.rowupdate 
                  ? new Date(p.rowupdate).toLocaleDateString() 
                  : renderCell(null)}
              </td>
              <td>
                {p.releasedate 
                  ? new Date(p.releasedate).toLocaleDateString() 
                  : renderCell(null)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="button-container">
        <button
          className="prev-button"
          onClick={() => setPage(Math.max(0, page - 1))}
          disabled={page === 0}
        >
          Previous
        </button>

        <span>
          Page {page + 1} of {totalPages || 1}
        </span>

        <button
          className="next-button"
          onClick={() => setPage(page + 1)}
          disabled={page + 1 >= totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}