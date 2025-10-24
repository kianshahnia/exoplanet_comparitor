package com.kian.exoplanets.exoplanet_comparator.model;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "exoplanets")
public class ExoPlanet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "pl_name")
    private String name;

    private String hostname;

    private Integer sy_pnum;

    private String discoverymethod;

    private Integer disc_year;

    private String disc_facility;

    private BigDecimal pl_rade;   // radius (Earth radii)

    private BigDecimal pl_bmassj; // mass (Jupiter masses)

    private BigDecimal pl_eqt;    // equilibrium temperature

    private String st_spectype;

    private BigDecimal st_teff;

    private BigDecimal st_rad;

    private BigDecimal st_mass;

    private BigDecimal sy_dist;

    private LocalDateTime rowupdate;

    private LocalDateTime releasedate;

    // --- getters and setters ---
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getHostname() { return hostname; }
    public void setHostname(String hostname) { this.hostname = hostname; }

    public Integer getSy_pnum() { return sy_pnum; }
    public void setSy_pnum(Integer sy_pnum) { this.sy_pnum = sy_pnum; }

    public String getDiscoverymethod() { return discoverymethod; }
    public void setDiscoverymethod(String discoverymethod) { this.discoverymethod = discoverymethod; }

    public Integer getDisc_year() { return disc_year; }
    public void setDisc_year(Integer disc_year) { this.disc_year = disc_year; }

    public String getDisc_facility() { return disc_facility; }
    public void setDisc_facility(String disc_facility) { this.disc_facility = disc_facility; }

    public BigDecimal getPl_rade() { return pl_rade; }
    public void setPl_rade(BigDecimal pl_rade) { this.pl_rade = pl_rade; }

    public BigDecimal getPl_bmassj() { return pl_bmassj; }
    public void setPl_bmassj(BigDecimal pl_bmassj) { this.pl_bmassj = pl_bmassj; }

    public BigDecimal getPl_eqt() { return pl_eqt; }
    public void setPl_eqt(BigDecimal pl_eqt) { this.pl_eqt = pl_eqt; }

    public String getSt_spectype() { return st_spectype; }
    public void setSt_spectype(String st_spectype) { this.st_spectype = st_spectype; }

    public BigDecimal getSt_teff() { return st_teff; }
    public void setSt_teff(BigDecimal st_teff) { this.st_teff = st_teff; }

    public BigDecimal getSt_rad() { return st_rad; }
    public void setSt_rad(BigDecimal st_rad) { this.st_rad = st_rad; }

    public BigDecimal getSt_mass() { return st_mass; }
    public void setSt_mass(BigDecimal st_mass) { this.st_mass = st_mass; }

    public BigDecimal getSy_dist() { return sy_dist; }
    public void setSy_dist(BigDecimal sy_dist) { this.sy_dist = sy_dist; }

    public LocalDateTime getRowupdate() { return rowupdate; }
    public void setRowupdate(LocalDateTime rowupdate) { this.rowupdate = rowupdate; }

    public LocalDateTime getReleasedate() { return releasedate; }
    public void setReleasedate(LocalDateTime releasedate) { this.releasedate = releasedate; }
}

