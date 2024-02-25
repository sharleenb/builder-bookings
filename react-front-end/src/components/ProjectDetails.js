import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'

export default function ProjectDetails() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    axios.get('/api/projects')
    .then((result) => {
      const correctProject = result.data.find((project) => project.id === Number(id));
      setData(correctProject);
    })
  })

  const photoList = data.photos || [];

  const nextSlide = () => {
    setSlide(slide === photoList.length - 1 ? 0 : slide + 1)
  }

  const prevSlide = () => {
    setSlide(slide === 0 ? photoList.length - 1 : slide - 1)
  }
  

  return (
    <div class="page-layout">
    <h1>{data.project_name}</h1>
    <h3>Builder</h3>
    <div>{data.builder}</div>
    <div>{data.about_builder}</div>

    {photoList[0] ?
    <div className="photo-container">
    <div id="arrow" class="fa fa-long-arrow-left" aria-hidden="true" onClick={prevSlide}></div>
      {photoList.map((photo, index) => (
       <img key={index} src={photo} alt={index} class={slide === index ? "slide" : "slide slide-hidden"}></img>
    ))}
    <div id="arrow" class="fa fa-long-arrow-right" aria-hidden="true" onClick={nextSlide}></div>
    </div> : ''}
    
    <h3>Project Details</h3>
    <div class="details-photos">
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

    </div>
    <h3>Location</h3>
    <div class="location">
      <div class="address">
        <h5>Address</h5>
        {data.address}
        <br></br>
        {data.city}, {data.province}
      </div>
      {data.map_url ? <div class="property-map">
        <iframe src={data.map_url} title="location"></iframe>
      </div> : '' }
    </div>
    </div>
  )
};
