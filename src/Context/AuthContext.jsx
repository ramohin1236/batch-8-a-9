/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import auth from "../../public/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const FirebaseContext=createContext(null)

const provider= new GoogleAuthProvider()

const AuthContext = ({children}) => {
const [user,setUser]=useState([])
const [loading,setLoading]=useState(true)
    
const creatUser=(email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}
const loginUser =(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

const logOut=()=>{
    setLoading(true)
    return signOut(auth)
}


const googleSignUp=()=>{
     return signInWithPopup(auth,provider)
}

useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        setLoading(false)
    });
    return ()=>{
        unsubscribe();
    }
},[])


const authInfo={
    user,
    loading,
    creatUser,
    loginUser,
    logOut,
    googleSignUp
}

    return (
        <FirebaseContext.Provider value={authInfo}>
            {children}
        </FirebaseContext.Provider>
    );
};

export default AuthContext;