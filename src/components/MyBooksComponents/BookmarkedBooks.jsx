import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BookmarkedArray } from './MybooksDB'
import { BsFillBookmarkFill, BsBookmark } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'
import MybooksRoute from './MybooksRoute'

const BookmarkedBooks = () => {
  const [books, setBooks] = useState([]);

  const getBookList = async () => {
    const res = await axios.get('https://bookapi-3arg.onrender.com/bookmarked')
    setBooks(res.data.books)
  }
  console.log(books)

  useEffect(() => {
    getBookList()
  }, []);

  function changedBookmarkState(book){
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
    setBooks(newData)
  }

  return (
    <div>
        <MybooksRoute/>
      <div className='MybooksSection1-cards'>

          {books.map((book) => {
            const { _id, image, title, ratings, author, price, Like } = book
            return (
              <div className='MybooksSection1-card' key={_id}>
                <img src={image} alt="" className='MybooksSection1-cards-img' />
                <div className='cards-innerTitle'>
                  <h6>{title}</h6>
                  <h6><AiFillStar className='cards-innerStarIcon' /> {ratings}</h6>
                </div>
                <h6>{author}</h6>
                <div className='cards-innerPrice'>
                  {book?.bookmarked ? <BsFillBookmarkFill style={{color:'#3FB2E5'}}
                   name={_id} onClick={() => {changedBookmarkState(book)}} /> 
                   : <BsBookmark style={{color:'#3FB2E5'}} name={_id} 
                    onClick={() => {changedBookmarkState(book)}} />}
                  <h6>{price}</h6>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default BookmarkedBooks