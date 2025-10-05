import React from "react";
import { Link } from "react-router-dom";
import triangle from "./triangle.jpg";
import "./image.css";

const Layout = () => {
  return (
    <header className="navbar">
      {/* The logo image */}
      <div className="logo">
        <img src={triangle} alt="logo" className="logoImg" />
      </div>
{/* All the links */}
      <nav className="navLinks">
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/login">Services</Link>
      </nav>
    </header>
  );
};

export default Layout;
