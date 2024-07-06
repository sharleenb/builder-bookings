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
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailUrl, setThumbnailUrl] = useState(null);

  const formatDate = (isoString) => {
    return isoString.split('T')[0];
  };

  useEffect(() => {
    axios.get(`/api/edit-blog/${id}`).then((result) => {
      const blogData = result.data[0]
      if (blogData.date_created) {
        blogData.date_created = formatDate(blogData.date_created);
      }
      setBlog(blogData);
    });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData({ ...updatedData, [name]: value });
  };

  const handleContentChange = (value) => {
    setUpdatedData((prevData) => ({ ...prevData, content: value }));
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
        setUpdatedData({
          ...updatedData,
          "thumbnail": res.data.uploadedFile,
        });
      })
      .catch((error) => {
        console.log("error uploading thumbnail", error);
      });
  };

  const navigate = useNavigate();

  const handleSaveChanges = () => {
    console.log('data', updatedData);
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
          } else if (key === "blog_thumbnail") {
            inputElement = (
              <div>
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
            );
          } else if (key === "category") {
            inputElement = (
              <select
                name="category"
                id="category"
                value={updatedData[key] || value}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled>
                  Please select
                </option>
                <option value={"Homebuying"}>Homebuying</option>
                <option value={"Mortgages"}>Mortgages</option>
                <option value={"Investments"}>Investment</option>
              </select>
            );
          } else if (key === "date_created") {
            inputElement = (
              <input
                type="date"
                name="date_created"
                id="date_created"
                value={updatedData[key] || value}
                onChange={handleInputChange}
                required
              ></input>
            );
          } else if (key === "title") {
            inputElement = (
              <input
                className="form-input"
                name="title"
                value={updatedData[key] || value}
                onChange={handleInputChange}
              ></input>
            );
          } else {
            inputElement = (
              <input
                className="form-input"
                name="id"
                value={updatedData[key] || value}
                onChange={handleInputChange}
                disabled
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
