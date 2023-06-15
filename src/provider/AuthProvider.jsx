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
    const [userRole, setUserRole] = useState(null);
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);
    // const [userData, setUserData] = useState([]);


    console.log(user);
    // const { data: usersArray = [], refetch } = useQuery({
    //     queryKey: ['usersArray'],
    //     queryFn: async () => {
    //         const res = await fetch('https://dancewave-server-side.vercel.app/users')
    //         return res.json();
    //     }

    // })
    // console.log(data);
    const getUserRole = async (email) => {
        const res = await fetch(`https://dancewave-server-side.vercel.app/users/${email}`);
        const result  = await res.json();
        console.log(result);
        return result.role;
    }

    useEffect(() => {
        setLoading(true);
        if(user?.email){
            getUserRole(user?.email)
            .then(data => {
                setUserRole(data);
                console.log(data);
                setLoading(false);
            })
        }

    }, [user])
    
    console.log(userRole);

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
            // if (loggedUser) {
            //     axios.post('https://dancewave-server-side.vercel.app/jwt', { email: loggedUser.email })
            //         .then(data => {
            //             // console.log(data.data);
            //             localStorage.setItem('access-token', data.data.token);
            //             setLoading(false);
            //         })
            // }
            // else {
            //     localStorage.removeItem('access-token');


            // }
            // fethching using Axios ends
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = {
        user,
        loading,
        userRole,
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