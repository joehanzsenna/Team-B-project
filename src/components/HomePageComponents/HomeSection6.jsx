import React from 'react'
import HSec6Book from '../../assets/HomePageImages/emojione_books.svg'

const HomeSection6 = () => {
  return (
    <div className='HomeSection6 container'>
        <div className='HomeSection6-contents'>
            <img src={HSec6Book} alt="" className='HSec6Book-img' />
            <div className='HomeSection6-texts'>
                <h2 className='header2 headerSize'>Find your next favorite read from our carefully curated book collection.</h2>
                <p className='text2'>We believe that reading is a powerful tool for personal growth and enrichment, and we're excited to help you discover your next favorite read. So come on in and start exploring the wealth of books and inspiration that awaits you!</p>
                <button className='btn1'>Buy Now</button>
            </div>
        </div>
    </div>
  )
}

export default HomeSection6