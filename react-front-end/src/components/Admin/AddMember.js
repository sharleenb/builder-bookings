import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddMember() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    member_type: "",
    designation: "",
    phone: "",
    email: "",
    languages: "",
    photo_url: "",
    about: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleUpload = () => {
  //   const formData = new FormData();
  //   formData.append("photo_url", thumbnail);
  //   axios
  //     .post(`/api/upload-memberthumbnail/${id}`, formData)
  //     .then(() => {
  //       axios
  //         .get(`/api/get-memberthumbnail/${id}`)
  //         .then((res) => {
  //           setThumbnailUrl(res.data);
  //         })
  //         .catch((error) => {
  //           console.log("error fetching thumbnail", error);
  //         });
  //     })
  //     .catch((error) => {
  //       console.log("error uploading thumbnail", error);
  //     });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/add-member", formData)
      .then((response) => {
        navigate("/edit-members");
      })
      .catch((error) => {
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
          <label htmlFor="photo_url">Photo Url</label>
          <input
            type="file"
            name="photo_url"
            id="photo_url"
            value={formData.photo_url}
            onChange={handleInputChange}
            rquired
          ></input>
          {/* <button onClick={handleUpload}>Upload</button> */}
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
