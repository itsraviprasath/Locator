import React from "react";
import "./Data.css";

const Data = (props) => {
  return (
    <>
      <div id="profile-container">
        <p className="profile-items">Name: {props?.name}</p>
        <p className="profile-items">Email: {props?.email}</p>
        <p className="profile-items">Phone: {props?.phone}</p>
        <p className="profile-items">Address: {props?.address}</p>
        <button className="logout">Logout</button>
      </div>
    </>
  );
};

export default Data;
