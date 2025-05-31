import React, { Children, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../../firebase.init';
const provider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    console.log('Current login user', user)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Google Login

    const googleSignIn = () => {
        return signInWithPopup(auth, provider)
    }

    // Catch current user

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
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
        signOutUser
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;