import React from "react";
import "./LoginRegister.css";

const LoginRegister = (props) => {
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
            <label className="login-lable" htmlFor="email">
              Email
            </label>
            <input
              className="login-input"
              type="text"
              id="email"
              placeholder="you@abc.com"
            />
            <label className="login-lable" htmlFor="password">
              Password
            </label>
            <input
              className="login-input"
              type="password"
              id="password"
              placeholder="***********"
            />

            <a className="login-forgot" href="#">
              {props?.forgotPassword}
            </a>

            <button className="login-submit" type="submit">
              {props?.button}
            </button>
          </form>
        </div>
      </div>
      <div className="register-redirect">
        <p>
          {props?.question}
          <a href={props?.redirect}>{props?.account}</a>
        </p>
      </div>
    </>
  );
};

export default LoginRegister;
