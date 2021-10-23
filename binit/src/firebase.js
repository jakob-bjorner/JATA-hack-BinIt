import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import firebase from "firebase";

// const app = initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// });
const firebaseConfig = {
  apiKey: "AIzaSyB5NwbMhVBmPOd3kPfecA3A8LCduxCn-vM",
  authDomain: "bin-it-329914.firebaseapp.com",
  projectId: "bin-it-329914",
  storageBucket: "bin-it-329914.appspot.com",
  messagingSenderId: "596782343725",
  appId: "1:596782343725:web:5e7340b0c7cbac6773faa4",
  measurementId: "G-NP744LT74R"
};
// initializeApp(firebaseConfig);
// const auth = getAuth();

// export default app;
export { firebaseConfig };
