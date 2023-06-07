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


import img1 from '../../../assets/ballet.jpg';
import img2 from '../../../assets/classic.jpg';
import img3 from '../../../assets/hip-hop.jpg';
import img4 from '../../../assets/salsa.jpg';
import img5 from '../../../assets/samba.jpg';
import img6 from '../../../assets/tapDance.jpg';


const Banner = () => {
    return (
        // <Carousel>
        //     <div>
        //         <img src={img1} />
        //     </div>
        //     <div>
        //         <img src={img2} />
        //     </div>
        //     <div>
        //         <img src={img3} />
        //     </div>
        //     <div>
        //         <img src={img4} />
        //     </div>
        //     <div>
        //         <img src={img5} />
        //     </div>
        //     <div>
        //         <img src={img6} />
        //     </div>
        // </Carousel>
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide><img src={img1} /></SwiperSlide>
            <SwiperSlide><img src={img2} /></SwiperSlide>
            <SwiperSlide><img src={img3} /></SwiperSlide>
            <SwiperSlide><img src={img4} /></SwiperSlide>
            <SwiperSlide><img src={img5} /></SwiperSlide>
        </Swiper>
    );
};

export default Banner;