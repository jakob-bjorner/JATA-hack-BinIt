import React from "react";
import { useState } from "react";
import { auth } from "../firebase";
import autoSignIn from "./SignIn";
const SignInButton = () => {
  autoSignIn();
  return (
    <div>
      hey its the sign in button
      
    </div>
  );
};

export default SignInButton;
