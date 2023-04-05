import React from 'react'
import Hsec4Img1 from '../../assets/Hsec4-img1.jpg'
import Hsec4Img2 from '../../assets/Hsec4-img2.jpg'
import Hsec4Img3 from '../../assets/Hsec4-img3.jpg'
import Hsec4Img4 from '../../assets/Hsec4-img4.png'

const HomeSection4 = () => {
  return (
    <div className='HomeSection4 container'>
        <div className='HomeSection4-contents'>
            <div className='HomeSection4-contents_header'>
                <h1 className='header2'>Special Offers</h1>
            </div>
            <div className='HomeSection4-SpecialCards'>
                <div className='HomeSection4-SpecialCard' >
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
                </div>
                <div className='HomeSection4-SpecialCard' >
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
                </div>
                <div className='HomeSection4-SpecialCard' >
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
                </div>
                <div className='HomeSection4-SpecialCard' >
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
                </div>

            </div>

        </div>
    </div>
  )
}

export default HomeSection4