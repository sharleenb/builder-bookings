import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ProjectDetails() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    axios.get("/api/projects").then((result) => {
      const correctProject = result.data.find(
        (project) => project.id === Number(id)
      );
      setData(correctProject);
    });
  });

  const photoList = data.photos || [];
  const totalPhotos = photoList.length;

  const nextSlide = () => {
    setSlide(slide === photoList.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? photoList.length - 1 : slide - 1);
  };

  return (
    <div class="page-layout">
      <h1>{data.project_name}</h1>
      <h3>Builder</h3>
      <div>{data.builder}</div>
      <div>{data.about_builder}</div>

      {photoList[0] ? (
        <div className="photo-count">
          <div className="photo-container">
          <div
            id="arrow"
            class="fa fa-long-arrow-left"
            aria-hidden="true"
            onClick={prevSlide}
          ></div>
          <div>
          {photoList.map((photo, index) => (
            <img
              key={index}
              src={`/uploads/${photo}`}
              alt={`Slide ${index + 1}`}
              class={slide === index ? "slide" : "slide slide-hidden"}
            ></img>
          ))}
          </div>
          <div
            id="arrow"
            class="fa fa-long-arrow-right"
            aria-hidden="true"
            onClick={nextSlide}
          ></div>
        </div>
        <div className="slide-counter">{`${slide + 1} / ${totalPhotos}`}</div>
        </div>
      ) : (
        ""
      )}

      <h3>Project Details</h3>
      <div class="details-photos">
        <ul>
          <li><strong>Project Type:</strong> {data.project_type}</li>
          <li><strong>Status:</strong> {data.status}</li>
          <li><strong>Occupancy:</strong> {data.occupancy}</li>
          <li><strong>Number of Buildings:</strong> {data.num_buildings}</li>
          <li><strong>Number of Stores:</strong> {data.num_storeys}</li>
          <li><strong>Parking:</strong> {data.parking}</li>
          <li><strong>Maintenance Fees:</strong> {data.maintenance_fees}</li>
          <li><strong>Amenities:</strong> {data.amenities}</li>
        </ul>
      </div>
      <h3><strong>Location</strong></h3>
      <div class="location">
        <div class="address">
          <h5><strong>Address</strong></h5>
          {data.address}
          <br></br>
          {data.city}, {data.province}
        </div>
        {data.map_url ? (
          <div class="property-map">
            <iframe src={data.map_url} title="location"></iframe>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
