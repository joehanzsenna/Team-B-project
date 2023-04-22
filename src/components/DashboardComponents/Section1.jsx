import React from "react";
import girl from '../../assets/5883085-removebg-preview_auto_x2 1.png'
import '../../styles/dashboard/section1.css'

const Section1 = () => {
  return (
    <div className=" mt-4 container-fluid ">
      <div className="section1-container d-sm-flex justify-content-around gap-5 container align-items-center">
      <div className="discover-content d-flex justify-content-between align-items-center">
        <div className="discover-text">
          <p className="discover-header">
            Discover the Most Trending Books this Week
          </p>
          <p className="lorem-discover">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            aliquam repellat ut est, fugit enim provident quas?
          </p>
          <button className="see-now">
            See Now
          </button>
        </div>
       <div className="girl-image">
       <img src={girl} className= 'w-100' alt="" />
       </div>
      </div>
      <div className="vibrant-community">
        <div className="inner-content"><h5>Join a vibrant community of over 3000 passionate book lovers</h5>
        <button className="join">Join Now</button></div>
      </div>
      </div>
    </div>
  );
};

export default Section1;
