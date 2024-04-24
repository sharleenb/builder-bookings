import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [clicked, setClicked] = useState({});

  useEffect(() => {
    axios.get("/api/blogs").then((result) => {
      setBlogs(result.data);
    });
  });

  const handleClick = (id) => {
    setClicked({ [id]: true });
  };

  return (
    <div className="page-layout">
      <h1>Blogs</h1>
      {blogs.map((blog, index) => (
        <div key={index}>
          <h3 onClick={() => handleClick(blog.id)}>{blog.title}</h3>
          {clicked[blog.id] ? (
            <div>
              <h5>Date Posted: {blog.date_created}</h5>
              <div>{blog.content}</div>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
