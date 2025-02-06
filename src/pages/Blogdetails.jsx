// Blog.js
import React from "react";
import "./css/Blogdetails.css";
import "bootstrap/dist/css/bootstrap.min.css";
import blogimage from "../assets/Prime.png";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogData = {
    title: "Programming-Intuitively, Methodically, Enjoyably",
    date: "Blogs • 16 March 2023",
    imageSrc: blogimage,
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
  };

  return (
    <main className="py-5 mt-5">
      <div className="container text-center">
        <h1 className="blog-title">{blogData.title}</h1>
        <div className="liness">
          <p className="blog-date">{blogData.date}</p>
          <div className="buttons">
            <Link to="/Contactus" className="Contact-us-btn"> Contact us </Link>
            <Link to="/Contactus" className="Join-us-btn"> Join us </Link>
          </div>
        </div>
        <img src={blogData.imageSrc} alt="Blog Visual" className="blog-image mx-auto" />
        <div className="mt-4">
          {blogData.content.map((paragraph, index) => (
            <p key={index} className="blog-content">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Blog;