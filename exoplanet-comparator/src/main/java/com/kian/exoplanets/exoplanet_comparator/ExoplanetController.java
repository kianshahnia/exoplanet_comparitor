package com.kian.exoplanets.exoplanet_comparator;

import com.kian.exoplanets.exoplanet_comparator.model.ExoPlanet;
import com.kian.exoplanets.exoplanet_comparator.repo.ExoPlanetSpecs;
import com.kian.exoplanets.exoplanet_comparator.repo.ExoplanetRepo;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;

@RestController
@RequestMapping("/api/planets")
public class ExoplanetController {

    private final ExoplanetRepo repo;

    public ExoplanetController(ExoplanetRepo repo) {
        this.repo = repo;
    }

    @GetMapping("/count")
    public long count() {
        return repo.count();
    }

    @GetMapping
    public Page<ExoPlanet> getAllPlanets(
            @PageableDefault(size = 10) Pageable pageable,
            @RequestParam(required = false) BigDecimal minRadius,
            @RequestParam(required = false) BigDecimal minMass,
            @RequestParam(required = false) String name,
            @RequestParam(required = false) Boolean filledOnly
    ) {
        Specification<ExoPlanet> spec = Specification.where(null);

        if (minRadius != null) {
            spec = spec.and(ExoPlanetSpecs.hasMassGreaterThan(minRadius));
        }
        if (minMass != null) {
            spec = spec.and(ExoPlanetSpecs.hasRadiusGreaterThan(minRadius));
        }
        if (name != null) {
            spec = spec.and(ExoPlanetSpecs.hasName(name));
        }

        if (Boolean.TRUE.equals(filledOnly)) {
            spec = spec.and(ExoPlanetSpecs.onlyFilledRows());
        }

        return repo.findAll(spec, pageable);
    }
}
