import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/dashboard/section2.css";
import { AiFillStar, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import BookCard from "./BookCard";

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
      <div className="d-flex align-items-center  gap-3 mt-3">
        <h5 className="pt-1 fs-4 fw-1">Popular Books</h5>
        <button className="viewall-button">View all</button>
      </div>

      <div className="popular-container d-flex justify-content-start gap-5 align-items-center container-xxl">
        {data.map((each) => {
          if (each.ratings >= 3) {
            return (
              <BookCard each={each}/>
            );
          }
        })}
      </div>
      <div className="popular-container d-flex justify-content-start gap-5 align-items-center container-xxl">
        {data.map((each) => {
          if (each.bestselling === true) {
            console.log(each.title);
            return (
              <BookCard each={each}/>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Section2;
