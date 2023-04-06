import React, { useRef, useState } from "react";
import "../../styles/auth/auth.css";
import { IoMdClose } from "react-icons/io";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

const Signup = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="signupcon">
      <div className="container" id="signup">
        <div>
          <div className="d-flex align-items-center justify-content-between">
            <h1>Sign Up</h1>
            <IoMdClose size="30px" />
          </div>
          <p>
            Enter your email address to create an account on The B
            <span>oo</span>kers{" "}
          </p>
          <form action="">
            <div className="mb-3">
              <label htmlFor="email" className="d-block">
                Email Address
              </label>
              <div className="">
                <input type="email" placeholder="example@email.com" />
              </div>
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
                    className="show"
                    onClick={() => {
                      setShow(!show);
                    }}
                  />
                ) : (
                  <AiFillEyeInvisible
                    className="show"
                    onClick={() => {
                      setShow(!show);
                    }}
                  />
                )}
              </div>
              <button className="d-block">Continue</button>
              <div className="line mt-4">
                <span className="or">or</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
