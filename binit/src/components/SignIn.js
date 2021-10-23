import React, { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  createUserWithPopup,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
  User,
  signInAnonymously,
} from "firebase/auth";
import { firebaseConfig } from "../firebase";
import { initializeApp } from "firebase/app";
// const authNew = getAuth();
const app = initializeApp(firebaseConfig);
const authNew = getAuth(app);

// provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
// provider.addScope("profile");
// provider.addScope("email");
// import { useAuthState } from "react-firebase-hooks/auth";
// import "./SignIn.css";
// import "firebase/auth";
// import firebase from "firebase/app";

const SignIn = () => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  const handleSignOutRequest = () => {
    signOut(authNew)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSignInRequest = () => {
    // console.log("pre ");
    // const provider = new GoogleAuthProvider();
    // console.log(provider);
    signInAnonymously(authNew)
      .then(() => {
        // signed in
        console.log("signed in");
      })
      .catch((error) => {
        console.log(error);
      });
    // signInWithPopup(authNew, provider)
    //   .then((result) => {
    //     console.log("got popup result");
    //     const credential = GoogleAuthProvider.credentialFromResult(result);
    //     if (credential) {
    //       setToken(credential.accessToken);
    //       setUser(credential.user);
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // const email = "jakob@gmail.com";
    // const password = "123456";
    // signInWithEmailAndPassword(authNew, email, password)
    //   .then((userCredential) => {
    //     // Signed in
    //     const user = userCredential.user;
    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // ..
    //   });
  };

  useEffect(() => {
    onAuthStateChanged(authNew, (aUser) => {
      if (aUser) {
        setUser(aUser);
        console.log("Auth state changed: " + aUser.uid);
        // console.log(aUser);
      } else {
        // setUser(null);
        // user is signed out;
      }
    });
  }, []);
  // const authLogin = getAuth();

  // const [registerEmail, setRegisterEmail] = useState("");
  // const [registerPassword, setRegisterPassword] = useState("");
  // const [loginEmail, setLoginEmail] = useState("");
  // const [loginPassword, setLoginPassword] = useState("");

  // const [user, setUser] = useState({});

  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });

  // const register = async () => {
  //   try {
  //     const user = await createUserWithEmailAndPassword(
  //       auth,
  //       registerEmail,
  //       registerPassword
  //     );
  //     console.log(user);
  //   } catch (err) {
  //     console.error(err);
  //     alert(err.message);
  //   }
  // };
  // const login = async () => {
  //   try {
  //     const user = await signInWithEmailAndPassword(
  //       auth,
  //       loginEmail,
  //       loginPassword
  //     );
  //     console.log(user);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  // const logout = async () => {
  //   await signOut(auth);
  // };

  // another type we can use:

  // const provider = new GoogleAuthProvider();
  // provider.setCustomParameters({ prompt: "select_account" });
  // const googleLogin = async () => {
  //   try {
  //     const user = await signInWithPopup(auth, provider);
  //     console.log(user);
  //   } catch (error) {
  //     console.log(error.message);
  //     console.error(error);
  //   }
  // };

  // const redirectLogin = async () => {
  //   signInWithRedirect(auth, provider);
  // };
  // const SignInWithFirebase = () => {
  //   var google_provider = new firebase.auth.GoogleAuthProvider();
  //   firebase
  //     .auth()
  //     .signInWithPopup(google_provider)
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  return (
    <div className="sign-in">
      <h1>{user ? "Signed In" : "not yet signed in"}</h1>

      {user ? (
        <button onClick={handleSignOutRequest}>Sign Out</button>
      ) : (
        <button onClick={handleSignInRequest}>Register</button>
      )}
    </div>
  );
};

export default SignIn;
