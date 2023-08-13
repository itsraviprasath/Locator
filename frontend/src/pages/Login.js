import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../components/LoginRegister/LoginRegister.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/login", { name: name, password: password })
      .then((result) => {
        console.log(result);

        if (result.data === "User found") {
          navigate("/home");
        } else {
          alert("User not found or wrong password");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div id="login">
        <div className="login-header">
          <img src="" alt="Logo" />
          <p className="login-text">Login to your Account</p>
          <p className="login-slogan">See Where your product is coming</p>
        </div>
        <div className="login-form">
          <form action="" method="get" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              className="login-input"
              type="text"
              id="email"
              placeholder="you@abc.com"
              onChange={(event) => {
                setName(event.target.value);
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

            {/* <Link className="login-forgot" to="#">
              Forgot Password
            </Link> */}

            <button className="login-submit" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
      <div className="register-redirect">
        <p>
          Not Registered Yet?
          <Link to="/"> Create an account</Link>
        </p>
      </div>
    </>
  );
};

export default Login;
