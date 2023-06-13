import { LayoutGroup } from 'framer-motion';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Instructor from '../Shared/Instructor';

const AllInstructor = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('instructors.json')
            .then(res => res.json())
            .then(data => setInstructors(data))

    }, [])
    // console.log(instructors);
    return (
        <div className='grid md:grid-cols-3 gap-4 py-28'>
            <h2>nstructor</h2>
        {
            instructors.map((item, index )=> <Instructor
                key={index}
                item={item}
            ></Instructor>
            )
        }
    </div>
    );
};

export default AllInstructor;