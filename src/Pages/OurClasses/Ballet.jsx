import React from 'react';
import useClass from '../../Hooks/useClass';

const Ballet = () => {
    const [classes] = useClass();
    const ballet = classes.filter(item=> item.category === 'Ballet');
    return (
        <div>
            <Helmet>
                <title>DanceWave | Ballet</title>
            </Helmet>
            <Cover img={coverImg} title='Ballet dance'></Cover>
            <SectionTitle heading='Todays offer' subHeading={"Don't miss"}></SectionTitle>

            <ClassCategory items={ballet}></ClassCategory>
           
        </div>
    );
};

export default Ballet;