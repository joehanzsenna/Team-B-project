import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import { PurchasedArray } from './MybooksDB'
import { AiFillStar } from 'react-icons/ai'
import { BsBootstrap, BsSuitHeartFill } from 'react-icons/bs'
import { BsSuitHeart } from 'react-icons/bs'
import MybooksRoute from './MybooksRoute'
import RatingModal from './RatingModal'
import * as bootstrap from "bootstrap/dist/js/bootstrap";

const PurchasedBooks = () => {
  const [purchasedContents] = useState(PurchasedArray)
  const [like, setLike] = useState(false)
  const [data, setData] = useState([]);

  const showRating = () => {

      let ratingModal = bootstrap.Modal.getOrCreateInstance(
        document.getElementById(`signup-modal`)
        )
        ratingModal.show()
    }

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
    <div>
      <MybooksRoute/>
      <RatingModal/>
      <div className='MybooksSection1-cards'>
          {data.map((items) => {
            const { id, Image, title, ratings, author, price, Like } = items
            return (
              <div className='MybooksSection1-card' key={id}>
                <img src={Image} alt="" className='MybooksSection1-cards-img' />
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
                  <h4>{Like}</h4>
                  <h6>{price}</h6>
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