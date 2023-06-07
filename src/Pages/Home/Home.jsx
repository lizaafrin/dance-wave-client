import React from 'react';
import Banner from '../Home/Banner';
import Category from '../Home/Category';
import PopularClass from '../Home/PopularClass';
import FeaturedClass from '../Home/FeaturedClass/FeaturedClass';
import PopularInstructor from '../Home/PopularInstructor';
import { Helmet } from 'react-helmet-async';
import Feedback from '../Home/Feedback';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>DanceWave | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularClass></PopularClass>
            <FeaturedClass></FeaturedClass>
            <PopularInstructor></PopularInstructor>
            <Feedback></Feedback>
            
        </div>
    );
};

export default Home;