import React, { createContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase_config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [lodging, setLodging] = useState(true);

  const createUser = (email, password) => {
    setLodging(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginIn = (email, password) => {
    setLodging(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const loggedOut = () => {
    setLodging(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (loggedUser) => {
      console.log("logged in user inside the auth", loggedUser);
      setUser(loggedUser);
      setLodging(false);
    });
    return () => {
      return unsubscribed();
    };
  }, []);

  const authInfo = { user, lodging, createUser, loginIn, loggedOut };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
