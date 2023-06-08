import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover';
import classicImg from '../../assets/classic bg.jpg';
import balletImg from '../../assets/ballet-bg (3).jpg';
import salsaImg from '../../assets/salsa-bg.jpg';
import hiphopImg from '../../assets/hiphop bg.jpg';
import useClass from '../../Hooks/useClass';
import ClassCategory from './ClassCategory/ClassCategory';
import SectionTitle from '../../components/Sectiontitle/SectionTitle';

const AllDanceClass = () => {
    const [classes] = useClass();
    const classic = classes.filter(item=> item.category === 'Classic');
    const ballet = classes.filter(item=> item.category === 'Ballet');
    const salsa = classes.filter(item=> item.category === 'Salsa');
    const hiphop = classes.filter(item=> item.category === 'Hip-Hop');
    return (
        <div>
            <Helmet>
                <title>DanceWave | Classic</title>
            </Helmet>
            {/* <Cover img={classicImg} title='Classic dance'></Cover> */}
            {/* <SectionTitle heading='Todays offer' subHeading={"Don't miss"}></SectionTitle> */}

            <ClassCategory items={classic} title='Classic' img={classicImg}></ClassCategory>
            <ClassCategory items={ballet} title='Ballet' img={balletImg}></ClassCategory>
            <ClassCategory items={salsa} title='Salsa' img={salsaImg}></ClassCategory>
            <ClassCategory items={hiphop} title='Hip-Hop' img={hiphopImg}></ClassCategory>
           
        </div>
    );
};

export default AllDanceClass;