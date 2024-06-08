import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Editor from "../Editor";

export default function EditBlogs() {
  const [blog, setBlog] = useState([]);
  const [updatedData, setUpdatedData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`/api/edit-blog/${id}`).then((result) => {
      setBlog(result.data[0]);
    });
  }, [id]);

  const handleInputChange = (key, value) => {
    setUpdatedData({ ...updatedData, [key]: value });
  };

  const handleContentChange = (value) => {
    setUpdatedData((prevData) => ({ ...prevData, content: value }));
  };

  const navigate = useNavigate();

  const handleSaveChanges = () => {
    axios
      .put(`/api/edit-blog/${id}`, updatedData)
      .then((response) => {
        navigate("/edit-blogs");
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`/api/delete-blog/${id}`).then((result) => {
      navigate("/edit-blogs");
    });
  };
  return (
    <div class="page-layout">
      <h1>Edit Blog</h1>
      <div className="edit-form">
        {Object.entries(blog).map(([key, value]) => {
          let inputElement;
          if (key === "content") {
            inputElement = (
              <div>
                <Editor
                  name="content"
                  value={updatedData[key] || value}
                  onChange={handleContentChange}
                  required
                />
              </div>
            );
          } else {
            inputElement = (
              <input
                className="form-input"
                value={updatedData[key] || value}
                onChange={(e) => handleInputChange(key, e.target.value)}
              ></input>
            );
          }
          return (
            <div className="row">
              <label>{key}</label>
              {inputElement}
            </div>
          );
        })}
        <div className="form-buttons">
          <button type="submit" onClick={handleSaveChanges}>
            Save Changes
          </button>
          <button type="reset" onClick={() => navigate("/edit-blogs")}>
            Cancel
          </button>
          <button key={blog.id} onClick={() => handleDelete(blog.id)}>
            Delete Blog
          </button>
        </div>
      </div>
    </div>
  );
}
