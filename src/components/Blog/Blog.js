import React, { useState, useEffect } from "react";
import "./Blog.css";
import pandas from "../../images/python_pandas.png";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogData, setBlogData] = useState([{}]);

  useEffect(() => {
    fetch("/blog")
      .then((response) => response.json())
      .then((data) => setBlogData(data));
  }, []);
  return (
    <div id="entries" className="blog-container">
      <h1 className="blog-h1">Engineering</h1>

      <div className="blog-wrapper">
        <img
          className="blog-img"
          src={pandas}
          alt="python pandas install on vscode"
        />
        {typeof blogData.blogTitles === "undefined" ? (
          <p>Loading...</p>
        ) : (
          blogData.blogTitles.map((blogTitle, key) => (
            <Link to={"/entries"} className="blog-title" key={key}>
              {blogTitle}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Blog;
