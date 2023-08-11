import React from "react";
import LoginRegister from "../../components/LoginRegister/LoginRegister";

const Register = () => {
  return (
    <>
      <LoginRegister
        title="Create an Account"
        button="Register"
        forgotPassword=""
        question="Already Have an account?"
        account="Login to your account"
        redirect="/login"
      />
    </>
  );
};

export default Register;
