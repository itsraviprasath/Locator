import React from "react";
import "../assests/Data.css";
import { Link } from "react-router-dom";

const Data = (props) => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };
  return (
    <>
      <div id="profile-container">
        <p className="profile-items">Name: {props?.name}</p>
        <p className="profile-items">Email: {props?.email}</p>
        <p className="profile-items">Phone: {props?.phone}</p>
        <p className="profile-items">Address: {props?.address}</p>
        <Link to="/login">
          <button className="logout" onClick={handleLogout}>Logout</button>
        </Link>
      </div>
    </>
  );
};

export default Data;
