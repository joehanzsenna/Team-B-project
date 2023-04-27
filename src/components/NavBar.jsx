import React, { useState } from "react";
import {HiOutlineMenu} from 'react-icons/hi';
import { Link } from "react-router-dom";
import logo from "../assets/logos_growth-book-icon.png";
import SignupModal from "./modals/SignupModal";
import * as bootstrap from "bootstrap/dist/js/bootstrap";

const NavBar = () => {
  const [whenActive, setWhenActive] = useState(0)
  const [menuClick, setMenuClick] = useState('menu')
  const showModal = () => {
    let signupModal = bootstrap.Modal.getOrCreateInstance(
      document.getElementById(`signup-modal`)
    );
    signupModal.show();
  };
  const toggle = (index) => {
    setWhenActive(index)
  }

  function toggleMenu () {
    if(menuClick === 'menu'){
      setMenuClick('menu menuActive')
    }else{
      setMenuClick('menu')
    }
  }

  return (
    <div className="Nav">
      <SignupModal />
      <div className="Nav-items">
        <Link to='/' className="logo-link">
          <div className="nav-logo">
              <img src={logo} alt=""  className="main-logo"/>
              <h4 className="nav-logoText">The B<span style={{color:'#3FB2E5'}}>oo</span>kers</h4>
          </div>
        </Link>
        <HiOutlineMenu className="menuIcon" onClick={toggleMenu}/>
        <ul className={menuClick}>
          <li>
            <Link to="/" className="link"
            >
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="link"
            >
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
