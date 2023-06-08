import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useClass = () => {
    const [classes, setclasses]= useState([]);
    const [loading, setloading] = useState(true);
    useEffect(()=>{
        fetch('http://localhost:5000/danceclasses')
        .then(res=> res.json())
        .then(data=> {
            setclasses(data)})
           setloading(false);
    }, [])
    return [classes, loading]
};

export default useClass;