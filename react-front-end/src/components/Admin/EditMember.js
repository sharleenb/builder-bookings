import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function EditMember() {
  const [data, setData] = useState([]);
  const [updatedData, setUpdatedData] = useState({});
  const { id } = useParams();

  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailUrl, setThumbnailUrl] = useState(null);

  const getThumbnailFile = (e) => {
    const file = e.target.files[0];
    setThumbnail(file);
    e.target.value = null;
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("thumbnail", thumbnail);
    axios
      .post("/api/upload", formData)
      .then((res) => {
        setThumbnailUrl(res.data.uploadedFile);
        setUpdatedData({...updatedData, ["thumbnail"]: res.data.uploadedFile})
      })
      .catch((error) => {
        console.log("error uploading thumbnail", error);
      });
  };

  useEffect(() => {
    axios.get(`/api/edit-member/${id}`).then((result) => {
      setData(result.data[0]);
    });
  }, [id]);

  const handleInputChange = (key, value) => {
    setUpdatedData({ ...updatedData, [key]: value });
  };

  const navigate = useNavigate();

  const handleSaveChanges = () => {
    axios
      .put(`/api/edit-member/${id}`, updatedData)
      .then((response) => {
        navigate('/edit-members')
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`/api/delete-member/${id}`).then((result) => {
      navigate('/edit-members')
    });
  };

  return (
    <div class="page-layout">
      <h1>Member Details</h1>
      <div className="edit-form">
      {Object.entries(data).map(([key, value]) => {
        let inputElement;
        if (key === "member_type") {
          inputElement = (
            <select
            className="form-input"
              name="member_type"
              id="member_type"
              value={updatedData[key] || value}
              onChange={(e) => handleInputChange(key, e.target.value)}
            >
              <option value="" disabled selected>Please select</option>
              <option value={"Real Estate Agent"}>Real Estate Agent</option>
              <option value={"Lawyers"}>Lawyers</option>
              <option value={"Mortgage Specialist"}>Mortgage Specialist</option>
            </select>
          );
        } else if (key === "about") {
          inputElement = (
            <textarea
            className="form-input"
              value={updatedData[key] || value}
              onChange={(e) => handleInputChange(key, e.target.value)}
              rows={10}
            ></textarea>
          );
        } else if (key === "thumbnail") {
          inputElement = (
            <div>
              <div>
                <input
                  className="form-input"
                  type="file"
                  name="thumbnail"
                  accept="image/*"
                  onChange={getThumbnailFile}
                  required
                />
                <button onClick={handleUpload}>Upload</button>
              </div>
              <img
                src={`/uploads/${thumbnailUrl}`}
                alt={thumbnail}
                className="thumbnail-preview"
              />
            </div>
          );
        } else if (key !== "id") {
          inputElement = (
            <input
            className="form-input"
              value={updatedData[key] || value}
              onChange={(e) => handleInputChange(key, e.target.value)}
            ></input>
          );
        } else {
          inputElement = (
            <input 
            className="form-input"
            value={updatedData[key] || value} disabled></input>
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
      <button type="reset" onClick={() => navigate('/edit-members')}>Cancel</button>
      <button key={data.id} onClick={() => handleDelete(data.id)}>Delete Member</button>
      </div>
      </div>
    </div>
  );
}
