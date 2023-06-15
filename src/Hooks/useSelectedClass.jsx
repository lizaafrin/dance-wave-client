import React from 'react';
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useSelectedClass = () => {
    const { user } = useContext(AuthContext);
    // console.log(user);
    // const token = localStorage.getItem('access-token');
    // const [axiosSecure] = useAxiosSecure();
    const { refetch , data: selectedClass=[] } = useQuery({
        queryKey:['selectedClass', user?.email],
    //     // enabled: !loading,
    //     // queryFn: async ()=>{
    //     //     const res = await axiosSecure.get(`/selectedclass?email=${user.email}`)
    //     //     return res.data;}
        queryFn: async ()=>{
            const res = await fetch(`https://dancewave-server-side.vercel.app/selectedclass?email=${user.email}`,
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

export default useSelectedClass;
// const [selectedClasses, setSelectedClasses]= useState([]);

// const [loading, setloading] = useState(true);
// useEffect(()=>{
//     fetch('https://dancewave-server-side.vercel.app/selectedclass')
//     .then(res=> res.json())
//     .then(data=> {
//         setSelectedClasses(data)})
//        setloading(false);
// }, [])
// return [selectedClasses, loading]