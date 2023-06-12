import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const AdminRoute = ({children}) => {
    const { user, userData,loading } = useContext(AuthContext);
    const currentUser = userData.find(k => user?.email === k.email);
    const location = useLocation();
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(currentUser.role === "admin"){
        return children;
    }
    return <Navigate to='/' state={{from: location}} replace />
};

export default AdminRoute;