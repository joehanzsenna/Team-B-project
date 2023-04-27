import React from "react";
import bolt from "../../assets/Aboutpagimg/sec-4-bolt.png";
import hand from "../../assets/Aboutpagimg/sec-4-hand.png";
import lock from "../../assets/Aboutpagimg/sec-4-luck.png";
import star from "../../assets/Aboutpagimg/sec-4-star.png";
import "../../styles/Aboutpagecss/AbtSec6.css";

const Aboutsec6 = () => {
  return (
    <div style={{background:'#f2fbff'}}
      className="container-fluid About6-outercolor">
      <div className="container ">
        <div
          className="secflexobody"
          style={{
            // backgroundColor: '#F1FBFF',
            padding: "5% 2% 5% 5%",
          }}
        >
          <div
            className="secflexo-cont"
            style={
              {
                // backgroundColor: "#F1FBFF",
                // paddingTop: "20px",
              }
            }
          >
            <img src={bolt} alt="" width="20%" />
            <h3>
              <b>Fast Delivery</b>
            </h3>
            <p
              style={
                {
                  // fontSize: "80%", color: "#747171"
                }
              }
            >
              A must read book for anyone who is exploring philosophical ideas
              through a comelling an
            </p>
            {/* <img src={hand} alt="" width="30%" /> */}
          </div>
          <div
            className="secflexo-cont"
            // style={{
            //   paddingTop: "20px",
            // }}
          >
            <h4>
              <img src={hand} alt="" width="20%" />
            </h4>
            <h3>
              <b>Best Quality</b>
            </h3>
            <p
              style={
                {
                  // fontSize: "80%", color: "#747171"
                }
              }
            >
              A must read book for anyone who is exploring philosophical ideas
              through a comelling an
            </p>
            {/* <img src={star} alt="" width="30%" /> */}
          </div>
          <div
            className="secflexo-cont"
            // style={{
            //   paddingTop: "20px",
            // }}
          >
            <h4>
              <img src={lock} alt="" width="20%" />
            </h4>
            <h3>
              <b>Secured Payment</b>
            </h3>
            <p
              style={
                {
                  // fontSize: "80%", color: "#747171"
                }
              }
            >
              A must read book for anyone who is exploring philosophical ideas
              through a comelling an
            </p>
            {/* <img src={oursocial} alt="" width="30%" /> */}
          </div>

          <div
            className="secflexo-cont"
            // style={{
            //   paddingTop: "20px",
            // }}
          >
            <h4>
              <img src={star} alt="" width="20%" />
            </h4>
            <h3>
              <b>Best Ratings</b>
            </h3>
            <p
              style={
                {
                  // fontSize: "80%", color: "#747171"
                }
              }
            >
              A must read book for anyone who is exploring philosophical ideas
              through a comelling an
            </p>
            {/* <img src={oursocial} alt="" width="30%" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutsec6;
