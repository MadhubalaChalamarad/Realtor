import React from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, serverTimestamp, setDoc, getDoc } from "firebase/firestore";
import { app, db } from "../Firebase";
import { useNavigate } from "react-router";

const OAuth = () => {
  const naviGate = useNavigate();
  const onGoogleClick = async () => {
    try {
      const auth = getAuth(app);
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      //check for the user
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }

      naviGate("/");
    } catch (error) {
      toast.error("Could not authorize with Google");
    }
  };
  return (
    <button
      type="button"
      onClick={onGoogleClick}
      className="flex items-center justify-center w-full py-2 mx-auto text-lg font-semibold text-center text-white transition duration-150 ease-in-out bg-red-600 rounded shadow-sm flex-center hover:bg-red-700 active:bg-red-900 hover:shadow-lg active:shadow-lg"
    >
      <FcGoogle className="mr-2 text-2xl bg-white rounded-full" />
      Continue with google
    </button>
  );
};

export default OAuth;
