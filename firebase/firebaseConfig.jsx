
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2kIJn66j9-52b3iWY15b0tM-puSel-Vc",
  authDomain: "react-labs-assignment.firebaseapp.com",
  projectId: "react-labs-assignment",
  storageBucket: "react-labs-assignment.appspot.com",
  messagingSenderId: "722189203221",
  appId: "1:722189203221:web:3295fdcd4581f3878d5b1c",
  measurementId: "G-2M9XS5GTK1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app