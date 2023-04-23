import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/dashboard/section2.css";

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
    <div className="allbooks-container container">
      <div className="d-flex gap-3 ps-3">
        <p></p>
        <h5>Popular Books</h5>
        <button>View all</button>
      </div>

      <div className="popular-container d-flex justify-content-evenly">
        {data.map((each) => {
          if (each.ratings >= 3) {
            return (
              <div className="">
                <div className="eachbook ps-3 ">
               <div className="image-container">
               <img src={each.image} alt="" className="" />
               </div>
               <div className="writeup d-block">
               <p>{each.title}</p>
                <p>{each.author}</p>
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
