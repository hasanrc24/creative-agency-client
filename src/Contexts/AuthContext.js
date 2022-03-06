import React, { createContext, useContext, useEffect, useState } from 'react';
import '../firebase';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({children}){

    const [loading, setLoading] = useState(true);
    const [loggedInUser, setLoggedInUser] = useState();

    useEffect(()=>{
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            setLoggedInUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, [])

    // signUp function 
    async function signUp(email, password, username){
        const auth = getAuth();

        // create account 
        await createUserWithEmailAndPassword(auth, email, password, username);
        // update user 
        await updateProfile(auth.currentUser, {displayName: username});

        const user = auth.currentUser;
        setLoggedInUser({...user});
    }

    // login function 
    function login(email, password){
        const auth = getAuth();

        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout function 
    function logout(){
        const auth = getAuth();
        return signOut(auth)
    }

    const value = {loggedInUser, signUp, login, logout};

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
