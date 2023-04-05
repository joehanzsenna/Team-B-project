import React from 'react'
import Hsec5Img1 from '../../assets/Hsec5-img1.jpg'
import Hsec5Img2 from '../../assets/Hsec5-img2.jpg'
import Hsec5Img3 from '../../assets/Hsec5-img3.jpg'
import Hsec5Img4 from '../../assets/Hsec5-img4.jpg'
import Hsec5Img5 from '../../assets/Hsec5-img5.jpg'
import Hsec5LeftArrow from '../../assets/leftArrowIcon.svg'
import Hsec5RightArrow from '../../assets/rightArrowIcon.svg'

const HomeSection5 = () => {
  return (
    <div className='HomeSection5 container'>
        <div className='HomeSection5-contents'>
            <div className='HomeSection5-texts'>
                <h2 className='header2'>Recommended Books</h2>
                <p className='text2'>A must read book for anyone who is exploring philosophical ideas through a comelling and engaging story and interested in exploring themes such as cultural indifference</p>
            </div>
            <div className='HomeSection5-Books'>
                <div className='HomeSection5-Books_icon'>
                    <img src={Hsec5LeftArrow} alt="" />
                </div>
                <div className='HomeSection5-Books_item'>
                    <img src={Hsec5Img1} alt="" className='HomeSections5-Books_img lastSides'/>
                </div>
                <div className='HomeSection5-Books_item'>
                    <img src={Hsec5Img2} alt="" className='HomeSections5-Books_img secondMiddle'/>
                </div>
                <div className='HomeSection5-Books_item'>
                    <img src={Hsec5Img3} alt="" className='HomeSections5-Books_img middleSide'/>
                </div>
                <div className='HomeSection5-Books_item'>
                    <img src={Hsec5Img4} alt="" className='HomeSections5-Books_img secondMiddle'/>
                </div>
                <div className='HomeSection5-Books_item'>
                    <img src={Hsec5Img5} alt="" className='HomeSections5-Books_img lastSides'/>
                </div>
                <div className='HomeSection5-Books_icon'>
                    <img src={Hsec5RightArrow} alt="" />
                </div>
            </div>
            <div className='HomeSection5-Books_info'>
                <h5>Hiking Journey</h5>
                <h6>N7,500</h6>
                <button className='btn3'>Buy Book</button>
            </div>
        </div>
    </div>
  )
}

export default HomeSection5