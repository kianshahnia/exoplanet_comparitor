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
  }, []);

  if (loading) return <p>Loading planets...</p>;
  if (!planets || planets.length === 0) return <p>No planets found.</p>;

  const startIndex = page * size;
  const currentTableData = planets.slice(startIndex, startIndex + size);

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
          {/* Map over currentTableData instead of planets */}
          {currentTableData.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.hostname}</td>
              <td>{p.sy_pnum}</td>
              <td>{p.discoverymethod}</td>
              <td>{p.disc_year}</td>
              <td>{p.disc_facility}</td>
              <td>{p.pl_rade?.toFixed(2)}</td>
              <td>{p.pl_bmassj?.toFixed(2)}</td>
              <td>{p.pl_eqt?.toFixed(0)}</td>
              <td>{p.st_spectype}</td>
              <td>{p.st_teff}</td>
              <td>{p.st_rad}</td>
              <td>{p.st_mass}</td>
              <td>{p.sy_dist?.toFixed(1)}</td>
              <td>{new Date(p.rowupdate).toLocaleDateString()}</td>
              <td>{new Date(p.releasedate).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
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