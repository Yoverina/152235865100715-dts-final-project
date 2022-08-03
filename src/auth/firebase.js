import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";

// My web app's Firebase configuration
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

const logout = async() =>{
  try {
    await signOut(auth); 
  } catch (err) {
    console.log(err);
  }
};
// const resetPass = async(email) =>{
//   try {
//     await sendPasswordResetEmail(auth, email);
//   } catch (err) {
//     console.log(err);
//   }
// };

export{
  auth, logout
};