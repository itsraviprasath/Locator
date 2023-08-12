import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <header className="header">
        <Link to="/" className="logo">
          Hugs for Bugs🫂
        </Link>

        <input type="checkbox" id="check" />
        <label htmlFor="check" className="icons">
          <Link className="bx bx-menu" id="menu-icon"></Link>
          <Link className="bx bx-x" id="close-icon"></Link>
        </label>

        <nav className="navbar">
          <Link to="/" className="nav-item">
            Route
          </Link>
          <Link to="/profile" className="nav-item">
            Profile
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
