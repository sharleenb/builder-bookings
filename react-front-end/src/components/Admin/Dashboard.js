import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="page-layout">
      <h1>Dashboard Page</h1>
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
  );
}
