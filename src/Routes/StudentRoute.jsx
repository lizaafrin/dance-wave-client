import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { useContext } from 'react';

const StudentRoute = ({children}) => {
    const { user, userData,loading } = useContext(AuthContext);
    const currentUser = userData.find(k => user?.email === k.email);
    const location = useLocation();
    if (loading) {
        return <progress className="progress w-56"></progress>
    }
    if (user && currentUser.role === "student") {
        return children;
    }
    return <Navigate to='/' state={{ from: location }} replace />

};


export default StudentRoute;