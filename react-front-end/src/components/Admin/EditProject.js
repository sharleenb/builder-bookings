import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function EditProject() {
  const [data, setData] = useState([]);
  const [updatedData, setUpdatedData] = useState({});
  const { id } = useParams();
  const [photos, setPhotos] = useState([]);
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
        setUpdatedData({
          ...updatedData,
          ["thumbnail"]: res.data.uploadedFile,
        });
      })
      .catch((error) => {
        console.log("error uploading thumbnail", error);
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
          setUpdatedData({ ...updatedData, ["photos"]: uploadedPhotos });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  useEffect(() => {
    axios.get(`/api/edit-project/${id}`).then((result) => {
      setData(result.data[0]);
      setThumbnailUrl(result.data[0].thumbnail);
      setPhotos(result.data[0].photos);
    });
  }, [id]);

  const handleInputChange = (key, value) => {
    setUpdatedData({ ...updatedData, [key]: value });
  };

  const navigate = useNavigate();

  const handleSaveChanges = () => {
    axios
      .put(`/api/edit-project/${id}`, updatedData)
      .then((response) => {
        navigate("/edit-projects");
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`/api/delete-project/${id}`).then((result) => {
      navigate("/edit-projects");
    });
  };

  return (
    <div class="page-layout">
      <h1>Project Details</h1>
      <div className="edit-form2">
        {data ? (
          <div className="edit-form">
            {Object.entries(data).map(([key, value]) => {
              let inputElement;
              if (key === "status") {
                inputElement = (
                  <select
                    className="form-input"
                    name="status"
                    id="status"
                    value={updatedData[key] || value}
                    onChange={(e) => handleInputChange(key, e.target.value)}
                  >
                    <option value={""}>Select Status</option>
                    <option value={"SOLD OUT"}>SOLD OUT</option>
                    <option value={"NOW SELLING"}>NOW SELLING</option>
                    <option value={"COMING SOON"}>COMING SOON</option>
                  </select>
                );
              } else if (key === "project_type") {
                inputElement = (
                  <select
                    className="form-input"
                    name="project_type"
                    id="project_type"
                    value={updatedData[key] || value}
                    onChange={(e) => handleInputChange(key, e.target.value)}
                  >
                    <option value={""}>Select Type</option>
                    <option value={"Homes"}>Homes</option>
                    <option value={"Condos"}>Condos</option>
                  </select>
                );
              } else if (key === "about_builder" || key === "amenities") {
                inputElement = (
                  <textarea
                    className="form-input"
                    name={key}
                    id={key}
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
              } else if (key === "photos") {
                inputElement = (
                  <div>
                    <div>
                      <input
                        className="form-input"
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
                          alt={`Photo ${index}`}
                        />
                      ))}
                    </div>
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
                    value={updatedData[key] || value}
                    disabled
                    className="form-input"
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
              <button type="reset" onClick={() => navigate("/edit-projects")}>
                Cancel
              </button>
              <button key={data.id} onClick={() => handleDelete(data.id)}>
                Delete Project
              </button>
            </div>
          </div>
        ) : (
          <div>
            <p>Project has been deleted.</p>
            <button onClick={() => navigate("/edit-projects")}>
              Back to Projects
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// select image and see preview

// once uploaded, post to database
