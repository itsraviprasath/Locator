import React from "react";
import "./LoginRegister.css";
import { Link } from "react-router-dom";

const LoginRegister = (props) => {
  const register = props?.register;
  return (
    <>
      <div id="login">
        <div className="login-header">
          <img src="" alt="Logo" />
          <p className="login-text">{props?.title}</p>
          <p className="login-slogan">See Where your product is coming</p>
        </div>
        <div className="login-form">
          <form action="" method="get">
            <label htmlFor="email">Email</label>
            <input
              className="login-input"
              type="text"
              id="email"
              placeholder="you@abc.com"
            />

            {register ? (
              <>
                <label htmlFor="name">Name</label>
                <input
                  className="login-input"
                  type="text"
                  id="name"
                  placeholder="Raviprasath"
                />

                <label htmlFor="phone-number">Phone Number</label>
                <input
                  className="login-input"
                  type="tel"
                  id="phone-number"
                  placeholder="9876543210"
                />

                <label htmlFor="address">Address</label>
                <input
                  className="login-input"
                  type="text"
                  id="address"
                  placeholder="Chennai, India"
                />
              </>
            ) : null}

            <label htmlFor="password">Password</label>
            <input
              className="login-input"
              type="password"
              id="password"
              placeholder="***********"
            />

            <Link className="login-forgot" to="#">
              {props?.forgotPassword}
            </Link>

            <button className="login-submit" type="submit">
              {props?.button}
            </button>
          </form>
        </div>
      </div>
      <div className="register-redirect">
        <p>
          {props?.question}
          <Link to={props?.redirect}>{props?.account}</Link>
        </p>
      </div>
    </>
  );
};

export default LoginRegister;
