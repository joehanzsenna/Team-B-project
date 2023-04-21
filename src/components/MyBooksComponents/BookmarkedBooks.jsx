import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MybooksImages } from './MybooksDB'

import { AiFillStar } from 'react-icons/ai'
import { BsSuitHeartFill } from 'react-icons/bs'
import { BsSuitHeart } from 'react-icons/bs'

const BookmarkedBooks = () => {
  const [whenActive, setWhenActive] = useState(1)
  const [pics] = useState(MybooksImages)
  const [like, setLike] = useState(false)

  const toggle = (index) => {
    setWhenActive(index)
  }
  return (
    <div>
        <div className='MybooksSection1-tab'>

          <Link to='/mybookspage' className='linkStyle'>
            <li className={whenActive == 1 ? 'isActive' : ''}
            onClick={() => toggle(1)}
            >All Books</li>
          </Link>
          <Link to='/purchasedbookspage' className='linkStyle'>
            <li className={whenActive == 2 ? 'isActive' : ''}
            onClick={() => toggle(2)}
            >PurchasedBooks</li>
          </Link>
          <Link to='/bookmarkedbooksPage' className='linkStyle'>
            <li className={whenActive == 3 ? 'isActive' : ''}
            onClick={() => toggle(3)}
            >Bookmarked Books</li>
          </Link>
      </div>

      <div className='MybooksSection1-cards'>

          {pics.map((MybooksImages) => {
            const { id, Imgs, title, rating, name, price, Like } = MybooksImages
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
                  <h4>{Like}</h4>
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