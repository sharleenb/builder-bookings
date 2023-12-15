import React from "react";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function Homes() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/api/homes')
    .then((result) => {
      setData(result.data);
    })
  }, [])

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/project/${id}`);
  }

  return (
    <div >
    <h2 class="project-title">Homes</h2>
    {/* filter here */}
    <h4>Featured Properties</h4>
    <div class="projects">
      {data.map((project) => (
        <div class="project-wrapper">
            <div class="project-details" ></div>
            <img class="thumbnail-image" src={project.thumbnail} onClick={() => handleClick(project.id)}/>
            <div class="overlay">
            <div>{project.project_name}</div>
              <div>{project.status}</div>
              <div>{project.price}</div>
              <div>{project.address} {project.city}, {project.province}</div>
            </div>
            <div class="project-name" onClick={() => handleClick(project.id)}>{project.project_name}</div>
            <div>{project.city}, {project.province}</div>
            <div>{project.status}</div>
            <div class="price-div">
              <div class="price">Starting Price: {project.price}</div>
            </div>
          </div>
      ))}
    </div>
    </div>
  )
};
