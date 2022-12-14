import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "./firebaseConfig";

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export const handleClickGoogle = () => {
  signInWithPopup(auth, provider)
    .then((res) => {
      alert(`hello ${res.user.displayName}`);
      console.log(res);
    })
    .catch((err) => console.error(err.message));
};
