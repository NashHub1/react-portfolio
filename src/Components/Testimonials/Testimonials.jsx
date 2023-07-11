import React from 'react'
import './Testimonials.css'

// Import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const testimonialData = [
  {
    avatar:   "https://randomuser.me/api/portraits/women/10.jpg",
    name:     "Anneke Musterfrau",
    review:   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis maiores, ducimus vero quam sed quas ullam adipisci excepturi optio in?"
  },
  {
    avatar:   "https://randomuser.me/api/portraits/men/15.jpg",
    name:     "Max Mustermann",
    review:   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis maiores, ducimus vero quam sed quas ullam adipisci excepturi optio in?"
  },
  {
    avatar:   "https://randomuser.me/api/portraits/lego/6.jpg",
    name:     "Luke Skywalker",
    review:   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis maiores, ducimus vero quam sed quas ullam adipisci excepturi optio in?"
  },
  {
    avatar:   "https://randomuser.me/api/portraits/women/2.jpg",
    name:     "Anja Musterfrau",
    review:   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis maiores, ducimus vero quam sed quas ullam adipisci excepturi optio in?"
  },
]


const Testimonials = () => {
  return (
    <section id='Testimonials'>
      <h5 >Sample reviews from clients</h5>
      <h2 >Testimonials</h2>
      <Swiper className="container testimonials_container"
            //Install Swiper modules
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          testimonialData.map(({avatar, name, review}) => {
            return (
              <SwiperSlide className="testimonial">
                <div className="client_avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5 className='client_name'>{name}</h5>
                <small className="client_review">
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
