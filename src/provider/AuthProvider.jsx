import React, { createContext, useEffect, useState } from "react";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import app from "../firebase/Firebase.config";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const googleAuthProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState([]);
    // const [userData, setUserData] = useState([])

    // console.log(user);
    // const { data: usersArray = [], refetch } = useQuery({
    //     queryKey: ['usersArray'],
    //     queryFn: async () => {
    //         const res = await fetch('http://localhost:5000/users')
    //         return res.json();
    //     }

    // })
    // console.log(data);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                setLoading(true);
                setUserData(data);
            })
    }, [])

    // console.log(currentUser);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleAuthProvider);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
            // fethching using Axios Starts
            if (loggedUser) {
                axios.post('http://localhost:5000/jwt', { email: loggedUser.email })
                    .then(data => {
                        // console.log(data.data);
                        localStorage.setItem('access-token', data.data.token);
                        setLoading(false);
                    })
            }
            else {
                localStorage.removeItem('access-token');
                setLoading(false);

            }
            // fethching using Axios ends
            
        });
        return () => {
            unsubscribe();
        };
    }, [user]);

    const authInfo = {
        user,
        loading,
        userData,
        setLoading,
        createUser,
        setUser,
        signIn,
        signInWithGoogle,
        logOut,
        updateUserProfile
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;