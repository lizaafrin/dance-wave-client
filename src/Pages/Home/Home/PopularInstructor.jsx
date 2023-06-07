import React from 'react';
import Instructor from '../../Shared/Instructor';
import { useState } from 'react';
import { useEffect } from 'react';
import SectionTitle from '../../../components/Sectiontitle/SectionTitle';

const PopularInstructor = () => {
    const [instructors, setInstructors]= useState([]);
    useEffect(()=>{
        fetch('instructors.json')
        .then(res=> res.json())
        .then(data=>setInstructors(data))
          
    }, [])
    return (

        <section>
            <SectionTitle subHeading={"Popular Instructor"}
                heading={"From Our Instructors"}></SectionTitle>

            <div className='grid md:grid-cols-3 gap-4'>
                {
                    instructors.slice(0,6).map(item =><Instructor
                        key={item._id}
                        item={item}
                    ></Instructor>
                     )
                }
            </div>
        </section>

    );
};

export default PopularInstructor;