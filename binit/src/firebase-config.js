import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

// const app = initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// });
const app = initializeApp({
  apiKey: "AIzaSyB5NwbMhVBmPOd3kPfecA3A8LCduxCn-vM",
  authDomain: "bin-it-329914.firebaseapp.com",
  projectId: "bin-it-329914",
  storageBucket: "bin-it-329914.appspot.com",
  messagingSenderId: "596782343725",
  appId: "1:596782343725:web:b86c5d3ba4d2928373faa4",
  measurementId: "G-ZH55Q8TCEG",
});

export default app;
export const auth = getAuth(app);
export const db = getFirestore(app);