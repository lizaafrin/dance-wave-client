import React from 'react';
import enrollImg from '../../assets/banner3.jpg';
import Cover from '../Shared/Cover';
import useClass from '../../Hooks/useClass';
import { Helmet } from 'react-helmet-async';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import EnrollClassTab from './EnrollClassTab';


const Enroll = () => {
    const [classes] = useClass();
    const categories = ['Salsa', 'Ballet', 'Classic', 'Hip-Hop'];
    const { category } = useParams();
    console.log(category);

    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    console.log(tabIndex);
    const classic = classes.filter(item => item.category === 'Classic');
    const ballet = classes.filter(item => item.category === 'Ballet');
    const salsa = classes.filter(item => item.category === 'Salsa');
    const hiphop = classes.filter(item => item.category === 'Hip-Hop');

    return (

        <div>
            <Helmet>
                <title>DanceWave | Enroll Classes</title>
            </Helmet>
            <Cover img={enrollImg} title='Enroll now'></Cover>
            {/* <div className="tabs justify-center mt-20">
                <a className="tab tab-bordered">Ballet</a>
                <a className="tab tab-bordered tab-active">Classic</a>
                <a className="tab tab-bordered">Salsa</a>
                <a className="tab tab-bordered">hip-Hop</a>
            </div> */}
            <Tabs className='mt-10 mb-10 justify-center items-center' defaultIndex={tabIndex+1} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salsa</Tab>
                    <Tab>Ballet</Tab>
                    <Tab>Classic</Tab>
                    <Tab>HipHop</Tab>
                    
                </TabList>

                <TabPanel>
                   <EnrollClassTab items={salsa}></EnrollClassTab>
                </TabPanel>
                <TabPanel>
                   <EnrollClassTab items={ballet}></EnrollClassTab>
                </TabPanel>
                <TabPanel>
                   <EnrollClassTab items={classic}></EnrollClassTab>
                </TabPanel>
                <TabPanel>
                   <EnrollClassTab items={hiphop}></EnrollClassTab>
                </TabPanel>
                
                
                
            </Tabs>
        </div>
    );
};

export default Enroll;