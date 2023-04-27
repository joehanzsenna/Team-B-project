import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { BsFillBookmarkFill, BsBookmark } from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'


const BookCard = ({each}) => {
  const [books, setBooks] = useState([]);
  const [bookmarked, setBookmarked] = useState(null)

  function changedBookmarkState(each) {
    let newData
    if (each.bookmarked) {
      newData = each.map((singleBook) => {
        if (singleBook._id === each._id) {
          return { ...each, bookmarked: false }
        } else {
          return singleBook
        }
      })
    } else {
      newData = each.map((singleBook) => {
        if (singleBook._id === each._id) {
          return { ...each, bookmarked: true }
        } else {
          return singleBook
        }
      })
    }
    console.log(newData);
    setBooks(newData)
  }

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
      
      {each?.bookmarked ? <BsFillBookmarkFill style={{color:'#3FB2E5'}} name={each._id} onClick={() => {
                  changedBookmarkState(each)
                }} /> : <BsBookmark name={each._id} style={{color:'#3FB2E5'}} onClick={() => {
                  changedBookmarkState(each)
                }} />}
        <p className='bookprice'>N{each.price}</p>
      </div>
    </div>
  </div>
  )
}

export default BookCard