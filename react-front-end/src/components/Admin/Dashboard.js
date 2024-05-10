import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function Dashboard({ isLoggedIn, onLoginStatusChange }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogout = () => {
    onLoginStatusChange(false);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/login", formData)
      .then((response) => {
        onLoginStatusChange(true);
        setFormData({ email: "", password: "" });
      })
      .catch((error) => {
        console.error("Error logging in", error);
      });
  };


  return (
    <div className="page-layout">
      {isLoggedIn ?
      <div>
      <h1>Dashboard Page</h1>
      <button onClick={handleLogout}>Log Out</button>
      <div className="dashboard-divs">
        <div className="dashboard-div">
          <Link to="/edit-projects">Projects</Link>
        </div>
        <div className="dashboard-div">
          <Link to="/edit-members">Team Members</Link>
        </div>
        <div className="dashboard-div">
          <Link to="/edit-blogs">Blogs</Link>
        </div>
        <div className="dashboard-div">
          <Link to="/edit-profile">Profile</Link>
        </div>
        </div>
      </div>  
       : (<div>
      <h1>Admin Login</h1>
      <form onSubmit={handleSubmit}>
        <label> Email </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        ></input>
        <label> Password </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        ></input>
        <button type="submit">Log In</button>
      </form>
        </div>)
      }
      </div>
  );
}
