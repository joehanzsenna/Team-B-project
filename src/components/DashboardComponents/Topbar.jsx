import React, { useEffect, useState } from "react";
// import { icons } from 'react-icons'
import { FiSearch } from "react-icons/fi";
import { BsFilter } from "react-icons/bs";
import { MdOutlineSort } from "react-icons/md";
import { AiFillBell, AiOutlineDown } from "react-icons/ai";
import "../../styles/dashboard/topbar.css";
import profilePicture from "../../assets/Ellipse 23.png";
import SidebarModal from "../modals/SidebarModal";
import * as bootstrap from "bootstrap/dist/js/bootstrap";


const Topbar = ({
  showHamburger,
  setShowHamburger,
  width,
  height,
  showSearch,
  setShowSearch,
}) => {

  const showModal = () => {
    let sidebarModal = bootstrap.Modal.getOrCreateInstance(
      document.getElementById(`sidebar-modal`)
    );
    sidebarModal.show();
  };


  return (
    <div className=" topbar-container general">
      <SidebarModal/>
      <>
        height: {height} width: {width}
      </>

      <div className="container second-container">
        <div className="d-flex justify-content-between align-items-center ">
          

          <MdOutlineSort
            onClick={() => {
            showModal();
              setShowHamburger(false);
              console.log(showHamburger);
            }}
            className="fs-1 d-lg-none "
          />
            <header className="fs-5 header-text d-none d-lg-block">Dashboard</header>
          <div className="search-container d-none d-lg-flex align-items-center">
            <div className="search-options d-flex align-items-center">
              <FiSearch className="search-icon" />
              <input type="text" placeholder="Search for book.." />
            </div>
            <div className="other-icons">
              <BsFilter className="filter-icon" />
              <AiFillBell className="bell-icon" />
            </div>
          </div>
          <div className="d-flex justify-content-center align-item-center profile-details">
            {showSearch ? (
              <FiSearch className="fs-1 mt-2 me-2 mobile-search w-100" />
            ) : (
              ""
            )}
            <img src={profilePicture} alt="" className="profile-picture mt-2" />
            <p className="profile-name mt-3 d-none d-lg-block">
              Alexandra Dayo
            </p>
            <AiOutlineDown className="down-icon d-none d-lg-block " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
