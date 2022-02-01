import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SiBmw } from "react-icons/si";
import { ImAndroid } from "react-icons/im";
import { SiDaf } from "react-icons/si";
import { SiAdafruit } from "react-icons/si";
import { SiChevrolet } from "react-icons/si";
import { FaGooglePlus } from "react-icons/fa";
import { AiFillChrome } from "react-icons/ai";
import { Md4GPlusMobiledata } from "react-icons/md";
import { SiAcer } from "react-icons/si";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

import { Pagination } from "swiper";

export default function Testimonial() {
  return (
    <div className="testimonial-container">
      <div className="testimoinal-title-box">
        <div className="testimonial-title">TRUSTED BY</div>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SiBmw className="testimonial-icon" />
        </SwiperSlide>
        <SwiperSlide>
          <ImAndroid className="testimonial-icon" />
        </SwiperSlide>
        <SwiperSlide>
          <SiDaf className="testimonial-icon" />
        </SwiperSlide>
        <SwiperSlide>
          <SiAdafruit className="testimonial-icon" />
        </SwiperSlide>
        <SwiperSlide>
          <SiChevrolet className="testimonial-icon" />
        </SwiperSlide>
        <SwiperSlide>
          <FaGooglePlus className="testimonial-icon" />
        </SwiperSlide>
        <SwiperSlide>
          <AiFillChrome className="testimonial-icon" />
        </SwiperSlide>
        <SwiperSlide>
          <SiAcer className="testimonial-icon" />
        </SwiperSlide>
        <SwiperSlide>
          <Md4GPlusMobiledata className="testimonial-icon" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}


