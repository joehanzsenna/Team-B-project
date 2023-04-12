import React, { useState } from "react";
import Signup from "../Auth/Signup";
import Login from "../Auth/Login";
import '../../styles/auth/auth.css'

const SignupModal = () => {
  const [loginbtn, setLoginBtn] = useState(false);
  return (
    <>
      {/* <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#signup-modal"
      >
        Launch demo modal
      </button> */}

      <div
        className="modal fade"
        id="signup-modal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-head">
              <div >
              {loginbtn? <h1 className="modal-title signup-text" id="exampleModalLabel">
                Login
              </h1> : <h1 className="modal-title signup-text" id="exampleModalLabel">
                Sign Up
              </h1>}
              <p className="create-account ">
            Enter your email address to create an account on The B
            <span>oo</span>kers{" "}
          </p>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={()=>{
                  setLoginBtn(false);
                }}
                
              ></button>
            </div>
            <div className="modal-body">
                {loginbtn? <Login/> : <Signup/>}

                <div className="account-text">
                {loginbtn? "Don't Have an Account " : "Already have an Account? "} 
                {loginbtn? <button onClick={()=>{
                  setLoginBtn(false);
                }} className="login-link">Sign up</button> : <button onClick={()=>{
                  setLoginBtn(true);
                }} className="login-link">Log in</button>}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupModal;
