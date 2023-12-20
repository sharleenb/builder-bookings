import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Homes() {

  const [homes, setHomes] = useState([]);
  const [builders, setBuilders] = useState([]);
  const [cities, setCities] = useState([]);
  const [filters, setFilters] = useState({
    city: '', 
    status: '', 
    builder: ''
  });

  useEffect(() => {
    axios.get('/api/homes')
    .then((result) => {
      const res = result.data.filter((element) => 
      (((filters.city === '') || element.city === filters.city) && 
      ((filters.status === '') || element.status === filters.status) && 
      ((filters.builder === '') || element.builder === filters.builder)))
      setHomes(res)
    })
  }, [filters]);

  useEffect(() => {
    axios.get('/api/home/builders')
    .then((result) => {
      setBuilders(result.data.map((element) => element.builder))
    })
  }, [filters])

  useEffect(() => {
    axios.get('/api/home/locations')
    .then((result) => {
      setCities(result.data.map((element) => element.city))
    })
  })

  const handleFilterChange = (filterName, value) => {
    setFilters({...filters, [filterName]: value})
  }

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/project/${id}`);
  };

  return (
    <div class="page-layout">
      <h2 class="project-title">Homes</h2>
     
      <div class='filter-div'>

      <select name="city" onChange={(e) => handleFilterChange('city', e.target.value)}>
      <option value="">Location</option>
        {cities.map((city) => 
        <option value={city}>{city}</option>)}
     </select>


      <select name="status" onChange={(e) => handleFilterChange('status', e.target.value)}>
      <option value="">Status</option>
        <option value="SOLD OUT">SOLD OUT</option>
        <option value="NOW SELLING">NOW SELLING</option>
     </select>


      <select name="builder" onChange={(e) => handleFilterChange('builder', e.target.value)}>
      <option value="">Builder</option>
        {builders.map((builder) => 
        <option value={builder}>{builder}</option>)}
     </select>

      
    </div>

      <h4>Featured Properties</h4>
      <div class="projects">
        {homes.map((project) => (
          <div class="project-wrapper" onClick={() => handleClick(project.id)}>
            <img class="thumbnail-image" src={project.thumbnail} />
            <div class="overlay">
              <div>{project.project_name}</div>
              <div>{project.status}</div>
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
