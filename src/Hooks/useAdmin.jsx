import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
   const {user, loading} = useContext(AuthContext);
//    const [axiosSecure]= useAxiosSecure();
   
  // use axios secure with react query
   const {data: isAdmin, isLoading: isAdminloading} = useQuery({
    queryKey: ['isAdmin', user?.email],
    // enabled: !loading,
    // queryFn: async () => {
        // const res = await axiosSecure.get(`/users/admin/${user.email}`);
    //     console.log('is admin response', res);
    //     return res.data.admin;
    // }
    queryFn: async ()=>{
        const res = await fetch(`https://dancewave-server-side.vercel.app/users/admin/${user.email}`,
      //   {
      //      headers:{
      //       authorization: `bearer ${token}`
      //      } 
      //   }
        )
        return res.json();
    }
   })
   return [isAdmin, isAdminloading]
};

export default useAdmin;