import React from 'react';
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useSelectedClass = () => {
    const {user,loading} = useContext(AuthContext);
    const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();
    const {isLoading, refetch , data: selectedClass=[] } = useQuery({
        queryKey:['selectedClass', user?.email], enabled: !loading,
        // queryFn: async ()=>{
        //     const res = await fetch(`http://localhost:5000/selectedclass?email=${user.email}`,{
        //        headers:{
        //         authorization: `bearer ${token}`
        //        } 
        //     })
        //     return res.json();
        // }
        queryFn: async ()=>{
            const res = await axiosSecure(`/selectedclass?email=${user.email}`)
            return res.data;
        }
    })
    return [ selectedClass, isLoading, refetch]
    // const [selectedClasses, setSelectedClasses]= useState([]);

    // const [loading, setloading] = useState(true);
    // useEffect(()=>{
    //     fetch('http://localhost:5000/selectedclass')
    //     .then(res=> res.json())
    //     .then(data=> {
    //         setSelectedClasses(data)})
    //        setloading(false);
    // }, [])
    // return [selectedClasses, loading]
};

export default useSelectedClass;