import React from "react";
import LoginRegister from "../components/LoginRegister/LoginRegister";

const Login = () => {
  return (
    <>
      <LoginRegister
        title="Login to your Account"
        button="Login"
        forgotPassword="Forgot Password?"
        question="Not Registered Yet?"
        account="  Create an account"
        redirect="/register"
        register={false}
      />
    </>
  );
};

export default Login;
