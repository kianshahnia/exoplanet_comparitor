package com.kian.exoplanets.exoplanet_comparator.repo;

import com.kian.exoplanets.exoplanet_comparator.model.ExoPlanet;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

// Add ", JpaSpecificationExecutor<ExoPlanet>" to the end
public interface ExoplanetRepo extends JpaRepository<ExoPlanet, Long>, JpaSpecificationExecutor<ExoPlanet> {

}
