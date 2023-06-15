import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const InstructorRoute = ({children}) => {
    const { user,userRole, loading } = useContext(AuthContext);
    
    // console.log(user, currentUser);
    const location = useLocation();
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(userRole === "instructor"){
        return children;
    }
    // return <Navigate to='/' state={{from: location}} replace />

};

export default InstructorRoute;