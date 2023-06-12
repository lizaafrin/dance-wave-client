import React from 'react';
import SectionTitle from '../../../components/Sectiontitle/SectionTitle';
import featuredImg from '../../../assets/banner4.jpg';
import './FeaturedClass.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const FeaturedClass = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, [])
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
                subHeading={'Check it Out'}
                heading={'Join Ballet Class'}
            ></SectionTitle>
            <div className="gap-10 md:flex justify-center items-center pb-20 pt-12 px-28  rounded-e-full rounded-s-full bg-opacity-60 bg-orange-200 border-t">
                <div data-aos="flip-right">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="wave">
                        <path fill="#F1AF41" fillOpacity="1" className="wave-path" d="M0,96L80,122.7C160,149,320,203,480,197.3C640,192,800,128,960,122.7C1120,117,1280,171,1360,197.3L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
                    </svg>
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