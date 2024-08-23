import { auth, provider } from "../firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import "../styles/Auth.css"

import Cookies from "universal-cookie";

const cookies = new Cookies();

export const Auth = ({ setIsAuth }) => {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      // Handle successful sign-in here, like redirecting or updating state.
      console.log(result);
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);
    } catch (error) {
      console.error("Error signing in with Google: ", error);
      // Handle errors here, such as showing an error message.
    }
  };

  return (
    <div className="auth">
      <p>Sign in with Google to continue</p>
      <button onClick={signInWithGoogle}> Sign In with Google</button>
    </div>
  );
};
