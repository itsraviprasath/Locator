import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <header class="header">
        <Link to="/" class="logo">
          Logo
        </Link>

        <input type="checkbox" id="check" />
        <label for="check" class="icons">
          <Link class="bx bx-menu" id="menu-icon"></Link>
          <Link class="bx bx-x" id="close-icon"></Link>
        </label>

        <nav class="navbar">
          <Link to="/" class="nav-item">
            Home
          </Link>
          <Link to="#" class="nav-item">
            Order
          </Link>
          <Link to="#" class="nav-item">
            Track
          </Link>
          <Link to="/profile" class="nav-item">
            Profile
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
