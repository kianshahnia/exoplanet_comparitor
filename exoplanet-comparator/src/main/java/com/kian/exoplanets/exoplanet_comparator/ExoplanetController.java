package com.kian.exoplanets.exoplanet_comparator;

import com.kian.exoplanets.exoplanet_comparator.model.ExoPlanet;
import com.kian.exoplanets.exoplanet_comparator.repo.ExoplanetRepo;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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
    public List<ExoPlanet> getAllPlanets(@PageableDefault(size = 10) Pageable pageable) {
        return repo.findAll();  
    }
}
