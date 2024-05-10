import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [socials, setSocials] = useState([]);
  const [updatedSocial, setUpdatedSocial] = useState([{}]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/api/socials").then((result) => {
      setSocials(result.data);
    });
  });

  const handleSave = (newData) => {
    axios.put("/api/edit-socials", newData).then((result) => {
      console.log(result);
    })
  }

  const handleInputChange = (socialID, key, value) => {
    setUpdatedSocial({
      ...updatedSocial,
      [socialID]: { ...updatedSocial[socialID], [key]: value },
    });
    console.log(updatedSocial);
  };

  const handleBack = () => {
    navigate("/dashboard")
  }

  return (
    <div className="page-layout">
      <h1>Profile</h1>
      <button onClick={handleBack}>Back to Dashboard</button>
      <h3>Social Links</h3>
      <table>
        <tr>
          <th>Social Media</th>
          <th>Link</th>
          <th>Status</th>
        </tr>
        {socials.map((social, index) => (
        <tr key={index}>
          <td>{social.name}</td>
          <td><input
          className="link-input"
            value={updatedSocial[social.id] ? updatedSocial[social.id].link_url : social.link_url}
            onChange={(e) =>
              handleInputChange(`${social.id}`, "link_url", e.target.value)
            }
          ></input>
          </td>
          <td>
          <select
            value={updatedSocial[social.id] ? updatedSocial[social.id].active : social.active}
            onChange={(e) =>
              handleInputChange(`${social.id}`, "active", e.target.value)
            }
          >
            <option value={""} disabled>
              Select option
            </option>
            <option value={true}>Active</option>
            <option value={false}>Not Active</option>
          </select>
          </td>
        </tr>
      ))}
      </table>
      <button type='submit' onClick={() => handleSave(updatedSocial)}>Save Changes</button>
    </div>
  );
}
