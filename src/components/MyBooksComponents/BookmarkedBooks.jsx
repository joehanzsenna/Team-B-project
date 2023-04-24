import React, { useState } from 'react'
import { BookmarkedArray } from './MybooksDB'
import { AiFillStar } from 'react-icons/ai'
import { BsSuitHeartFill } from 'react-icons/bs'
import { BsSuitHeart } from 'react-icons/bs'
import MybooksRoute from './MybooksRoute'

const BookmarkedBooks = () => {
  const [bookmarkedContents] = useState(BookmarkedArray)
  const [like, setLike] = useState(false)

  return (
    <div>
        <MybooksRoute/>
      <div className='MybooksSection1-cards'>

          {bookmarkedContents.map((BookmarkedArray) => {
            const { id, Imgs, title, rating, name, price, Like } = BookmarkedArray
            return (
              <div className='MybooksSection1-card' key={id}>
                <img src={Imgs} alt="" className='MybooksSection1-cards-img' />
                <div className='cards-innerTitle'>
                  <h6>{title}</h6>
                  <h6><AiFillStar className='cards-innerStarIcon' /> {rating}</h6>
                </div>
                <h6>{name}</h6>
                <div className='cards-innerPrice'>
                  {like ? <BsSuitHeartFill name={id} onClick={(e) => {
                    if (e.currentTarget.name === id) {
                      setLike(true)
                    }
                  }} /> : <BsSuitHeart name={id} onClick={(e) =>
                    e.currentTarget.name === id ? setLike(true) : setLike(false)
                  } />}
                  <h3>{Like}</h3>
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