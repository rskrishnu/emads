import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { addDoc, collection, getDocs, where, query } from "firebase/firestore";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  function signup(email, password) {
    createUserWithEmailAndPassword(auth, email, password);
  }
  function setUpRecaptha(number) {
    const recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {},
      auth
    );
    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth, number, recaptchaVerifier);
  }
  function login(email, password) {
    signInWithEmailAndPassword(auth, email, password);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return googleSignOut().then(
      signInWithPopup(auth, googleAuthProvider).then(async (result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        let user = result.user;
        console.log("user" + user.email);

        const q = query(
          collection(db, "RegistrationInfo"),
          where("email", "==", user.email)
        );

        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
          console.log("No matching documents.");
          return;
        } else {
          querySnapshot.forEach((doc) => {
            console.log(doc.id, "=>", doc.data());
          });
          navigate("/", { state: { email: user.email } });
        }
      })
    );
  }
  function googleSignOut() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signOut(auth, googleAuthProvider).then(console.log("Signed out"));
  }
  function logOut() {
    return signOut(auth);
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    googleSignIn,
    setUpRecaptha,
    googleSignOut,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
