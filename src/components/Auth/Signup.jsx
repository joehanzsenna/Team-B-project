import React, { useRef, useState } from "react";
import "../../styles/auth/auth.css";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import googleicon from "../../assets/logos_google-icon.png";




const Signup = () => {
  const [show, setShow] = useState(false);
  const [confirm, setConfirm] = useState(false);
  return (
    <div className="signup-container container">
      <div className="container" id="signup">
        <div>
          <form action="">
            <div className="mb-3">
              <label htmlFor="Username" className="d-block">
                Username
              </label>

              <input type="text" placeholder="John Doe" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="d-block">
                Email Address
              </label>

              <input type="email" placeholder="example@email.com" />
            </div>
            <div>
              <label htmlFor="password" className="d-block">
                Create a Password
              </label>
              <div className="eyediv">
                <input
                  type={show ? "text" : "password"}
                  placeholder="must be 10 characters"
                />
                {show ? (
                  <AiFillEye
                    className="show-eye"
                    onClick={() => {
                      setShow(!show);
                    }}
                  />
                ) : (
                  <AiFillEyeInvisible
                    className="show-eye"
                    onClick={() => {
                      setShow(!show);
                    }}
                  />
                )}
              </div>
              <div className="mt-3">
                <label htmlFor="password" className="d-block">
                Confirm Password
              </label>
              <div className="eyediv">
                <input
                  type={confirm ? "text" : "password"}
                  placeholder=""
                />
                {confirm ? (
                  <AiFillEye
                    className="show-eye"
                    onClick={() => {
                      setConfirm(!confirm);
                    }}
                  />
                ) : (
                  <AiFillEyeInvisible
                    className="show-eye"
                    onClick={() => {
                      setConfirm(!confirm);
                    }}
                  />
                )}
              </div></div>
              <button className="d-block continue-button">Sign up</button>
              <div className="line mt-4">
                <span className="or">or</span>
              </div>
              <button className="google-btn">
                {" "}
                <img src={googleicon} alt="" />
                Continue with Google
              </button>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup
