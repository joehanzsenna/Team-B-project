import React from 'react'
import { BsStarFill } from 'react-icons/bs';

const RatingModal = () => {
  return (
    <div className="modal fade"
        id="signup-modal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className='modal-dialog'>
            <div className='modal-content'>
                <div className='modal-header'>

                    <div className='ratingModal'>
                        <h4>What is Your Rating ?</h4>
                        <p className='ratingText'>We believe that reading is a powerful tool for personal growth and enrichment, and we're excited to help you discover your next favorite read. </p>
                        <h4><BsStarFill className='modalStarIcon'/> 
                            <BsStarFill className='modalStarIcon'/> 
                            <BsStarFill className='modalStarIcon'/> 
                            <BsStarFill className='modalStarIcon'/> 
                            <BsStarFill className='modalStarIcon'/></h4>
                        {/* <BsStarFill/> */}
                        <button className='ratingSubmitBtn'>Submit</button>
                        <h6>Not Interested</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RatingModal