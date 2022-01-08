import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../utilities/init-firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut
} from 'firebase/auth'

const AuthContext = createContext({ // the context is created in order to ensure better autocompletion of the variables inside VS Code
  currentUser: null,
  signInWithGoogle: () => Promise,
  login: () => Promise,
  register: () => Promise,
  logout: () => Promise,
})

export const useAuth = () => useContext(AuthContext) // It is a custom hook that allows us to use the authContext

export default function AuthContextProvider({ children }) { // Context API that ensures all firebase auth functions are in a single location and that can be accessible throughout the whole app
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => { // this event handler allows the application to know whether the user is logged in or not
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user ? user : null)
    }) //
    return () => {
      unsubscribe()
    }
  }, [])

  useEffect(() => {
    console.log('The user is', currentUser)
  }, [currentUser])

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function logout() {
    return signOut(auth)
  }

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
  }

  const value = {
    currentUser,
    signInWithGoogle,
    login,
    register,
    logout
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  
}