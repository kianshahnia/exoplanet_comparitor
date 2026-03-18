package com.kian.exoplanets.exoplanet_comparator.repo;

import com.kian.exoplanets.exoplanet_comparator.model.ExoPlanet;
import org.springframework.data.jpa.domain.Specification;
import java.math.BigDecimal;

public class ExoPlanetSpecs {

    public static Specification<ExoPlanet> hasRadiusGreaterThan(BigDecimal minRadius) {
        return (root, query, cb) -> {
            if (minRadius == null) return null;

            return cb.greaterThanOrEqualTo(root.get("pl_rade"), minRadius);
        };
    }

    public static Specification<ExoPlanet> hasMassGreaterThan(BigDecimal minMass) {
        return (root, query, cb) -> {
            if (minMass == null) return null;
            return cb.greaterThanOrEqualTo(root.get("pl_bmassj"), minMass);
        };
    }

    public static Specification<ExoPlanet> hasName(String name) {
        return (root, query, criteriaBuilder) -> {
            if (name == null) return null;

            return criteriaBuilder.like(
                    criteriaBuilder.lower(root.get("name")), // Optional: .lower() for case-insensitivity
                    "%" + name.toLowerCase() + "%"
            );
        };
    }

    public static Specification<ExoPlanet> onlyFilledRows() {
        return (root, query, cb) -> {
            // Check all relevant fields for null
            return cb.and(
                    cb.isNotNull(root.get("name")),
                    cb.isNotNull(root.get("hostname")),
                    cb.isNotNull(root.get("sy_pnum")),
                    cb.isNotNull(root.get("discoverymethod")),
                    cb.isNotNull(root.get("disc_year")),
                    cb.isNotNull(root.get("disc_facility")),
                    cb.isNotNull(root.get("pl_rade")),
                    cb.isNotNull(root.get("pl_bmassj")),
                    cb.isNotNull(root.get("pl_eqt")),
                    cb.isNotNull(root.get("st_spectype")),
                    cb.isNotNull(root.get("st_teff")),
                    cb.isNotNull(root.get("st_rad")),
                    cb.isNotNull(root.get("st_mass")),
                    cb.isNotNull(root.get("sy_dist")),
                    cb.isNotNull(root.get("rowupdate")),
                    cb.isNotNull(root.get("releasedate"))
            );
        };
    }
}