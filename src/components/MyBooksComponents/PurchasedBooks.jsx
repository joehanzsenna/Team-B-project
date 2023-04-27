import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import { AiFillStar } from 'react-icons/ai'
import MybooksRoute from './MybooksRoute'
import RatingModal from './RatingModal'
import { BsFillBookmarkFill, BsBookmark } from 'react-icons/bs'
import * as bootstrap from "bootstrap/dist/js/bootstrap";

const PurchasedBooks = () => {
  const [books, setBooks] = useState([])

  const showRating = () => {

      let ratingModal = bootstrap.Modal.getOrCreateInstance(
        document.getElementById(`signup-modal`)
        )
        ratingModal.show()
    }
    const getBookList = async () => {
      const res = await axios.get('https://bookapi-3arg.onrender.com/purchased')
      setBooks(res.data.books)
    }

    useEffect(() => {
      getBookList()
    }, []);

    function changedBookmarkState (book) {
      let newData 
      if( book.bookmarked ) {
        newData = books.map((singleBook) => {
          if (singleBook._id === book._id) {
            return { ...book, bookmarked: false }
          } else {
            return singleBook
          }
        })
      }else {
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
      <RatingModal/>
      <div className='MybooksSection1-cards'>
          {books.map((book) => {
            const { _id, image, title, ratings, author, Like } = book
            return (
              <div className='MybooksSection1-card' key={_id}>
                <img src={image} alt="" className='MybooksSection1-cards-img' />
                <div className='cards-innerTitle'>
                  <h6>{(book.title).slice(0,15)}...</h6>
                  <h6><AiFillStar className='cards-innerStarIcon' /> {ratings}</h6>
                </div>
                <h6>{author}</h6>
                <div className='cards-innerPrice'>
                  {book?.bookmarked ? <BsFillBookmarkFill style={{color:'#3FB2E5'}}
                   name={_id} onClick={ () => 
                  {changedBookmarkState(book)}} />
                  : <BsBookmark style={{color:'#3FB2E5'}} name={_id} onClick={() => 
                  {changedBookmarkState(book)}} />}
                  {/* <h4>{Like}</h4> */}
                  <button className='btn-2' onClick={showRating}>Rate this Book</button>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default PurchasedBooks