import React from "react";
import { Router } from "@reach/router";
import { Login } from "../components/Auth/Login";

const Auth = () => {
  return (
    <Router>
      <Login path="auth/login" />
    </Router>
  );
};

export default Auth;
