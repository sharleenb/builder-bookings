import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddBlog() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    date_created: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/add-blog", formData)
      .then((response) => {
        navigate("/edit-blogs");
      })
      .catch((error) => {
        console.error("Error adding blog:", error);
      });
  };

  return (
    <div className="page-layout">
      <h1>Add Blog</h1>
      <form onSubmit={handleSubmit} className="add-form">
        <div>
          <label for="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          ></input>
        </div>
        <div>
          <label for="content">Content</label>
          <textarea
            name="content"
            id="content"
            value={formData.content}
            onChange={handleInputChange}
            required
            rows={20}
          ></textarea>
        </div>
        <div>
          <label for="date_created">Date Created</label>
          <input
            type="date"
            name="date_created"
            id="date_created"
            value={formData.date_created}
            onChange={handleInputChange}
            required
          ></input>
        </div>
        <div className="form-buttons">
        <button type="submit">Add Blog</button>
        <button type="reset" onClick={() => navigate("/edit-blogs")}>
          Cancel
        </button>
        </div>
      </form>
    </div>
  );
}
