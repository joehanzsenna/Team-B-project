import React from 'react'
import cardImg1 from '../../assets/card-img1.jpg'
import cardImg2 from '../../assets/card-img2.jpg'
import cardImg3 from '../../assets/card-img3.jpg'

const HomeSection2 = () => {
  return (
    <div className='HomeSection2 container'>
        <div className='best-contents'>
            <h1 className='header2'>Best Sellers</h1>
            <p>A must read book for anyone who is exploring philosophical ideas through a comelling and engaging story and interested in exploring themes such as cultural indifference</p>
        </div>
        <div className='best-cards'>
            <div className='best-card'>
                <img src={cardImg1} alt="" className='best-card-img'/>
                <div className='best-card-inner'>
                    <div className='best-card-inner_texts'>
                        <h5>Crack the Code</h5>
                        <h6><span></span> 4.3</h6>
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

            </div>
            <div className='best-card'>
                <img src={cardImg2} alt="" className='best-card-img'/>
                <div className='best-card-inner'>
                    <div className='best-card-inner_texts'>
                        <h5>Sunset Kiss</h5>
                        <h6><span></span> 4.3</h6>
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

            </div>
            <div className='best-card'>
                <img src={cardImg3} alt="" className='best-card-img'/>
                <div className='best-card-inner'>
                    <div className='best-card-inner_texts'>
                        <h5>Say You’ll be Mine</h5>
                        <h6><span></span> 4.3</h6>
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

            </div>

        </div>
    </div>
  )
}

export default HomeSection2