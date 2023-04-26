import React, { useEffect, useState } from "react";
import "../../styles/dashboard/section2.css";
import { AiFillStar, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import axios from "axios";

const Section2 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://bookapi-3arg.onrender.com/popular")
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
    <div className="allbooks-container container-xl">
      <div className="d-flex gap-3 ps-3">
        <p></p>
        <h5>Popular Books</h5>
        <button>View all</button>
      </div>

      <div className="popular-container d-flex justify-content-center gap-3 align-items-center">
        {data.map((each) => {
          if (each.ratings >= 3) {
            return (
              <div className="">
                <div className="eachbook ">
                  <div className="image-container">
                    <img src={each.image} alt="" className="" />
                  </div>
                  <div className="text-center d-flex justify-content-between">
                    <p>{each.title}</p>
                    <div className="rating-container">
                      <AiFillStar />
                      <p>{each.ratings}</p>
                    </div>
                  </div>
                  <div className="price-like-container d-flex justify-content-between">
                    <AiOutlineHeart />
                    <p>{each.price}</p>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
      <div className="popular-container d-flex justify-content-center gap-3 align-items-center">
        {data.map((each) => {
          if (each.bestselling === true) {
            return (
              <div className="">
                <div className="eachbook ">
                  <div className="image-container">
                    <img src={each.image} alt="" className="" />
                  </div>
                  <div className="text-center d-flex justify-content-between">
                    <p>{each.title}</p>
                    <div className="rating-container">
                      <AiFillStar />
                      <p>{each.ratings}</p>
                    </div>
                  </div>
                  <div className="price-like-container d-flex justify-content-between">
                    <AiOutlineHeart />
                    <p>{each.price}</p>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Section2;
