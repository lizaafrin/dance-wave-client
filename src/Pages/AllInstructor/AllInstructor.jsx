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
            {/* <h2>nstructor</h2> */}
            {
                instructors.map((item, index) =>
                    <div key={index} className="card w-60 h-[600px] lg:w-96 mx-auto shadow-xl">
                        <figure><img className='rounded-e-full rounded-t-full' src={item.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title underline text-orange-500">{item.name}</h2>
                            <h3 className='font-semibold'>Email: {item.email}</h3>
                            <p>{item.bio}</p>
                            <span className='font-semibold block shadow-lg w-fit rounded-lg p-2 mb-4'>No of Classes: {item.number_Of_Classes}</span>

                            <div className="card-actions justify-start">
                                <button className="btn btn-outline btn-sm border-t-4 border-b-4 bg-orange-100">Contact Me</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default AllInstructor;