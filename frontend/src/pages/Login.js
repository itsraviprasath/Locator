import React from "react";
import { LoginRegister } from "../Routes"

const Login = () => {
  return (
    <>
      <LoginRegister
        title="Login to your Account"
        button="Login"
        question="Don't have an account?"
        redirect="Create account"
        isLogin={true}
        redirectLink="/register"
      />
    </>
  );
};

export default Login;
