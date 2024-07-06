import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddProject() {
  const navigate = useNavigate();
  const [photos, setPhotos] = useState([]);
  const [thumbnail, setThumbnail] = useState();
  const [thumbnailUrl, setThumbnailUrl] = useState(null);
  const [formValues, setFormValues] = useState({
    project_name: "",
    city: "",
    province: "",
    address: "",
    price: "",
    status: "",
    builder: "",
    about_builder: "",
    project_type: "",
    occupancy: "",
    num_buildings: "",
    num_storeys: "",
    parking: "",
    maintenance_fees: "",
    amenities: "",
    thumbnail: "",
    photos: [""],
    map_url: "",
  });

  const getThumbnailFile = (e) => {
    const file = e.target.files[0];
    setThumbnail(file);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    const photoData = new FormData();
    photoData.append("thumbnail", thumbnail);
    axios
      .post("/api/upload", photoData)
      .then((res) => {
        setThumbnailUrl(res.data.uploadedFile);
        setFormValues({ ...formValues, "thumbnail": res.data.uploadedFile });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePhotosUpload = (e) => {
    const files = Array.from(e.target.files);
    const uploadedPhotos = [];

    files.forEach((file) => {
      const photoData = new FormData();
      photoData.append("thumbnail", file);

      axios
        .post("/api/upload", photoData)
        .then((res) => {
          uploadedPhotos.push(res.data.uploadedFile); // Store the uploaded photo URL
          setPhotos(uploadedPhotos); // Update state with the new array of photo URLs
          setFormValues({ ...formValues, "photos": uploadedPhotos });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/add-project", formValues)
      .then((response) => {
        navigate("/edit-projects");
      })
      .catch((error) => {
        console.error("Error adding member:", error);
      });
  };

  return (
    <div className="page-layout">
      <h1>Add a Project</h1>
      <form onSubmit={handleSubmit} className="add-form">
        <div>
          <label htmlFor="project_name">Project Name</label>
          <input
            type="text"
            name="project_name"
            id="project_name"
            value={formValues.project_name}
            onChange={handleInputChange}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            id="city"
            value={formValues.city}
            onChange={handleInputChange}
            // required
          ></input>
        </div>
        <div>
          <label htmlFor="province">Province</label>
          <input
            type="text"
            name="province"
            id="province"
            value={formValues.province}
            onChange={handleInputChange}
            // required
          ></input>
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            value={formValues.address}
            onChange={handleInputChange}
            // required
          ></input>
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="text"
            name="price"
            id="price"
            value={formValues.price}
            onChange={handleInputChange}
            // required
          ></input>
        </div>
        <div>
          <label htmlFor="status">Status</label>
          <select
            name="status"
            id="status"
            value={formValues.status}
            onChange={handleInputChange}
            // required
          >
            <option value="" disabled selected>
              Select status
            </option>
            <option value={"SOLD OUT"}>SOLD OUT</option>
            <option value={"NOW SELLING"}>NOW SELLING</option>
            <option value={"COMING SOON"}>COMING SOON</option>
          </select>
        </div>
        <div>
          <label htmlFor="builder">Builder</label>
          <input
            type="text"
            name="builder"
            id="builder"
            value={formValues.builder}
            onChange={handleInputChange}
            // required
          ></input>
        </div>
        <div>
          <label htmlFor="about_builder">About Builder</label>
          <textarea
            type="text"
            name="about_builder"
            id="about_builder"
            value={formValues.about_builder}
            onChange={handleInputChange}
            cols={36}
            rows={10}
            // required
          ></textarea>
        </div>
        <div>
          <label htmlFor="project_type">Project Type</label>
          <select
            name="project_type"
            id="project_type"
            value={formValues.project_type}
            onChange={handleInputChange}
            // required
          >
            <option value="" disabled selected>
              Select project type
            </option>
            <option value={"Homes"}>Homes</option>
            <option value={"Condos"}>Condos</option>
          </select>
        </div>
        <div>
          <label htmlFor="occupancy">Occupancy</label>
          <input
            type="text"
            name="occupancy"
            id="occupancy"
            value={formValues.occupancy}
            onChange={handleInputChange}
            // required
          ></input>
        </div>
        <div>
          <label htmlFor="num_buildings">Number of Buildings</label>
          <input
            type="text"
            name="num_buildings"
            id="num_buildings"
            value={formValues.num_buildings}
            onChange={handleInputChange}
          ></input>
        </div>
        <div>
          <label htmlFor="num_storeys">Number of Storeys</label>
          <input
            type="text"
            name="num_storeys"
            id="num_storeys"
            value={formValues.num_storeys}
            onChange={handleInputChange}
          ></input>
        </div>
        <div>
          <label htmlFor="parking">Parking</label>
          <input
            type="text"
            name="parking"
            id="parking"
            value={formValues.parking}
            onChange={handleInputChange}
          ></input>
        </div>
        <div>
          <label htmlFor="maintenance_fees">Maintenance Fees</label>
          <input
            type="text"
            name="maintenance_fees"
            id="maintenance_fees"
            value={formValues.maintenance_fees}
            onChange={handleInputChange}
          ></input>
        </div>
        <div>
          <label htmlFor="amenities">Amenities</label>
          <textarea
            type="text"
            name="amenities"
            id="amenities"
            value={formValues.amenities}
            onChange={handleInputChange}
            cols={36}
            rows={10}
          ></textarea>
        </div>
        <div>
          <label htmlFor="thumbnail">Thumbnail Photo</label>
          <input
            type="file"
            name="thumbnail"
            accept="image/*"
            onChange={getThumbnailFile}
            required
          />
          <button onClick={handleUpload}>Upload</button>
          <img
            src={`/uploads/${thumbnailUrl}`}
            alt={thumbnail}
            className="thumbnail-preview"
          />
        </div>
        <div>
          <label htmlFor="photos">Photo</label>
          <input
            type="file"
            name="photos"
            accept="image/*"
            onChange={handlePhotosUpload}
            multiple
            required
          />
        </div>
        <div className="photos-view-container">
          {photos.map((photoUrl, index) => (
            <img
              key={index}
              src={`/uploads/${photoUrl}`}
              alt={`${index}`}
            />
          ))}
        </div>
        <div>
          <label htmlFor="map_url">Map Url</label>
          <input
            type="text"
            name="map_url"
            id="map_url"
            value={formValues.map_url}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="form-buttons">
          <button type="submit">Add Project</button>
          <button type="reset" onClick={() => navigate("/edit-projects")}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
