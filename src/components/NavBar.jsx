import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/book1.png";
import SignupModal from "./modals/SignupModal";
import * as bootstrap from "bootstrap/dist/js/bootstrap";

const NavBar = () => {
  const showModal = () => {
    let signupModal = bootstrap.Modal.getOrCreateInstance(
      document.getElementById(`signup-modal`)
    );
    signupModal.show();
  };

  return (
    <div className="Nav">
      <SignupModal />
      <div className="Nav-items">
        <div>
          <img src={logo} alt="" />
        </div>
        <ul>
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="link">
              About
            </Link>
          </li>
          <li>
            <Link to="/features" className="link">
              Features
            </Link>
          </li>
          <li>
            {/* <Link to="/signup" id="started" className="link"> */}
            <button onClick={showModal}>Get Started</button>
            {/* </Link> */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
