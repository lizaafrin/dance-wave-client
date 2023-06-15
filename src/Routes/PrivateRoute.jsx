import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { InfinitySpin } from 'react-loader-spinner';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location);
    if (loading) {
        return (
            <div className="pt-24 flex justify-center">
                <InfinitySpin
                    width='200'
                    color="#4fa94d"
                />
            </div>
        )
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace />
};

export default PrivateRoute;