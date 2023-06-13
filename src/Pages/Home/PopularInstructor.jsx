import React from 'react';
import Instructor from '../Shared/Instructor';
import { useState } from 'react';
import { useEffect } from 'react';
import SectionTitle from '../../components/Sectiontitle/SectionTitle';
import Marquee from "react-fast-marquee";

const PopularInstructor = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('instructors.json')
            .then(res => res.json())
            .then(data => setInstructors(data))

    }, [])
    return (

        <section>
            <SectionTitle subHeading={"Popular Instructor"}
                heading={"From Our Instructors"}></SectionTitle>

            <Marquee pauseOnHover='true'>
                <div className='grid grid-cols-6 gap-4 mt-12'>
                    {
                        instructors.slice(0, 6).map(item => <Instructor
                            key={item._id}
                            item={item}
                        ></Instructor>
                        )
                    }
                </div>
            </Marquee>
        </section>

    );
};

export default PopularInstructor;