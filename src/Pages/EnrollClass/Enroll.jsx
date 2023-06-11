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

            <Tabs className='mt-10 mb-10' defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="flex flex-row py-2 mb-8 justify-evenly bg-purple-100 underline underline-offset-4">
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