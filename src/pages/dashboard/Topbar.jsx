import React from "react";
// import { icons } from 'react-icons'
import { FiSearch } from "react-icons/fi";
import { BsFilter } from "react-icons/bs";
import { AiFillBell, AiOutlineDown } from "react-icons/ai";
import "../../styles/dashboard/topbar.css";
import profilePicture from "../../assets/Ellipse 23.png";
const Topbar = () => {
  return (
    <div className=" topbar-container ">
      <div className="d-flex justify-content-around align-items-center ">
        <header className="fs-5 header-text">Dashboard</header>
        <div className="search-container d-flex align-items-center">
          <div className="search-options d-flex align-items-center">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Search for book.." />
          </div>
          <div className="other-icons">
            <BsFilter className="filter-icon" />
            <AiFillBell className="bell-icon"/>
          </div>
        </div>
        <div className="d-flex justify-content-center align-item-center profile-details">
          <img src={profilePicture} alt="" className="profile-picture mt-2" />
          <p className="profile-name mt-3">Alexandra Dayo</p>
          <AiOutlineDown className="down-icon " />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
