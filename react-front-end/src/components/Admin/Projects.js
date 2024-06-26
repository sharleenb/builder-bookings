import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/projects").then((result) => {
      setData(result.data);
    });
  }, [data]);

  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/edit-project/${id}`);
  };

  const handleDelete = (id) => {
    axios.delete(`/api/delete-project/${id}`).then((result) => {
      alert("Project has been deleted");
    });
  };

  const handleBack = () => {
    navigate("/dashboard")
  }

  return (
    <div className="page-layout">
      <h1>Projects</h1>
      <button onClick={handleBack}>Back to Dashboard</button>
      <button onClick={() => navigate("/add-project")}>Add Project</button>
      <table>
        <tbody>
        <tr>
          <th>Project Name</th>
          <th>Project Type</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        {data.map((project, index) => (
          <tr key={index}>
            <td>{project.project_name}</td>
            <td>{project.project_type}</td>
            <td>
              <button onClick={() => handleEdit(project.id)}>Edit </button>
            </td>
            <td>
              <button key={project.id} onClick={() => handleDelete(project.id)}>Delete</button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}
