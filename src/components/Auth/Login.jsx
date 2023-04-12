import React, { useRef, useState } from "react";
import "../../styles/auth/auth.css";
import { IoMdClose } from "react-icons/io";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import googleicon from "../../assets/logos_google-icon.png";

const Login = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="signup-container container">
      <div className="container" id="signup">
        <div>
          <form action="">
            <div className="mb-3">
              <label htmlFor="Username" className="d-block">
                Email Address
              </label>

              <input type="email" placeholder="mickietyronne@gmail.com" />
            </div>
            
            <div>
              <label htmlFor="password" className="d-block">
                Password
              </label>
              <div className="eyediv">
                <input
                  type={show ? "text" : "password"}
                  placeholder=".........."
                  className="login-input"
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
                
              <button className="d-block continue-button">Login</button>
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

export default Login;
