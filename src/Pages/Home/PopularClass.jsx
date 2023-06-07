import React from 'react';
import SectionTitle from '../../components/Sectiontitle/SectionTitle';
import { useEffect } from 'react';
import { useState } from 'react';
import Class from '../Shared/Class';
import useClass from '../../Hooks/useClass';

const PopularClass = () => {
    const [classes] = useClass();
    // const [classes, setclasses]= useState([]);
    // useEffect(()=>{
    //     fetch('danceClasses.json')
    //     .then(res=> res.json())
    //     .then(data=> {
    //         const popularClass = data.filter(item => item.category === 'Ballet');
    //         setclasses(popularClass)})
          
    // }, [])
    // console.log(setclasses);
    return (
        <section>
            <SectionTitle subHeading={"Popular Classes"}
                heading={"From Our Classes"}></SectionTitle>

        <div className='grid md:grid-cols-3 gap-4'>
            {
                classes.slice(0,6).map(item => <Class
                key ={item._id}
                item={item}
                
                ></Class>)
            }
        </div>
        </section>

    );
};

export default PopularClass;