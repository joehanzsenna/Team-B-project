import React, { useState, useEffect } from 'react'
// import { MybooksImages } from './MybooksDB'
import { AiFillStar } from 'react-icons/ai'
import { BsSuitHeartFill } from 'react-icons/bs'
import { BsSuitHeart } from 'react-icons/bs'
import axios from 'axios'
import MybooksRoute from './MybooksRoute'

const MybooksSection1 = () => {
  // const [pics] = useState(MybooksImages)
  const [like, setLike] = useState(false)
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://bookapi-3arg.onrender.com/all")
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
    <div className='MybooksSection1'>
      {/* <MybooksRoute/> */}
      <div className='MybooksSection1-cards'>
        {/* <div className='MybooksSection1-card'>
            <img src={cardImg1} alt="" className='MybooksSection1-cards-img'/>
            <div className='cards-innerTitle'>
              <h6>All This Time</h6>
              <h6><AiFillStar className='cards-innerStarIcon'/> 4.5</h6>
            </div>
            <h6>Reece James</h6>
            <div className='cards-innerPrice'>
              <BsFillSuitHeartFill className='cards-innerLikeIcon'/>
              <h6>N6.500</h6>
            </div>
          </div> */}


        {data.map((book) => {
          const { id, image, title, ratings, author, price } = book
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

export default MybooksSection1