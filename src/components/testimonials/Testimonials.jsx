import React from 'react'
import './testimonials.css';
import AVT1 from '../../assets/avatar1.jpg';
import AVT2 from '../../assets/avatar2.jpg';
import AVT3 from '../../assets/avatar3.jpg';
import AVT4 from '../../assets/avatar4.jpg';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

const data = [
    {
        avatar: AVT1,
        name: 'Nguyễn Tấn Hải',
        review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, corporis voluptates, esse id dolorum illo reprehenderit est, accusamus omnis quasi eos ducimus quis consequuntur quisquam nostrum voluptatibus ipsa excepturi odio.'
    },
    {
        avatar: AVT2,
        name: 'Thái Trần Kiều Diễm',
        review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, corporis voluptates, esse id dolorum illo reprehenderit est, accusamus omnis quasi eos ducimus quis consequuntur quisquam nostrum voluptatibus ipsa excepturi odio.'
    },
    {
        avatar: AVT3,
        name: 'Đoàn Quốc Đạt',
        review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, corporis voluptates, esse id dolorum illo reprehenderit est, accusamus omnis quasi eos ducimus quis consequuntur quisquam nostrum voluptatibus ipsa excepturi odio.'
    },
    {
        avatar: AVT4,
        name: 'Nguyễn Tấn Hải',
        review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, corporis voluptates, esse id dolorum illo reprehenderit est, accusamus omnis quasi eos ducimus quis consequuntur quisquam nostrum voluptatibus ipsa excepturi odio.'
    },
]


const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className='testimonial'>
                                <div className="client__avatar">
                                    <img src={avatar} alt="" />
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>
                                    {review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }


            </Swiper>
        </section>
    )
}

export default Testimonials