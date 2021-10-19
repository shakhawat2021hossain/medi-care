import { useEffect, useState } from "react";
import initializeFirebase from "../firebase/firebase.init";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  const googleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };

  const handleUserSignIn = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const handleUserRegister = (email, pass) => {
    createUserWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  return {
    googleSignIn,
    logOut,
    user,
    handleUserSignIn,
    handleUserRegister,
    isLoading,
  };
};

export default useFirebase;
