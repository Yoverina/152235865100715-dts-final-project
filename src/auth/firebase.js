// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signOut } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXGN1EljUMOQTzhLI4EdjHIpAaAfdUI3c",
  authDomain: "react-web-2022.firebaseapp.com",
  projectId: "react-web-2022",
  storageBucket: "react-web-2022.appspot.com",
  messagingSenderId: "188364987495",
  appId: "1:188364987495:web:cbc8f56f609b91ae3e08c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerWithEmailAndPass = async(email, password) =>{
  try{
    //user yang didapat, secara otomatis sudah di sign in
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log("user: ", user.user);
  } catch(err){
    console.log(err.code);
    console.log(err.message);
  } 
}

const loginWithEmailAndPassword = async(email, password) =>{
  try{
    const loggedInUser = await signInWithEmailAndPassword(auth, email, password);
    console.log("Logged in: ", loggedInUser.user);

  } catch(err){
    console.log(err);
  }
};
const logout = async() =>{
  try {
    await signOut(auth); 
  } catch (err) {
    console.log(err);
  }
};
const resetPass = async(email) =>{
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (err) {
    console.log(err);
  }
};

export{
  auth, registerWithEmailAndPass, loginWithEmailAndPassword, logout, resetPass
};