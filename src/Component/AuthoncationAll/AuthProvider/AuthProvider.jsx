import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firevase/Firebase.config';

export let AuthContext = createContext()

let AuthProvider = ({ children }) => {

    let [user, setUser] = useState(null)
    let [loading, setLoading] = useState(true)
    let auth = getAuth(app)


    // console.log(user)

    // singUP function 
    let createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // observed user
    useEffect(() => {
        let unSubscribe = onAuthStateChanged(auth, (observedUser => {
            setUser(observedUser)
            setLoading(false)
            // console.log(observedUser)

        }))
        return () => {
            unSubscribe()
        }
    }, [])

    // login user 
    let loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //logOut user
    let logOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }
    //Password reset email
    let PasswordResetAllUser = (emailValue) => {
        setLoading(true)
        return sendPasswordResetEmail(auth, emailValue)
    }
    // ===================================
    // Some Information Pass
    // ===================================

    // recharge Some value Pass to Confirm Payment Page 

    let [paymentInfo, setPaymentInfo] = useState([])
    let [subscriptionPrice, setSubscriptionPrice] = useState([])



    //auth Info Provider
    let authInfo = {
        user,
        createUser,
        loginUser,
        logOutUser,
        loading,
        PasswordResetAllUser,


        paymentInfo,
        setPaymentInfo,
        subscriptionPrice,
        setSubscriptionPrice
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;