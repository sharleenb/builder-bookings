import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom'

export default function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    axios.get("/api/blogs").then((result) => {
      const correctBlog = result.data.find((blog) => blog.id === Number(id));
      setBlog(correctBlog);
    });
  });

  const createMarkup = (htmlContent) => {
    return { __html: htmlContent };
  };

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
      <img src={`/uploads/${blog.blog_thumbnail}`} alt="blog_thumbnail" className="home-image"></img>
      <h1 class="page-title">{blog.title}</h1>
      <h3 class="page-title">{blog.category}</h3>
      <h5 class="page-title">{formatDate(blog.date_created)}</h5>

      <div>
        <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>
      </div>
    </div>
  );
}
