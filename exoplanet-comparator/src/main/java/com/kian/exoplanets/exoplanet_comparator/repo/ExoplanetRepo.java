package com.kian.exoplanets.exoplanet_comparator.repo;

import com.kian.exoplanets.exoplanet_comparator.model.ExoPlanet;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ExoplanetRepo extends JpaRepository<ExoPlanet, Long> {
}
