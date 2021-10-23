import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  auth,
  signInWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./SignIn.css";
import SignIn from "./SignIn";
const SignInButton = () => {
  return (
    <div>
      <SignIn />
    </div>
  );
};

export default SignInButton;
