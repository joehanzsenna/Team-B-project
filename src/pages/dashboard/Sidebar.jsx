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
      <div onClick={() => console.log('i was clicked')} className="logo-container" >

          <img src={booklogo} alt="" className="sidebar-logo" />
      </div>
      {/* <div className="features-icons d-flex">
        <Link to='/dashboard'>
        <img src={windows} alt="" />
        </Link>

        <Link to='/purchasedbookspage' >
          <img src={bookmark} alt="" />
        </Link>
       
        <img src={people} alt="" />
      </div> */}
    </div>
  );
};

export default Sidebar;
