// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByWXHNa2137rbNUF91hriyk6p1AgLThFA",
  authDomain: "travel-guide-dfd47.firebaseapp.com",
  projectId: "travel-guide-dfd47",
  storageBucket: "travel-guide-dfd47.appspot.com",
  messagingSenderId: "66055532289",
  appId: "1:66055532289:web:03745e8c50da8def41b500"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;