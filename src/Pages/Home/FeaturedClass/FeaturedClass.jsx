import React from 'react';
import SectionTitle from '../../../components/Sectiontitle/SectionTitle';
import featuredImg from '../../../assets/banner4.jpg';
import './FeaturedClass.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const FeaturedClass = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
                subHeading={'Check it Out'}
                heading={'Join Ballet Class'}
            ></SectionTitle>
            <div className="gap-10 md:flex justify-center items-center pb-20 pt-12 px-28 bg-slate-500 bg-opacity-60">

                <div className="">
                    <p className='text-black'>
                        Ballet dance is a highly refined and classical form of dance that originated in the Italian Renaissance courts during the 15th century. It later developed into a distinct art form in France and Russia and has since gained worldwide popularity. Ballet is known for its graceful and fluid movements, precise technique, and expressive storytelling.</p>
                    {/* <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button> */}
                </div>
                <div data-aos="zoom-in">
                    <img className='rounded-lg' src={featuredImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default FeaturedClass;