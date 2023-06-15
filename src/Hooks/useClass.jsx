import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useClass = () => {
    const [classes, setclasses]= useState([]);
    const [loading, setloading] = useState(true);
    useEffect(()=>{
        fetch('https://dancewave-server-side.vercel.app/danceclasses')
        .then(res=> res.json())
        .then(data=> {
            setclasses(data)})
           setloading(false);
    }, [])
    // console.log(classes);
    // const { data: classes = [], isLoading: loading, refetch } = useQuery({
    //     queryKey: ['classes'],
    //     queryFn: async () => {
    //         const res = await fetch('https://dancewave-server-side.vercel.app/danceclasses')
    //         return res.json();
    //     }
    // });
    return [classes, loading]
};

export default useClass;