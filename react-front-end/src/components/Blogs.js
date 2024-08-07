import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/blog/${id}`);
  };

  useEffect(() => {
    axios.get("/api/blogs").then((result) => {
      setBlogs(result.data);
    });
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
  
    // Format the date parts
    const month = date.toLocaleString('en-US', { month: 'long' });
    const day = date.getDate();
    const year = date.getFullYear();
  
    // Add suffix to the day
    const suffix = getDaySuffix(day);
  
    return `${month} ${day}${suffix}, ${year}`;
  };
  
  // Function to get the suffix for the day (e.g., "st", "nd", "rd", "th")
  const getDaySuffix = (day) => {
    if (day >= 11 && day <= 13) {
      return 'th';
    }
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };

  return (
    <div className="page-layout">
      <h1 class="page-title">Blogs</h1>
      <div className="blogs">
      {blogs.map((blog, index) => (
        <div key={index} className="blog-wrapper" onClick={() => handleClick(blog.id)}>
          <img src={`/uploads/${blog.blog_thumbnail}`} alt="blog_thumbnail"></img>
          <div class="blog-display">
           <h3 onClick={() => handleClick(blog.id)}>{blog.title}</h3>
           <h5>{blog.category}</h5>
           <h5>{formatDate(blog.date_created)}</h5>
           </div>
        </div>
       
      ))}
      </div>
    </div>
  );
}
