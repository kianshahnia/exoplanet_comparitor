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
  habitability: boolean;
}

export const EARTH_DATA = {
  name: "Earth",
  pl_rade: 1.0,
  pl_bmassj: 0.00315, // Jupiter masses
  pl_eqt: 255,
};
