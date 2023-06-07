import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularClass from '../PopularClass';
import FeaturedClass from '../FeaturedClass/FeaturedClass';
import PopularInstructor from './PopularInstructor';
import Feedback from '../Feedback';
import { Helmet } from 'react-helmet-async';

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