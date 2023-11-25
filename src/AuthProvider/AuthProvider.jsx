import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import Auth from '../Configs/FirebaseConfig/Firebase.config';

export const userAuth = createContext(null)

const AuthProvider = ({ children }) => {
      const [loading, setLoading] = useState(true)
      const [user, setUser] = useState(null)

      console.log(loading, user)

      // Create User
      const createUser = (email, password) => {
            setLoading(true)
            return createUserWithEmailAndPassword(Auth, email, password)
      }

      // Login
      const login = (email, password) => {
            setLoading(true)
            return signInWithEmailAndPassword(Auth, email, password)
      }

      //Stay login
      useEffect(() => {
            const unsubscribe = onAuthStateChanged(Auth, (currentUser) => {

                  setLoading(false)
                  setUser(currentUser)

            })

            return unsubscribe
      }, [])


      //      LogOut
      const logout = ()=>{

            setLoading(true)
            return signOut(Auth)
      }





      const userInfo = {
            createUser, login, logout, user
      }
      return (
            <userAuth.Provider value={userInfo}>
                  {children}
            </userAuth.Provider>
      );
};

export default AuthProvider;