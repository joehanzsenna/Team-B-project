import React from "react";
import { Link } from "react-router-dom";
import img6 from "../../assets/Aboutpagimg/TSimg1about.png";
import "../../styles/Aboutpagecss/AbtSec1.css";

const Aboutsec1 = () => {
  return (
    <div className="sec0-body">
      {" "}
      <div className="sec0con-flex container">
        <div className="sec0-cont">
          <h1>
            {" "}
            <b> The Bookers - A Passionate Community of Book Lovers</b>{" "}
          </h1>
          <p>
            <b>
              We believe that reading is a powerful tool for personal growth and
              enrichment, and we're excited to help you discover your next
              favorite read. So come on in and start exploring the wealth of
              books and inspiration that awaits you!
            </b>
          </p>
          <Link to="/signup" className="btn0">
            Get Started
          </Link>
        </div>
        <div className="sec0-img">
          <img src={img6} alt="" width="100%" />
        </div>
      </div>
    </div>
  );
};

export default Aboutsec1;
