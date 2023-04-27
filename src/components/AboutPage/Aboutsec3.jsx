import React from 'react'
import { Link } from "react-router-dom";
import img_our from "../../assets/Aboutpagimg/TSimg2about.png";
import "../../styles/Aboutpagecss/AbtSec3.css";


const Aboutsec3 = () => {
  return (
    <div className="secour-body">
      {" "}
      <div className="secour-flex container">
        <div className="secour-img">
          <img src={img_our} alt="" width="100%" />
        </div>
        <div className="secour-cont">
          <h1>
            {" "}
            <b> Why Choose The Bookers</b>{" "}
          </h1>
          <p>
            <b>
              We believe that reading is a powerful tool for personal growth and
              enrichment, and we're excited to help you discover your next
              favorite read. So come on in and start exploring the wealth of
              books and inspiration that awaits you!
            </b>
          </p>
          <p>
            <Link to="/signup" className="btnour">
              Get Started
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutsec3