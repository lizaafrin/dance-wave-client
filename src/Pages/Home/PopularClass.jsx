import React from 'react';
import SectionTitle from '../../components/Sectiontitle/SectionTitle';
import { useEffect } from 'react';
import { useState } from 'react';
import Class from '../Shared/Class';
import useClass from '../../Hooks/useClass';

const PopularClass = () => {
    const [classes] = useClass();
    const popular = classes.sort((a, b) => b.enrolledCount - a.enrolledCount);
    // console.log(popular);
    return (
        <section>
            <SectionTitle subHeading={"Popular Classes"}
                heading={"From Our Classes"}></SectionTitle>

        <div className='grid md:grid-cols-3 gap-6 mt-12'>
            {
                popular.slice(0,6).map(item => <Class
                key ={item._id}
                item={item}
                
                ></Class>)
            }
        </div>
        </section>

    );
};

export default PopularClass;