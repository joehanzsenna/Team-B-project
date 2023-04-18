// import { Carousel } from 'bootstrap'
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css';
import'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import Hsec5Img1 from '../../assets/HomePageImages/Hsec5-img1.jpg'
import Hsec5Img2 from '../../assets/HomePageImages/Hsec5-img2.jpg'
import Hsec5Img3 from '../../assets/HomePageImages/Hsec5-img3.jpg'
import Hsec5Img4 from '../../assets/HomePageImages/Hsec5-img4.jpg'
import Hsec5Img5 from '../../assets/HomePageImages/Hsec5-img5.jpg'
// import Hsec5LeftArrow from '../../assets/leftArrowIcon.svg'
// import Hsec5RightArrow from '../../assets/rightArrowIcon.svg'

const HomeSection8 = () => {

    
  return (
    <div className='HomeSection8 container'>
        <h2>This is the carousel test section 8</h2>
        <Swiper 
            effect={'coverflow'}
            grabCursor={ true }
            centeredSlides={ true }
            loop={ false }
            slidesPerView={ 5 }
            spaceBetween={30}
            coverflowEffect={
                {
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }
            }
            // pagination={{ clickable: true }}
            pagination={{el:'.swiper-pagination', clickable: true}}
            navigation={{
                nextEl:'.swiper-button-next',
                prevEl:'.swiper-button-prev',
                clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className='swiper_container'
        >
            <SwiperSlide className='swipe-content'>
                <img src={Hsec5Img1} alt="SwipeImages" className='Swipe-images' />
            </SwiperSlide>
            <SwiperSlide className='swipe-content'>
                <img src={Hsec5Img2} alt="SwipeImages" className='Swipe-images' />
            </SwiperSlide>
            <SwiperSlide className='swipe-content'>
                <img src={Hsec5Img3} alt="SwipeImages" className='Swipe-images' />
            </SwiperSlide>
            <SwiperSlide className='swipe-content'>
                <img src={Hsec5Img4} alt="SwipeImages" className='Swipe-images' />
            </SwiperSlide>
            <SwiperSlide className='swipe-content'>
                <img src={Hsec5Img5} alt="SwipeImages" className='Swipe-images' />
            </SwiperSlide>
            <SwiperSlide className='swipe-content'>
                <img src={Hsec5Img5} alt="SwipeImages" className='Swipe-images' />
            </SwiperSlide>
            <SwiperSlide className='swipe-content'>
                <img src={Hsec5Img5} alt="SwipeImages" className='Swipe-images' />
            </SwiperSlide>
            {/* <SwiperSlide className='swipe-content'>
                <div className='swipe-item'>6</div>
            </SwiperSlide>
            <SwiperSlide className='swipe-content'>
                <div className='swipe-item'>7</div>
            </SwiperSlide>
            <SwiperSlide className='swipe-content'>
                <div className='swipe-item'>8</div>
            </SwiperSlide> */}
            
        </Swiper>
        <div className='slider-controler'>
            <div className='swiper-button-prev slider-arrow'>
                <ion-icon name='arrow-back-outline'></ion-icon>
            </div>
            <div className='swiper-button-next slider-arrow'>
            <ion-icon name='arrow-forward-outline'></ion-icon>
            </div>
            <div className='swiper-pagination'></div>
        </div>

        <div>
            <h1>container</h1>
            <p>written document </p>

        </div>
            
    </div>
  )
}

export default HomeSection8