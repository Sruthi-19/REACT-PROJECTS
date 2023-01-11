import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./Firebase";

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
