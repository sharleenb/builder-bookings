import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddMember() {
  const navigate = useNavigate();
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailUrl, setThumbnailUrl] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    member_type: "",
    designation: "",
    phone: "",
    email: "",
    languages: "",
    thumbnail: "",
    about: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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
        setFormData({...formData, "thumbnail": res.data.uploadedFile})
      })
      .catch((error) => {
        console.log("error uploading thumbnail", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/add-member", formData)
      .then((response) => {
        navigate("/edit-members");
      })
      .catch((error) => {
        console.log(formData);
        console.error("Error adding member:", error);
      });
  };

  return (
    <div className="page-layout">
      <h1>Add a Member</h1>
      <form onSubmit={handleSubmit} className="add-form">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="member_type">Member Type</label>
          <select
            name="member_type"
            id="member_type"
            value={formData.member_type}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>
              Please select
            </option>
            <option value={"Real Estate Agent"}>Real Estate Agent</option>
            <option value={"Lawyers"}>Lawyers</option>
            <option value={"Mortgage Specialist"}>Mortgage Specialist</option>
          </select>
        </div>
        <div>
          <label htmlFor="designation">Designation</label>
          <input
            type="text"
            name="designation"
            id="designation"
            value={formData.designation}
            onChange={handleInputChange}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="languages">Languages</label>
          <input
            name="languages"
            id="languages"
            value={formData.languages}
            onChange={handleInputChange}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="thumbnail">Photo Url</label>
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
          <label htmlFor="about">About Yourself</label>
          <textarea
            type="text"
            name="about"
            id="about"
            value={formData.about}
            onChange={handleInputChange}
            required
            rows={8}
          ></textarea>
        </div>
        <div className="form-buttons">
          <button type="submit">Add Member</button>
          <button type="reset" onClick={() => navigate("/edit-members")}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
