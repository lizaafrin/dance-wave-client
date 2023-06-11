// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";


import img1 from '../../assets/classic.jpg';
import img2 from '../../assets/ballet.jpg';
import img3 from '../../assets/hip-hop.jpg';
import img4 from '../../assets/salsa.jpg';
import img5 from '../../assets/samba.jpg';
import img6 from '../../assets/tapDance.jpg';


const Banner = () => {
    return (
        <div className="flex justify-center">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper relative"
            >
                <SwiperSlide><img className="" src={img1} /></SwiperSlide>
                <SwiperSlide><img className="" src={img2} /></SwiperSlide>
                <SwiperSlide><img className="" src={img3} /></SwiperSlide>
                <SwiperSlide><img className="" src={img4} /></SwiperSlide>
                <SwiperSlide><img className="" src={img5} /></SwiperSlide>
            </Swiper>
            <div className="absolute z-10 top-52 lg:top-80 w-3/4 lg:w-1/2 text-center mx-auto text-white bg-base-300 bg-opacity-50 px-10">
                <h2 className="text-5xl text-purple-500 py-10 font-bold">Welcome to DanceWave!</h2>
                <p className="pb-10 font-semibold">
                    Let danceWave be your catalyst for self-expression, artistic growth, and unforgettable memories. Get ready to ride the wave of dance and discover the joy of movement. Come join us today!"
                </p>
            </div>
        </div>
    );
};

export default Banner;