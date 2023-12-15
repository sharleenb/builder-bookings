import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'


export default function ProjectDetails() {

  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get('/api/projects')
    .then((result) => {
      const correctProject = result.data.find((project) => project.id === Number(id));
      setData(correctProject);
    })
  })

  const photoList = data.photos || [];

  return (
    <div>
    <h1>{data.project_name}</h1>
    <div class="project-detail">
    <h3>Builder</h3>
    <div>{data.builder}</div>
    <div>{data.about_builder}</div>
    <h3>Project Details</h3>
    <ul>
      <li>Project Type: {data.project_type}</li>
      <li>Status: {data.status}</li>
      <li>Occupancy: {data.occupancy}</li>
      <li>Number of Buildings: {data.num_buildings}</li>
      <li>Number of Stores: {data.num_storeys}</li>
      <li>Parking: {data.parking}</li>
      <li>Maintenance Fees: {data.maintenance_fees}</li>
      <li>Amenities: {data.amenities}</li>
    </ul>
    <div className="photo-container">
    {photoList.map((photo, index) => (
      <img key={index} src={photo} alt={index}></img>
    ))}
    </div>
    <div></div>
    </div>
    </div>
  )
};
