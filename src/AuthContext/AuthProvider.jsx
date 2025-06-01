import React, { Children, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../../firebase.init';
const provider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Google Login

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    // Catch current user

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
            return () => {
                unsubscribe();
            }
        })
    }, [])

    // Sign Out User

    const signOutUser = () => {
        return signOut(auth)
    }














    const authInfo = {
        createUser,
        signin,
        googleSignIn,
        user,
        signOutUser,
        loading
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;