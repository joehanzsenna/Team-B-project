import React from "react";
import { Link } from "react-router-dom";
import "../../styles/dashboard/sidebar.css";
import booklogo from "../../assets/logos_growth-book-icon.png";
import windows from "../../assets/frame.png";
import bookmark from "../../assets/book.png";
import people from "../../assets/people.png";

const Sidebar = () => {
  return (
    <div className="sidebar-container d-none d-lg-block">
      <div className="logo-container">
        <img src={booklogo} alt="" className="sidebar-logo" />
      </div>
      <div className="features-icons d-flex">
        <img src={windows} alt="" />
        <img src={bookmark} alt="" />
        <img src={people} alt="" />
      </div>
    </div>
  );
};

export default Sidebar;
