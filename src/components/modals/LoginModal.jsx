import React from "react";
import Signup from "../Auth/Signup";
import '../../styles/auth/auth.css'

const LoginModal = () => {
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
        id="login-modal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-head">
              <div >
              <h1 className="modal-title signup-text" id="exampleModalLabel">
                Login
              </h1>
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
              ></button>
            </div>
            <div className="modal-body">
                <Signup/>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal