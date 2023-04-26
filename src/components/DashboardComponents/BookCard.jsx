import React from 'react'
import { AiFillStar, AiFillHeart, AiOutlineHeart } from "react-icons/ai";


const BookCard = ({each}) => {
  return (
    <div className="each-container">
    <div className="eachbook ">
      <div className="image-container">
        <img src={each.image} alt="" className="" />
      </div>
      <div className=" d-flex justify-content-between">
        <p className='booktitle'>{(each.title).slice(0,15)}...</p>
        <div className="rating-container d-flex">
          <AiFillStar className='mt-1' />
          <p className='text-dark ps-2 m-0'>{each.ratings}</p>
        </div>
      </div>
        <p className='bookauthor'>{each.author}</p>
      <div className="price-like-container d-flex justify-content-between">
        <AiOutlineHeart className='likeicon' />
        <p className='bookprice'>N{each.price}</p>
      </div>
    </div>
  </div>
  )
}

export default BookCard