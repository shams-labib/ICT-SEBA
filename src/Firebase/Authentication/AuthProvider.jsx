import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../Config file/_firebase.init";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();

  const createUser = async (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = async () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const info = {
    googleLogin,
    createUser,
  };

  return <AuthContext value={info}>{children}</AuthContext>;
};

export default AuthProvider;
