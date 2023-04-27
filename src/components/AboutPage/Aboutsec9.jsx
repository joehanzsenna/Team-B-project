import React from 'react'
import location from "../../assets/HomePageImages/location-icon.png";
import img10 from "../../assets/HomePageImages/sec10logo.png";
import phone from "../../assets/HomePageImages/phone.png";
import map from "../../assets/HomePageImages/map.png";
import inbox from "../../assets/HomePageImages/inbox.png";
import "../../styles/Aboutpagecss/AbtSec9.css";


const Aboutsec9 = () => {
  return (
    <div>
      <div className="sec10body container ">
        <div
          className="flexbox"
          // style={{ width: "35%" }}
        >
          <img src={img10} alt="" />
          <p style={{ paddingTop: "20px" }}>
            A must read book for anyone who is exploring philosophical ideas
            through a comelling and engaging story and interested in exploring
            themes such as cultural indifference interested in exploring themes{" "}
          </p>
        </div>
        <div className="flexbox">
          <h5>
            <b style={{ color: "black", width: "5px" }}>Get in Touch with Us</b>
          </h5>
          <div className="getflex">
            <p>
              <img src={location} alt="" />{" "}
              <span style={{ color: "white" }}>..</span>1 Ogunlesi Street,
              Onipanu, Lagos
            </p>
          </div>
          <div className="getflex">
            <p>
              <img src={phone} alt="" />{" "}
              <span style={{ color: "white" }}>..</span>+234 814 6745 450
            </p>
          </div>
          <div className="getflex">
            <p>
              <img src={inbox} alt="" />{" "}
              <span style={{ color: "white" }}>..</span>support@bookers.com
            </p>
          </div>
        </div>
        <div className="flexbox">
          {" "}
          <img src={map} alt="" width="100%" height="70%" />{" "}
        </div>
      </div>
    </div>
  );
}

export default Aboutsec9