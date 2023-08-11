import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Data from "../components/Data/Data";

const Profile = () => {
  return (
    <>
      <Navbar />
      <Data
        name="Raviprasath"
        email="raviprasath.in@gmail.com"
        phone="9994895712"
        address="Ambedkar Street, Sriramapuram, Dindigul, Tamil Nadu, India."
      />
    </>
  );
};

export default Profile;
