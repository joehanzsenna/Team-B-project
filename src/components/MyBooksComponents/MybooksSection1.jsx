import React, { useState, useEffect } from 'react'
import { PulseLoader } from 'react-spinners'
import Fetcher from './Usefetch/Fetcher'
import { MybooksImages } from './MybooksDB'
import cardImg1 from '../../assets/MybooksImages/MybooksImage01.png'
import { AiFillStar } from 'react-icons/ai'
import { BsSuitHeartFill } from 'react-icons/bs'
import { BsSuitHeart } from 'react-icons/bs'
import MybooksRoute from './MybooksRoute'

const MybooksSection1 = () => {
  const [pics] = useState(MybooksImages)
  const [like, setLike] = useState(false)
  
  const url = ' https://bookapi-3arg.onrender.com/all'
 
  const {data, isLoading, error} = Fetcher(url)


  return (
    <div className='MybooksSection1'>
        {isLoading && <PulseLoader/>}
        {error && <h2>{error.message}</h2>}
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

          {data.map((datum) => {
            const{id,title,authur, description,price,genre,ratings, image } = datum
            return(
              <div className='MybooksSection1-card' key={id}>
                <img src={image} alt="" className='MybooksSection1-cards-img'/>
                <div className='cards-innerTitle'>
                  <h6>{title}</h6>
                  <h6><AiFillStar className='cards-innerStarIcon'/> {ratings}</h6>
                </div>
                <h6>{authur}</h6>
                <div className='cards-innerPrice'> 
                  <BsSuitHeartFill className='cards-innerLikeIcon'/>
                  <h6>{price}</h6>
                </div>
              </div>
            )
          })}


        {/* {pics.map((MybooksImages) => {
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



                
                {like ? <BsSuitHeartFill name={id} onClick={() => setLike(false)} /> : <BsSuitHeart name={id} onClick={() => setLike(true)} />}
                <h6>{price}</h6>
              </div>
            </div>
          )
        })} */}
        {/* {like ? <BsSuitHeartFill name={id} onClick={(e) => {
                  if (e.currentTarget.name === id) {
                    setLike(true)
                  }
                }} /> : <BsSuitHeart name={id} onClick={(e) =>
                  e.currentTarget.name === id ? setLike(true) : setLike(false)
                } />} */}
                {/* <h4>{Like}</h4> */}
        
      </div>
    </div>
  )
}

export default MybooksSection1