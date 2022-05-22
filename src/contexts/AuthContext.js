import React, {useContext, useEffect, useState} from 'react'
import {auth} from '../firebase'
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

const AuthContext = React.createContext()


export function useAuth(){
    return useContext(AuthContext)
}
export function AuthProvider({children}) {
const [currentUser, setCurrentUser] = useState()
const [loading,setLoading] = useState(true)

function signup(email,password){
  createUserWithEmailAndPassword(auth,email,password) 
 
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
function login(email,password){
    signInWithEmailAndPassword(auth,email,password)
}
function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }
  function logOut() {
    return signOut(auth);
  }
useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(user => {
        
        setCurrentUser(user)
        setLoading(false)
    })
    return unsubscribe
},[])

    const value = { 
        currentUser,
        signup,
        login,
        googleSignIn,
        setUpRecaptha,
    }
  return (
      <AuthContext.Provider value={value}>
          {!loading && children}
      </AuthContext.Provider>
    
  )
}

