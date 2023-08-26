import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Data from "../components/Data";

const Profile = () => {
  

  const datas = JSON.parse(localStorage.getItem("Data"));

  return (
    <>
      <Navbar />
      <Data
        name={datas.name}
        email={datas.email}
        phone={datas.phoneNumber}
        address={datas.address}
      />
    </>
  );
};

export default Profile;
