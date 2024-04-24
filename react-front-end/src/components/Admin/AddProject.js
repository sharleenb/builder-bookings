import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddProject() {
  const navigate = useNavigate();
  const [photos, setPhotos] = useState([]);
  const [thumbnail, setThumbnail] = useState();
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
    photos: [],
    map_url: "",
  });

  const getFile = (e) => {
    const files = e.target.files;
    const fileNames = [];
    for (let i = 0; i < files.length; i++) {
      fileNames.push(files[i].name);
    }
    setPhotos([...photos, ...fileNames]);
    setFormValues({ ...formValues, photos: [...photos, ...fileNames] });
  };

  const getThumbnailFile = (e) => {
    const file = e.target.files[0];
    setThumbnail(file);
    setFormValues({ ...formValues, thumbnail: file.name });
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("thumbnail", thumbnail);
    axios
      .post("/api/upload-file", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/add-project", formValues).then((res) => {
        navigate("/edit-projects");
      });
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  return (
    <div className="page-layout">
      <h1>Add a Project</h1>
      <form onSubmit={handleSubmit} className="add-form">
        <div>
          <label for="project_name">Project Name</label>
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
          <label for="city">City</label>
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
          <label for="province">Province</label>
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
          <label for="address">Address</label>
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
          <label for="price">Price</label>
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
          <label for="status">Status</label>
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
          <label for="builder">Builder</label>
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
          <label for="about_builder">About Builder</label>
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
          <label for="project_type">Project Type</label>
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
          <label for="occupancy">Occupancy</label>
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
          <label for="num_buildings">Number of Buildings</label>
          <input
            type="text"
            name="num_buildings"
            id="num_buildings"
            value={formValues.num_buildings}
            onChange={handleInputChange}
          ></input>
        </div>
        <div>
          <label for="num_storeys">Number of Storeys</label>
          <input
            type="text"
            name="num_storeys"
            id="num_storeys"
            value={formValues.num_storeys}
            onChange={handleInputChange}
          ></input>
        </div>
        <div>
          <label for="parking">Parking</label>
          <input
            type="text"
            name="parking"
            id="parking"
            value={formValues.parking}
            onChange={handleInputChange}
          ></input>
        </div>
        <div>
          <label for="maintenance_fees">Maintenance Fees</label>
          <input
            type="text"
            name="maintenance_fees"
            id="maintenance_fees"
            value={formValues.maintenance_fees}
            onChange={handleInputChange}
          ></input>
        </div>
        <div>
          <label for="amenities">Amenities</label>
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
          <label for="thumbnail">Thumbnail Photo</label>
          <input
            type="file"
            name="thumbnail"
            accept="image/*"
            onChange={getThumbnailFile}
            required
          />
          <button onClick={handleUpload}>Upload</button>
          {/* <input
            type="text"
            name="thumbnail"
            id="thumbnail"
            value={formValues.thumbnail}
            onChange={handleInputChange}
          ></input>
        </div>
        <div>
          <label for="photos">Photo</label>
          <input
            type="file"
            name="photos"
            accept="image/*"
            onChange={getFile}
            required
          />
          {/* <input
            type="text"
            name="photos"
            id="photos"
            value={formValues.photos}
            onChange={handleInputChange}
          ></input> */}
        </div>
        <div>
          <label for="map_url">Map Url</label>
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
