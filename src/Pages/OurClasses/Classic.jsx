import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover';
import coverImg from '../../assets/classic 1.jpg'
import useClass from '../../Hooks/useClass';
import ClassCategory from './ClassCategory/ClassCategory';
import SectionTitle from '../../components/Sectiontitle/SectionTitle';

const Classic = () => {
    const [classes] = useClass();
    const classic = classes.filter(item=> item.category === 'Classic');
    return (
        <div>
            <Helmet>
                <title>DanceWave | Classic</title>
            </Helmet>
            <Cover img={coverImg} title='Classic dance'></Cover>
            <SectionTitle heading='Todays offer' subHeading={"Don't miss"}></SectionTitle>

            <ClassCategory items={classic}></ClassCategory>
           
        </div>
    );
};

export default Classic;