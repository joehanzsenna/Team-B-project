import React from 'react'
import { AiOutlineRight } from 'react-icons/ai';
import { AiOutlineLeft } from 'react-icons/ai';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";

import Hsec4Img1 from '../../assets/HomePageImages/Hsec4-img1.jpg'
import Hsec4Img2 from '../../assets/HomePageImages/Hsec4-img2.jpg'
import Hsec4Img3 from '../../assets/HomePageImages/Hsec4-img3.jpg'
import Hsec4Img4 from '../../assets/HomePageImages/Hsec4-img4.png'

const HomeSection4 = () => {
  return (
    <div className='HomeSection4 container'>
        <div className='HomeSection4-contents'>
            <div className='HomeSection4-contents_header'>
                <h1 className='header2'>Special Offers</h1>
            </div>
            <Swiper className='HomeSection4-SpecialCards'
                slidesPerView={4}
                spaceBetween={10}
                pagination={{ clickable: true}}
                navigation={{
                    nextEl:'.swiper-button-nextent',
                    prevEl:'.swiper-button-prevent',
                    clickable:true,
                }}
                // breakpoints={{
                //     480:{width: 420, slidesPerView: 1},
                //     640:{width: 465, slidesPerView: 2},
                //     900: {width: 620,slidesPerView: 3},
                //     1000: {width: 835,slidesPerView: 4},
                // }}
                breakpoints= {
                    {320: {
                      slidesPerView: 1
                    },
                    375: {
                      slidesPerView: 1
                    },
                    480: {
                      slidesPerView: 2
                    },
                    768: {
                      slidesPerView: 3
                    },
                    1024: {
                      slidesPerView: 4
                    },}
                  }
                modules={[Pagination,Navigation]}
            >
                <SwiperSlide className='HomeSection4-SpecialCard' >
                    <div className='Specialcard-images'>
                        <img src={Hsec4Img1} alt="" className='Specialcard-img'/>
                        <div className='Specialcard-image_percent'>30%</div>
                    </div>
                    <div className='SpecialcardTexts'>
                        <div className='Specialcard-texts'>
                            <h6>Our Last Summer</h6>
                            <h6><span></span> 4.7</h6>
                        </div>
                        <p className='text2'>A must read book for anyone who is exploring philosophical ideas through ...See more</p>
                        <div className='Specialcard-price'>
                            <button className='btn3'>Buy Book</button>
                            <h6>N7,500<del className='Specialcard-innerDel'>N8,600</del></h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='HomeSection4-SpecialCard' >
                    <div className='Specialcard-images'>
                        <img src={Hsec4Img2} alt="" className='Specialcard-img'/>
                        <div className='Specialcard-image_percent'>30%</div>
                    </div>
                    <div className='SpecialcardTexts'>
                        <div className='Specialcard-texts'>
                            <h6>Our Last Summer</h6>
                            <h6><span></span> 4.7</h6>
                        </div>
                        <p className='text2'>A must read book for anyone who is exploring philosophical ideas through ...See more</p>
                        <div className='Specialcard-price'>
                            <button className='btn3'>Buy Book</button>
                            <h6>N7,500<del className='Specialcard-innerDel'>N8,600</del></h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='HomeSection4-SpecialCard' >
                    <div className='Specialcard-images'>
                        <img src={Hsec4Img3} alt="" className='Specialcard-img'/>
                        <div className='Specialcard-image_percent'>30%</div>
                    </div>
                    <div className='SpecialcardTexts'>
                        <div className='Specialcard-texts'>
                            <h6>Our Last Summer</h6>
                            <h6><span></span> 4.7</h6>
                        </div>
                        <p className='text2'>A must read book for anyone who is exploring philosophical ideas through ...See more</p>
                        <div className='Specialcard-price'>
                            <button className='btn3'>Buy Book</button>
                            <h6>N7,500<del className='Specialcard-innerDel'>N8,600</del></h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='HomeSection4-SpecialCard' >
                    <div className='Specialcard-images'>
                        <img src={Hsec4Img4} alt="" className='Specialcard-img'/>
                        <div className='Specialcard-image_percent'>30%</div>
                    </div>
                    <div className='SpecialcardTexts'>
                        <div className='Specialcard-texts'>
                            <h6>Our Last Summer</h6>
                            <h6><span></span> 4.7</h6>
                        </div>
                        <p className='text2'>A must read book for anyone who is exploring philosophical ideas through ...See more</p>
                        <div className='Specialcard-price'>
                            <button className='btn3'>Buy Book</button>
                            <h6>N7,500<del className='Specialcard-innerDel'>N8,600</del></h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='HomeSection4-SpecialCard' >
                    <div className='Specialcard-images'>
                        <img src={Hsec4Img4} alt="" className='Specialcard-img'/>
                        <div className='Specialcard-image_percent'>30%</div>
                    </div>
                    <div className='SpecialcardTexts'>
                        <div className='Specialcard-texts'>
                            <h6>Our Last Summer</h6>
                            <h6><span></span> 4.7</h6>
                        </div>
                        <p className='text2'>A must read book for anyone who is exploring philosophical ideas through ...See more</p>
                        <div className='Specialcard-price'>
                            <button className='btn3'>Buy Book</button>
                            <h6>N7,500<del className='Specialcard-innerDel'>N8,600</del></h6>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
            <div className='slider-position'>
                <div className='swiper-button-prevent swipe-arrow'>
                    <AiOutlineLeft className='Hsec2Icon'/>
                </div>
                <div className='swiper-button-nextent swipe-arrow'>
                    <AiOutlineRight className='Hsec2Icon'/>
                </div>
                <div className='swiper-pagination'></div>
            </div>

        </div>
    </div>
  )
}

export default HomeSection4