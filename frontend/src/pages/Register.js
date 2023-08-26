import React from "react";
import {LoginRegister} from "../Routes";

const Register = () => {
  return (
    <>
      <LoginRegister
        title="Create an Account"
        button="Register"
        question="Already have an account?"
        redirect="Login to your account"
        isLogin={false}
        redirectLink="/login"
      />
    </>
  );
};

export default Register;
