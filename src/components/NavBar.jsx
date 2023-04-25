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
        <Link to='/' className="link">
          <div className="nav-logo">
              <img src={logo} alt=""  className="main-logo"/>
              <h4 className="nav-logoText">The B<span style={{color:'#3FB2E5'}}>oo</span>kers</h4>
          </div>
        </Link>
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
