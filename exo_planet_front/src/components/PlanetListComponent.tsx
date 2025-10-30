import { useEffect, useState } from "react";

// 1️⃣ Define the shape of your data (matching your Java entity)
export interface ExoPlanet {
  id: number;
  name: string;
  hostname: string;
  sy_pnum: number;
  discoverymethod: string;
  disc_year: number;
  disc_facility: string;
  pl_rade: number;       // Earth radii
  pl_bmassj: number;     // Jupiter masses
  pl_eqt: number;        // equilibrium temperature
  st_spectype: string;
  st_teff: number;
  st_rad: number;
  st_mass: number;
  sy_dist: number;
  rowupdate: string;     // ISO date string from backend
  releasedate: string;   // ISO date string from backend
}

export default function PlanetTable() {
  const [planets, setPlanets] = useState<ExoPlanet[]>([]);
  const [loading, setLoading] = useState<boolean>(true);


  useEffect(() => {
    fetch('/api/planets')
      .then((res) => res.json())
      .then((data: ExoPlanet[]) => {
        setPlanets(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching planets:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading planets...</p>;
  if (planets.length === 0) return <p>No planets found.</p>;

  return (
    <div style={{ overflowX: "auto", padding: "1rem" }}>
      <table
        border={1}
        cellPadding={6}
        cellSpacing={0}
        style={{ width: "100%", borderCollapse: "collapse" }}
      >
        <thead className="list_container">
          <tr >
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
          {planets.map((p) => (
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
    </div>
  );
}
