import React from 'react'
import { HiLightningBolt } from 'react-icons/hi';
import { IoMdThumbsUp } from 'react-icons/io';
import { MdOutlineLockClock } from 'react-icons/md';
import { AiTwotoneStar } from 'react-icons/ai';

const HomeSection3 = () => {
  return (
   <div className="container-fluid ourterSection3">
         <div className='HomeSection3 container'>
            <div className='HomeSection3-contents'>
                <div className='HomeSection3-item'>
                    <HiLightningBolt className='Hsec3-icon'/>
                    <h2 className='header3'>Fast Delivery</h2>
                    <p className='text2'>A must read book for anyone who is exploring philosophical ideas through a comelling an</p>
                </div>
                <div className='HomeSection3-item'>
                    <IoMdThumbsUp className='Hsec3-icon'/>
                    <h2 className='header3'>Best Quality</h2>
                    <p className='text2'>A must read book for anyone who is exploring philosophical ideas through a comelling an</p>
                </div>
                <div className='HomeSection3-item'>
                    <MdOutlineLockClock className='Hsec3-icon'/>
                    <h2 className='header3'>Secured Payment</h2>
                    <p className='text2'>A must read book for anyone who is exploring philosophical ideas through a comelling an</p>
                </div>
                <div className='HomeSection3-item'>
                    <AiTwotoneStar className='Hsec3-icon'/>
                    <h2 className='header3'>Best Ratings</h2>
                    <p className='text2'>A must read book for anyone who is exploring philosophical ideas through a comelling an</p>
                </div>
            </div>
    </div>
   </div>
  )
}

export default HomeSection3