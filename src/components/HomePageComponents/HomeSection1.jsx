import React from 'react'
import girlPic from '../../assets/HomePageImages/girl-reading.svg'
import { Link } from 'react-router-dom'

const HomeSection1 = () => {
  return (
    <div className='HomeSections1 container'>
      <div className='HomeSection1-contents'>
        <div className='HomeSection1-items'>
          <h1 className='header1'>Encounter a Wealth of Books and Inspiration</h1>
          <p>We believe that reading is a powerful tool for personal growth and enrichment, and we're excited to help you discover your next favorite read. So come on in and start exploring the wealth of books and inspiration that awaits you!</p>

          <Link to='*'>
            <button className='btn1'>Buy Now</button>
          </Link>
        </div>
        <div className='girlContainer'>
          <img src={girlPic} alt="" className='girlPic'/>
        </div>
      </div>
    </div>
  )
}

export default HomeSection1