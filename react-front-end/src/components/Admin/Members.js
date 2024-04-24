import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Members() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/members").then((result) => {
      setData(result.data);
    });
  }, [data]);

  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/edit-member/${id}`);
  };

  const handleDelete = (id) => {
    axios.delete(`/api/delete-member/${id}`).then((result) => {
      alert("Member has been deleted");
    });
  };


  return (
    <div className="page-layout">
      <h1>Team Members</h1>
      <button onClick={() => navigate("/add-member")}>Add Member</button>

      <table>
        <tr>
          <th>Member Name</th>
          <th>Member Type</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        {data.map((member, index) => (
          <tr key={index}>
            <td>{member.name}</td>
            <td>{member.member_type}</td>
            <td>
              <button onClick={() => handleEdit(member.id)}>Edit </button>
            </td>
            <td>
              <button key={member.id} onClick={() => handleDelete(member.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
