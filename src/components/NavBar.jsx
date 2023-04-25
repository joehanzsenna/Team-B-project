import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logos_growth-book-icon.png";
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
          <Link to='/'>
            <img src={logo} alt=""  className="main-logo"/>
          </Link>
        </div>
        <ul className="menu">
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
            {/* <Link to="/signup" id="started" className="link"> */}
            <button onClick={showModal} id="started">Get Started</button>
            {/* </Link> */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
