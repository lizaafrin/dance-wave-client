import React from 'react';
import SectionTitle from '../../components/Sectiontitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const Feedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    useEffect(() => {
        fetch('feedback.json')
            .then(response => response.json()
                .then(data => setFeedbacks(data)))

    }, [])
    return (
        <section className="my-20">
            <SectionTitle heading={'Feedback'}
                subHeading='What our Clients say'></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {/* <SwiperSlide>Slide 1</SwiperSlide>  */}

                {
                    feedbacks.map(feedback => <SwiperSlide key={feedback._id}>
                        <div className="flex flex-col items-center mx-24 my-8">
                            {/* <FaQuoteLeft className='text-orange-500 text-5xl'></FaQuoteLeft> */}
                            <img className='rounded-full w-32 h-32' src={feedback.image} alt="" />
                            <h3 className="text-2xl text-orange-400">{feedback.name}</h3>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={feedback.rating}
                                readOnly
                            />
                            <p className="py-6">{feedback.details}</p>
                        </div>

                    </SwiperSlide>)
                }

            </Swiper>

        </section>
    );
};

export default Feedback;