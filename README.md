# Exoplanet Comparator

A full-stack application designed to explore, filter, and compare exoplanet data against Earth. This project ingests planetary data and provides a queryable interface to analyze planetary habitability metrics like radius, mass, and equilibrium temperature.

## Features

- **Browsable Data Grid:** View comprehensive exoplanet data including radius, mass, distance, and stellar properties.
- **Dynamic Filtering:** Filter planets by minimum radius, minimum mass, name, or data completeness using dynamic JPA specifications.
- **Comparison Tool:** Interactive comparison modal that normalizes exoplanet stats against Earth's constants (Radius: 1.0 R⊕, Temp: 255 K).
- **Responsive UI:** Features a sticky navigation bar and animated background elements.

## Tech Stack

**Frontend**
- React (TypeScript)
- React Router DOM
- CSS Modules

**Backend**
- Java (Spring Boot)
- Spring Data JPA
- PostgreSQL

## API Reference

The backend exposes a RESTful API with advanced filtering capabilities.

### `GET /api/planets`

Query Parameters:
- `page`: Page number (0-indexed).
- `size`: Number of items per page.
- `minRadius`: Filter by minimum planetary radius (Earth radii).
- `minMass`: Filter by minimum planetary mass (Jupiter masses).
- `name`: Case-insensitive fuzzy search by planet name.
- `filledOnly`: Boolean flag to exclude rows with missing critical data points.

## Getting Started

### Prerequisites
- Node.js & npm
- JDK 17+
- PostgreSQL

### Installation

1. **Clone the repository**
   ```bash
   git clone [https://github.com/yourusername/exoplanet-comparator.git](https://github.com/yourusername/exoplanet-comparator.git)
