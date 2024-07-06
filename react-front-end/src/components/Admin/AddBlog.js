import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Editor from "../Editor";

export default function AddBlog() {
  const navigate = useNavigate();
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailUrl, setThumbnailUrl] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    date_created: "",
    thumbnail: "", 
    category: ""
  });

  const handleEditorChange = (content) => {
    setFormData((prevData) => ({
      ...prevData,
      content
    }));
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/add-blog", formData)
      .then(() => {
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
          <label htmlFor="title">Title</label>
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
          <label htmlFor="content">Content</label>
          <Editor
            name="content"
            id="content"
            value={formData.content}
            onChange={handleEditorChange}
            required
          />
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            value={formData.category}
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
        </div>
        <div>
          <label htmlFor="date_created">Date Created</label>
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


// text in editor is creating error -- look at chatgpt