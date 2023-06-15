import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { useContext } from 'react';

const StudentRoute = ({children}) => {
    const { user,userRole, loading } = useContext(AuthContext);
    const location = useLocation();
    
    if (loading) {
        return <progress className="progress w-56"></progress>
    }
    if (user && userRole === "student") {
        return children;
    }
    // if ( userRole === "student") {
    //     return children;
    // }
    return <Navigate to='/' state={{ from: location }} replace />

};


export default StudentRoute;