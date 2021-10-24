import { useEffect, useState } from "react";
import { onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { auth } from "../firebase-config";

const SignIn = () => {
  const [user, setUser] = useState(null);

  const handleSignInRequest = () => {
    signInAnonymously(auth)
      .then(() => {
        // signed in
        console.log("signed in");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  if (user === null) {
    handleSignInRequest();
  }

  useEffect(() => {
    onAuthStateChanged(auth, (aUser) => {
      if (aUser) {
        setUser(aUser);
        console.log("Auth state changed: " + aUser.uid);
      } else {
        console.log("user is not logged in!!!");
        // user is signed out;
      }
    });
  }, []);
};

export default SignIn;
