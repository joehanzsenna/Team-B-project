import React, { useState, useEffect } from 'react'
import { BookmarkedArray } from './MybooksDB'
import { AiFillStar } from 'react-icons/ai'
import { BsSuitHeartFill } from 'react-icons/bs'
import { BsSuitHeart } from 'react-icons/bs'
import MybooksRoute from './MybooksRoute'

const BookmarkedBooks = () => {
  const [bookmarkedContents] = useState(BookmarkedArray)
  const [like, setLike] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await fetch('https://bookapi-3arg.onrender.com/all')
    .then(response => response.json())
    .then(receivedData => setData(receivedData));
  }
  console.log(data);

  return (
    <div>
        <MybooksRoute/>
      <div className='MybooksSection1-cards'>

        {data.map((datum) => {
          const {id, name, price} = datum

        return(
              <div key={id}>
                <h2>{name}</h2>
                <h2>{price}</h2>
              </div>
          )
        })}

          {/* {bookmarkedContents.map((BookmarkedArray) => {
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
                      setLike(false)
                    }
                  }} /> : <BsSuitHeart name={id} onClick={(e) =>
                    e.currentTarget.name === id ? setLike(false) : setLike(true)
                  } />}
                  <h3>{Like}</h3>
                  <h6>{price}</h6>
                </div>
              </div>
            )
          })} */}
      </div>
    </div>
  )
}

export default BookmarkedBooks