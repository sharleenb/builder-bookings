import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ViewBlogs() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/api/blogs").then((result) => {
      setBlogs(result.data);
    });
  });

  const handleEdit = (id) => {
    navigate(`/edit-blog/${id}`);
  };

  const handleDelete = (id) => {
    axios.delete(`/api/delete-blog/${id}`).then((result) => {
      alert("Blog has been deleted");
    });
  };

  const handleBack = () => {
    navigate("/dashboard")
  }


  return (
    <div className="page-layout">
      <h1>Blogs</h1>
      <button onClick={handleBack}>Back to Dashboard</button>
      <button onClick={() => navigate("/add-blog")}>Add Blog</button>

      <table>
        <tr>
          <th>Blog Title</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        {blogs.map((blog, index) => (
          <tr key={index}>
            <td>{blog.title}</td>
            <td>
              <button onClick={() => handleEdit(blog.id)}>Edit </button>
            </td>
            <td>
              <button key={blog.id} onClick={() => handleDelete(blog.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
