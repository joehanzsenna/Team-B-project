import React from "react";
import { Link } from "react-router-dom";
import "../../styles/dashboard/sidebar.css";
import booklogo from "../../assets/logos_growth-book-icon.png";
import windows from "../../assets/frame.png";
import bookmark from "../../assets/book.png";
import people from "../../assets/people.png";

const Sidebar = () => {
  return (
    <div className="sidebar-container ">
      <div className="logo-container">
        <img src={booklogo} alt="" className="sidebar-logo" />
      </div>
      <div className="features-icons d-flex">
        <Link to='/dashboard'>
          <img src={windows} alt="" className="sidebarIcons"/>
        </Link>

        <Link to='/mybookspage'>
          <img src={bookmark} alt="" className="sidebarIcons"/>
        </Link>

        <img src={people} alt="" className="sidebarIcons" />
      </div>
    </div>
  );
};

export default Sidebar;
