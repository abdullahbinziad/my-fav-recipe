// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4Lfja4E0gMZMHqN8YbsWDi7ncp3YeGpU",
  authDomain: "my-fav-recipe.firebaseapp.com",
  projectId: "my-fav-recipe",
  storageBucket: "my-fav-recipe.appspot.com",
  messagingSenderId: "41602683116",
  appId: "1:41602683116:web:dbd787480f1622a8be95c9"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);