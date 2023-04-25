import React, { useState, useEffect } from 'react'
// import { MybooksImages } from './MybooksDB'
import { AiFillStar } from 'react-icons/ai'
import { BsFillBookmarkFill, BsBookmark } from 'react-icons/bs'
import axios from 'axios'
import MybooksRoute from './MybooksRoute'

const MybooksSection1 = () => {
  const [books, setBooks] = useState([]);
  const [bookmarked, setBookmarked] = useState(null)

  const getBookLists = async () => {
    const res = await axios.get("https://bookapi-3arg.onrender.com/all")
    setBooks(res.data.books)
  }
  console.log(books);

  useEffect(() => {
    getBookLists()
  }, []);

  function changedBookmarkState(book) {
    let newData
    if (book.bookmarked) {
      newData = books.map((singleBook) => {
        if (singleBook._id === book._id) {
          return { ...book, bookmarked: false }
        } else {
          return singleBook
        }
      })
    } else {
      newData = books.map((singleBook) => {
        if (singleBook._id === book._id) {
          return { ...book, bookmarked: true }
        } else {
          return singleBook
        }
      })
    }
    console.log(newData);
    setBooks(newData)
  }



  return (
    <div className='MybooksSection1'>
      {/* <MybooksRoute/> */}
      <div className='MybooksSection1-cards'>
        {books.map((book) => {
          const { _id, image, title, ratings, author, price, liked } = book
          return (
            <div className='MybooksSection1-card' key={_id}>
              <img src={image} alt="" className='MybooksSection1-cards-img' />
              <div className='cards-innerTitle'>
                <h6>{title}</h6>
                <h6><AiFillStar className='cards-innerStarIcon' /> {ratings}</h6>
              </div>
              <h6>{author}</h6>
              <div className='cards-innerPrice'>
                {book?.bookmarked ? <BsFillBookmarkFill style={{color:'#3FB2E5'}} name={_id} onClick={() => {
                  changedBookmarkState(book)
                }} /> : <BsBookmark name={_id} style={{color:'#3FB2E5'}} onClick={() => {
                  changedBookmarkState(book)
                }} />}
                <h6>{price}</h6>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MybooksSection1