import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    
    // Register with Email And Password
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // LogIn with Email and password
    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // LogOut Function
    const logOut = () =>{
        return signOut(auth)
    }

    // display last Login User
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('auth state change', currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return () =>{
            unsubscribe();
        }
    }, [])

    const userInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logOut
    }
    
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;