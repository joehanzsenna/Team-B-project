import React from 'react'
import { AiOutlineRight } from 'react-icons/ai';
import { AiOutlineLeft } from 'react-icons/ai';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";

import cardImg1 from '../../assets/HomePageImages/card-img1.jpg'
import cardImg2 from '../../assets/HomePageImages/card-img2.jpg'
import cardImg3 from '../../assets/HomePageImages/card-img3.jpg'
import { AiTwotoneStar } from 'react-icons/ai';

const HomeSection2 = () => {

    // const paginationRef = React.useRef(null);

  return (
    <div className='HomeSection2 container'>
        <div className='best-contents'>
            <h1 className='header2'>Best Sellers</h1>
            <p>A must read book for anyone who is exploring philosophical ideas through a comelling and engaging story and interested in exploring themes such as cultural indifference</p>
        </div>
        <Swiper className='best-cards'
        slidesPerView={3}
        spaceBetween={30}
        // pagination= {
        //     {el: '.swiper-pagination',
        //     renderCustom: function (swiper, current, total) {
        //       paginationRef.current.innerHTML = current + ' of ' + total;
        //     },}
        // }
        pagination={{ clickable: true,}} 
        navigation={{
            nextEl:'.swiper-button-nexting',
            prevEl:'.swiper-button-preview',
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
        modules={[Pagination,Navigation]}
        >
            <SwiperSlide className='best-card'>
                <img src={cardImg1} alt="" className='best-card-img'/>
                <div className='best-card-inner'>
                    <div className='best-card-inner_texts'>
                        <h5>Crack the Code</h5>
                        <div><AiTwotoneStar className='starIcon'/> 4.3</div>
                    </div>
                    <div className='best-card-inner_spans'>
                        <span>Biography</span>
                        <span>Racism</span>
                        <span>Western</span>
                    </div>
                    <p className='best-card-innerText'>A must read book for anyone who is exploring philosophical ideas through a comelling and engaging story and interested in exploring themes such as cultural indifference</p>
                    <div className='best-card-inner_btn'>
                        <button className='best-card-inner_btns'>Buy Book</button>
                        <h6>N7,500 <del className='best-card-innerDel'>N8,600</del></h6>
                    </div>
                </div>

            </SwiperSlide>
            <SwiperSlide className='best-card'>
                <img src={cardImg2} alt="" className='best-card-img'/>
                <div className='best-card-inner'>
                    <div className='best-card-inner_texts'>
                        <h5>Sunset Kiss</h5>
                        <h6><AiTwotoneStar className='starIcon'/> 4.3</h6>
                    </div>
                    <div className='best-card-inner_spans'>
                        <span>Biography</span>
                        <span>Racism</span>
                        <span>Western</span>
                    </div>
                    <p className='best-card-innerText'>A must read book for anyone who is exploring philosophical ideas through a comelling and engaging story and interested in exploring themes such as cultural indifference</p>
                    <div className='best-card-inner_btn'>
                        <button className='best-card-inner_btns'>Buy Book</button>
                        <h6>N12,500 <del className='best-card-innerDel'>N8,600</del></h6>
                    </div>
                </div>

            </SwiperSlide>
            <SwiperSlide className='best-card'>
                <img src={cardImg3} alt="" className='best-card-img'/>
                <div className='best-card-inner'>
                    <div className='best-card-inner_texts'>
                        <h5>Say You’ll be Mine</h5>
                        <h6><AiTwotoneStar className='starIcon'/> 4.3</h6>
                    </div>
                    <div className='best-card-inner_spans'>
                        <span>Biography</span>
                        <span>Racism</span>
                        <span>Western</span>
                    </div>
                    <p className='best-card-innerText'>A must read book for anyone who is exploring philosophical ideas through a comelling and engaging story and interested in exploring themes such as cultural indifference</p>
                    <div className='best-card-inner_btn'>
                        <button className='best-card-inner_btns'>Buy Book</button>
                        <h6>N9,000 <del className='best-card-innerDel'>N8,600</del></h6>
                    </div>
                </div>

            </SwiperSlide>
            <SwiperSlide className='best-card'>
                <img src={cardImg3} alt="" className='best-card-img'/>
                <div className='best-card-inner'>
                    <div className='best-card-inner_texts'>
                        <h5>Say You’ll be Mine</h5>
                        <h6><AiTwotoneStar className='starIcon'/> 4.3</h6>
                    </div>
                    <div className='best-card-inner_spans'>
                        <span>Biography</span>
                        <span>Racism</span>
                        <span>Western</span>
                    </div>
                    <p className='best-card-innerText'>A must read book for anyone who is exploring philosophical ideas through a comelling and engaging story and interested in exploring themes such as cultural indifference</p>
                    <div className='best-card-inner_btn'>
                        <button className='best-card-inner_btns'>Buy Book</button>
                        <h6>N9,000 <del className='best-card-innerDel'>N8,600</del></h6>
                    </div>
                </div>

            </SwiperSlide>
            

        </Swiper>
        <div className='slider-position'>
            <div className='swiper-button-preview swipe-arrow'>
                <AiOutlineLeft className='Hsec2Icon'/>
            </div>
            <div className='swiper-button-nexting swipe-arrow'>
            <AiOutlineRight className='Hsec2Icon '/>
            </div>
            <div className='swiper-pagination pageMove'></div>
            {/* <div ref={paginationRef}></div> */}
        </div>
    </div>
  )
}

export default HomeSection2