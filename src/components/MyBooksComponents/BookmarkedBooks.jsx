import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BookmarkedArray } from './MybooksDB'
import { AiFillStar } from 'react-icons/ai'
import { BsSuitHeartFill } from 'react-icons/bs'
import { BsSuitHeart } from 'react-icons/bs'
import MybooksRoute from './MybooksRoute'

const BookmarkedBooks = () => {
  const [bookmarkedContents] = useState(BookmarkedArray)
  const [like, setLike] = useState(false)
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://bookapi-3arg.onrender.com/bookmarked")
      .then((res) => {
        console.log(res);
        console.log(res.data.books);
        let datacompile = res.data.books;
        setData(datacompile);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
        <MybooksRoute/>
      <div className='MybooksSection1-cards'>

          {data.map((items) => {
            const { id, image, title, ratings, author, price, Like } = items
            return (
              <div className='MybooksSection1-card' key={id}>
                <img src={image} alt="" className='MybooksSection1-cards-img' />
                <div className='cards-innerTitle'>
                  <h6>{title}</h6>
                  <h6><AiFillStar className='cards-innerStarIcon' /> {ratings}</h6>
                </div>
                <h6>{author}</h6>
                <div className='cards-innerPrice'>
                  {like ? <BsSuitHeartFill name={id} onClick={(e) => {
                    if (e.currentTarget.name === id) {
                      setLike(true)
                    }
                  }} /> : <BsSuitHeart name={id} onClick={(e) =>
                    e.currentTarget.name === id ? setLike(true) : setLike(false)
                  } />}
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