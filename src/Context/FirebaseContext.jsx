import React, { useState, useEffect } from "react";
import app from "../lib/Firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// import data component
import { createUserData } from "../lib/FireStore";

// Context
// eslint-disable-next-line react-refresh/only-export-components
export const FirebaseContext = React.createContext(null);

// Global Provider
export const FirebaseProvider = (props) => {
  // state for check user
  const [check, setCheck] = useState(null);

  // Intences
  const auth = getAuth(app);

  // signup with email/password
  const signUp = async (handleClick, name, email, password) => {
    try {
      // create user first
      const useCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // take user object
      const user = useCredential.user;
      // update display name
      await updateProfile(user, { displayName: name });
      // alert box
      alert(`Welcome ${name}! Your account has been created.`);
      // Trigger alert box
      handleClick();

      // save data to fireStore database
      await createUserData(user.uid, name, email, password);
    } catch (error) {
      // error handling
      console.error("Sign Up failed:", error.message);
      alert("Oops...! Sign Up failed. Try again.");
    }
  };

  // sign in with existing user
  const signIn = async (handleClick, email, password) => {
    try {
      // make user credential
      await signInWithEmailAndPassword(auth, email, password);
      // display message
      alert("Log in succesfull. Ready to browse?");
      // trigger action
      handleClick();
    } catch (error) {
      alert("Opps...! No user found.");
      console.log(error);
    }
  };

  // log out
  const logOut = async () => {
    await signOut(auth);
    setCheck(false);
    alert("Successfully Logged Out.");
  };

  // already logged in or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCheck(true);
      } else {
        setCheck(false);
      }
    });

    // cleanup listener
    return () => unsubscribe();
  }, [auth]);

  return (
    <FirebaseContext.Provider value={{ signUp, signIn, logOut, check }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
