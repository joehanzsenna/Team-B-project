import React, { useState } from 'react'
import { Images } from './Hsec5DB'
import { HiArrowRight } from 'react-icons/hi';
import { HiArrowLeft } from 'react-icons/hi';
import { AiOutlineLeft } from 'react-icons/ai';
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom'

import "swiper/css";
import "swiper/css/pagination";
// import'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { Pagination,EffectCoverflow,Navigation } from "swiper";


// import Hsec5LeftArrow from '../../assets/leftArrowIcon.svg'
// import Hsec5RightArrow from '../../assets/rightArrowIcon.svg'

const HomeSection5 = () => {
    const [Pics] = useState(Images);
    // const [description, setDescription] = useState('');
    // const [price, setprice] = useState('');

    
    
  return (
    <div className='HomeSection5 container'>
        <div className='HomeSection5-contents'>
            <div className='HomeSection5-texts'>
                <h2 className='header2'>Recommended Books</h2>
                <p className='text2'>A must read book for anyone who is exploring philosophical ideas through a comelling and engaging story and interested in exploring themes such as cultural indifference</p>
            </div>
            
            <Swiper className='HomeSection5-Books'
                effect={'coverflow'}
                // onSlideChange={() => 
                //     setTitle(Text.title)
                //     setDescription(Text.description),
                //     setDescription(Text.price),
                
                // }
                onSwiper={(swiper) =>
                    console.log(swiper)
                  }
                slidesPerView={5}
                centeredSlides={true}
                spaceBetween={40}
                pagination={{
                clickable: true,
                }}
                coverflowEffect={
                    {
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }
                }
                navigation={{
                    nextEl:'.swiper-button-nextail',
                    prevEl:'.swiper-button-prevail',
                    clickable:true,
                }}
                modules={[Pagination,EffectCoverflow, Navigation]}
            >
                {Images.map((Images) => {
                    const {id, img} = Images
                return(
                    <SwiperSlide key={id}>
                        <img src={img} alt="imagess" className='Hsec5Images'/>
                    </SwiperSlide>
                )
                })}
                
            </Swiper>

            <Swiper className='Hsec5Pictures-container'
            slidesPerView={'auto'}
            spaceBetween={30}
            // thumbs={{siper: activeContent}}
            // pagination={{
            //   clickable: true,
            // }}
            navigation={{
                nextEl:'.swiper-button-nextail',
                prevEl:'.swiper-button-prevail',
                clickable:true,
            }}
            modules={[Pagination,Navigation]}
          >

          {Images.map((Images) => {
            const {id, title, price} = Images
            return(
                <SwiperSlide key={id} className='Sliding-swipe'>
                  <h2>{title}</h2>
                  <h3>{price}</h3>
                    <Link to='*'>
                        <button className='btn3'>Buy Book</button>
                    </Link>
                </SwiperSlide>
            )
          })}
        </Swiper>

            <div className='iconsPosition'>
                <div className='swiper-button-prevail Hsec5Arrow rightArrow'>
                    <HiArrowLeft className='Hsec5Icon'/>
                </div>
                <div className='swiper-button-nextail Hsec5Arrow rightArrow'>
                    <HiArrowRight className='Hsec5Icon'/>
                </div>
                <div className='swiper-pagination'></div>
            </div>
                
            
            
        </div>
    </div>
  )
}

export default HomeSection5