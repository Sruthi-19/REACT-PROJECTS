import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBO6FP-bP0MMQra_LHgmUHb3SPI8lm3HaY",
  authDomain: "signin-project-374416.firebaseapp.com",
  projectId: "signin-project-374416",
  storageBucket: "signin-project-374416.appspot.com",
  messagingSenderId: "980938644118",
  appId: "1:980938644118:web:5d23706dccc3b9299f40b7",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const AuthContext = async () => {
  const Provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, Provider)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return false;
    });
  return result;
};

export const SignOut=()=>{
  auth.signOut();
}