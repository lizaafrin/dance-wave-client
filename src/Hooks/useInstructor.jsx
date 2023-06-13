import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const useInstructor = () => {
    const {user,loading} = useContext(AuthContext);
    const { refetch , data: popularInstructor=[] } = useQuery({
        queryKey:['popularInstructor', user?.email],
        // enabled: !loading,
        // queryFn: async ()=>{
        //     const res = await axiosSecure(`/selectedclass?email=${user.email}`)
        //     return res.data;}
        queryFn: async ()=>{
            const res = await fetch(`http://localhost:5000/popularInstructor?email=${user.email}`,
            // {
            //    headers:{
            //     authorization: `bearer ${token}`
            //    } 
            // }
            )
            return res.json();
        }
        }
    )
    return [ selectedClass, refetch]
};

export default useInstructor;