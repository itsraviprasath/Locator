import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../components/LoginRegister/LoginRegister.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/register", {
        name: name,
        password: password,
        fullName: fullName,
        phoneNumber: phoneNumber,
        address: address,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
    navigate("/home");
  };

  return (
    <>
      <div id="login">
        <div className="login-header">
          <img src="" alt="Logo" />
          <p className="login-text">Create an Account</p>
          <p className="login-slogan">See Where your product is coming</p>
        </div>
        <div className="login-form">
          <form action="" method="get" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              className="login-input"
              type="email"
              id="email"
              placeholder="you@abc.com"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />

            <label htmlFor="name">Name</label>
            <input
              className="login-input"
              type="text"
              id="name"
              placeholder="Raviprasath"
              onChange={(event) => {
                setFullName(event.target.value);
              }}
            />

            <label htmlFor="phone-number">Phone Number</label>
            <input
              className="login-input"
              type="tel"
              id="phone-number"
              placeholder="9876543210"
              onChange={(event) => {
                setPhoneNumber(event.target.value);
              }}
            />

            <label htmlFor="address">Address</label>
            <input
              className="login-input"
              type="text"
              id="address"
              placeholder="Chennai, India"
              onChange={(event) => {
                setAddress(event.target.value);
              }}
            />

            <label htmlFor="password">Password</label>
            <input
              className="login-input"
              type="password"
              id="password"
              placeholder="***********"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />

            <button className="login-submit" type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
      <div className="register-redirect">
        <p>
          Already Have an account?
          <Link to="/login"> Login to your account</Link>
        </p>
      </div>
    </>
  );
};

export default Register;
