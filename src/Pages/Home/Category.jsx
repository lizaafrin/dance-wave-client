import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper";
import { FreeMode, Pagination } from "swiper";
import "swiper/css/free-mode";
import "swiper/css";
import "swiper/css/pagination";

import slide1 from '../../assets/banner3.jpg';
import slide2 from '../../assets/classic 1.jpg';
import slide3 from '../../assets/tapDance.jpg';
import slide4 from '../../assets/hip-hop.jpg';
import slide5 from '../../assets/samba2.jpg';
import SectionTitle from '../../components/Sectiontitle/SectionTitle';

const Category = () => {

    return (
        <>
            <SectionTitle subHeading={"From 11.00am to 10pm"}
                heading={"Online Class"}>

            </SectionTitle>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper mb-24 mt-14"
            >
                <SwiperSlide >
                    <img src={slide1} alt="" />
                    <h3 className="text-3xl text-white text-center uppercase -mt-12">Ballet</h3>
                </SwiperSlide>
                <SwiperSlide >
                    <img src={slide2} alt="" />
                    <h3 className="text-3xl text-white text-center uppercase -mt-12">Classic</h3>
                </SwiperSlide>
                <SwiperSlide >
                    <img src={slide3} alt="" />
                    <h3 className="text-3xl text-white text-center uppercase -mt-12">Tap dance</h3>
                </SwiperSlide>
                <SwiperSlide >
                    <img src={slide4} alt="" />
                    <h3 className="text-3xl text-white text-center uppercase -mt-12">Hip-Hop</h3>
                </SwiperSlide>
                <SwiperSlide >
                    <img src={slide5} alt="" />
                    <h3 className="text-3xl text-white text-center uppercase -mt-12">Samba</h3>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Category;