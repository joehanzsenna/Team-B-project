import React from 'react'
import { AiOutlineRight } from 'react-icons/ai';
import { AiOutlineLeft } from 'react-icons/ai';
import {Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation} from 'swiper';


import HSec7CircleImg1 from '../../assets/HomePageImages/circleImage01.svg'
import HSec7CircleImg2 from '../../assets/HomePageImages/circleImage02.svg'
import HSec7CircleImg3 from '../../assets/HomePageImages/circleImage03.svg'
import { AiTwotoneStar } from 'react-icons/ai';

const HomeSection7 = () => {
  return (
    <div className='HomeSection7 container'>
        <div className='HomeSection7-contents'>
            <div>
                <h2 className='header2'>Hear from our Happy Readers</h2>
            </div>
            <Swiper className='HomeSec7-ietms'
                 modules={[Navigation, Pagination,]}
                 spaceBetween={10}
                 loop={false}
                 navigation={{
                    nextEl:'.swiper-button-nextest',
                    prevEl:'.swiper-button-prevest',
                    clickable:true,
                }}
                breakpoints= {
                    {320: {
                      slidesPerView: 1
                    },
                    375: {
                      slidesPerView: 1
                    },
                    480: {
                      slidesPerView: 1
                    },
                    768: {
                      slidesPerView: 2
                    },
                    1024: {
                      slidesPerView: 3
                    },}
                  }
                //  pagination={{ clickable: false }}
                
            >
                <SwiperSlide className='HomeSection7-items-profile'>
                    <img src={HSec7CircleImg1} alt="" className='H7Section-img'/>
                    <p className='text2 readers-text'>A must read book for anyone who is exploring philosophical ideas through a comelling and engaging story and interested in exploring themes such as cultural indifference interested in exploring themes </p>
                    <h3 className='header3'>Adumeta Chinedu</h3>
                    <div className='HomeSection7-items-inner'>
                        <p className='text2'>Ui Designer, Apple Inc</p>
                        <h3 className='header3'><AiTwotoneStar className='starIcon'/>4.2</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='HomeSection7-items-profile'>
                    <img src={HSec7CircleImg2} alt="" className='HSec7Images'/>
                    <p className='text2'>A must read book for anyone who is exploring philosophical ideas through a comelling and engaging story and interested in exploring themes such as cultural indifference interested in exploring themes </p>
                    <h3 className='header3'>Alisha Gazel</h3>
                    <div className='HomeSection7-items-inner'>
                        <p className='text2'>UX Writer, Google</p>
                        <h3 className='header3'><AiTwotoneStar className='starIcon'/>4.6</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='HomeSection7-items-profile'>
                    <img src={HSec7CircleImg3} alt="" className='HSec7Images'/>
                    <p className='text2'>A must read book for anyone who is exploring philosophical ideas through a comelling and engaging story and interested in exploring themes such as cultural indifference interested in exploring themes </p>
                    <h3 className='header3'>Sheriff Baba T</h3>
                    <div className='HomeSection7-items-inner'>
                        <p className='text2'>Front end Developer AirBnB</p>
                        <h3 className='header3'><AiTwotoneStar className='starIcon'/>3.5</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='HomeSection7-items-profile'>
                    <img src={HSec7CircleImg3} alt="" className='HSec7Images'/>
                    <p className='text2'>A must read book for anyone who is exploring philosophical ideas through a comelling and engaging story and interested in exploring themes such as cultural indifference interested in exploring themes </p>
                    <h3 className='header3'>Sheriff Baba T</h3>
                    <div className='HomeSection7-items-inner'>
                        <p className='text2'>Front end Developer AirBnB</p>
                        <h3 className='header3'><AiTwotoneStar className='starIcon'/>4.3</h3>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className='slider-position'>
                <div className='swiper-button-prevest swipe-arrow'>
                    <AiOutlineLeft className='Hsec2Icon'/>
                </div>
                <div className='swiper-button-nextest swipe-arrow'>
                    <AiOutlineRight className='Hsec2Icon'/>
                </div>
                {/* <div className='swiper-pagination'></div> */}
            </div>
        </div>
    </div>
  )
}

export default HomeSection7