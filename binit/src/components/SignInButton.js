import React from "react";
import { useState } from "react";
import { auth } from "../firebase";
import SignIn from "./SignIn";
const SignInButton = () => {
  return (
    <div>
      hey its the sign in button
      <SignIn />
    </div>
  );
};

export default SignInButton;
