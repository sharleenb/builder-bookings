import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Homes() {
  const [homes, setHomes] = useState([]);
  const [builders, setBuilders] = useState([]);
  const [cities, setCities] = useState([]);
  const [filters, setFilters] = useState({
    city: "",
    status: "",
    builder: "",
  });

  useEffect(() => {
    axios.get("/api/homes").then((result) => {
      const res = result.data.filter(
        (element) =>
          (filters.city === "" || element.city === filters.city) &&
          (filters.status === "" || element.status === filters.status) &&
          (filters.builder === "" || element.builder === filters.builder)
      );
      setHomes(res);
    });
  }, [filters]);

  useEffect(() => {
    axios.get("/api/home/builders").then((result) => {
      setBuilders(result.data.map((element) => element.builder));
    });
  }, [filters]);

  useEffect(() => {
    axios.get("/api/home/locations").then((result) => {
      setCities(result.data.map((element) => element.city));
    });
  }, []);

  const handleFilterChange = (filterName, value) => {
    setFilters({ ...filters, [filterName]: value });
  };

  const reset = () => {
    setFilters({
      city: "",
      status: "",
      builder: "",
    });
  };

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/project/${id}`);
  };

  return (
    <div class="page-layout">
      <h1 class="page-title">Homes</h1>
      <h4 class="filter-heading">Filter By</h4>
      <div class="filter-div">
        <select
          name="city"
          onChange={(e) => handleFilterChange("city", e.target.value)}
          value={filters.city}
        >
          <option value="">Location</option>
          {cities.map((city) => (
            <option value={city}>{city}</option>
          ))}
        </select>

        <select
          name="status"
          onChange={(e) => handleFilterChange("status", e.target.value)}
          value={filters.status}
        >
          <option value="">Status</option>
          <option value="SOLD OUT">SOLD OUT</option>
          <option value="NOW SELLING">NOW SELLING</option>
        </select>

        <select
          name="builder"
          onChange={(e) => handleFilterChange("builder", e.target.value)}
          value={filters.builder}
        >
          <option value="">Builder</option>
          {builders.map((builder) => (
            <option value={builder}>{builder}</option>
          ))}
        </select>

        <button class="reset" onClick={reset}>
          Reset
        </button>
      </div>

      <h3 class="featured-heading">Featured Properties</h3>
      <div class="projects">
        {homes.map((project) => (
          <div class="project-wrapper" onClick={() => handleClick(project.id)}>
            <img
              class="thumbnail-image"
              src={`/uploads/${project.thumbnail}`}
              alt="thumbnail"
            />
            <div class="overlay">
              <h4>{project.project_name}</h4>
              <div className="status">{project.status}</div>
              <div>{project.price}</div>
              <div>
                {project.address} {project.city}, {project.province}
              </div>
            </div>
            <figcaption class="project-caption">
              <div class="project-name">{project.project_name}</div>
              <div>
                {project.city}, {project.province}
              </div>
            </figcaption>
          </div>
        ))}
      </div>
    </div>
  );
}
