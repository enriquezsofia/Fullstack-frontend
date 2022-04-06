import React from "react";
import { Link } from "react-router-dom";
import "../blog.css";

const NavBar = () => {
  return (
    <div className="blog-post-navbar">
      <div className="blog-post-brand">
        <Link to="/">
          <img
            src="https://itjuana.com/wp-content/themes/itjuana/assets/images/svg-grid/itijuana-logo-color.svg"
            alt=""
            width="100"
            height="50"
          ></img>
        </Link>
      </div>
      <ul>
        <li className="blog-post-navbar">
          <Link to="/join-our-team">Join our team</Link>
        </li>
        <li className="blog-post-navbar">
          <Link to="/contact-us">Contact us</Link>
        </li>
        <Link className="blog-post-navbar" to="/create-post">
          Create New Post
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
