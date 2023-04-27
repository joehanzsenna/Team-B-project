import React from 'react'
import commit from "../../assets/Aboutpagimg/commit-img-flex.png";
import { Link } from "react-router-dom";
import '../../styles/Aboutpagecss/AbtSec7.css'

const Aboutsec7 = () => {
  return (
    <div className="sec0-1-body">
      {" "}
      <div className="sec0-1-flex  container">
        <div className="sec0-1-cont">
          <h1>
            {" "}
            <b>Committed to Give You the Best Service</b>{" "}
          </h1>
          <p>
            <b>
              We believe that reading is a powerful tool for personal growth and
              enrichment, and we're excited to help you discover your next
              favorite read. So come on in and start exploring the wealth of
              books and inspiration that awaits you!
            </b>
          </p>

          <div className="sec0-1-in-flex">
            <div className="sec0-1-in-flex-main">
              <div>
                <h2>
                  <b>12000</b>
                  <span style={{ color: "#3FB2E5" }}>+</span>{" "}
                  <h5
                    // style={{
                    //   fontSize: "10px",
                    //   textAlign: "center",
                    //   paddingTop: "0%",
                    // }}
                  >
                    Book Authors
                  </h5>
                </h2>
              </div>
              <div>
                <h2>
                  <b>20000</b>
                  <span style={{ color: "#3FB2E5" }}>+</span>
                  <h5
                    // style={{
                    //   fontSize: "10px",
                    //   textAlign: "center",
                    //   paddingTop: "0%",
                    // }}
                  >
                    Book readers
                  </h5>
                </h2>
              </div>
            </div>
            {/* <br /> */}
            <div className="sec0-1-in-flex-main">
              <div>
                <h2>
                  <b>35000</b>
                  <span style={{ color: "#3FB2E5" }}>+</span>{" "}
                  <h5
                    // style={{
                    //   fontSize: "10px",
                    //   textAlign: "center",
                    //   paddingTop: "0%",
                    // }}
                  >
                    Books Sold
                  </h5>
                </h2>
              </div>
              <div>
                <h2>
                  <b>14000</b>
                  <span style={{ color: "#3FB2E5" }}>+</span>
                  <h5
                    // style={{
                    //   fontSize: "10px",
                    //   textAlign: "center",
                    //   paddingTop: "0%",
                    // }}
                  >
                    Book sharers
                  </h5>
                </h2>
              </div>
            </div>
            <Link to="/signup" className="btn0-1">
              Get Started
            </Link>
          </div>
        </div>
        <div className="sec0-1-img">
          <img src={commit} alt="" width="100%" />
        </div>
      </div>
    </div>
  );
}

export default Aboutsec7