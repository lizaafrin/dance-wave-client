import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const AdminRoute = ({children}) => {
    const { user,userRole, loading } = useContext(AuthContext);
    
    const location = useLocation();
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(userRole === "admin"){
        return children;
    }
    return <Navigate to='/' state={{from: location}} replace />
};

export default AdminRoute;