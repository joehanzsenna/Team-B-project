import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/dashboard/sidebar.css";
import booklogo from "../../assets/logos_growth-book-icon.png";
import windows from "../../assets/frame.png";
import bookmark from "../../assets/book.png";
import people from "../../assets/people.png";
import { MdSpaceDashboard } from "react-icons/md";
import { HiOutlineBookOpen } from "react-icons/hi";
import { BsPeople} from "react-icons/bs";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const [active, setActive] = useState("");
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname === "/dashboard") {
      setActive("dashboard");
    }
    else if (location.pathname === '/mybookspage') {
      setActive("mybooks");
      
    }
    else{
      setActive('')
    }
  }, [location.pathname]);
  return (
    <div className="sidebar-container d-none d-lg-block px-3">
      <div className="logo-container">
        <Link to='/dashboard' className="sidebar-logo" ><img src={booklogo} alt="" className="w-50" /></Link>
      </div>
      <div className="features-icons d-flex">
        <Link to="/dashboard">
          <MdSpaceDashboard
            className={`fs-3 sidebarIcons ${
              active === "dashboard" ? "active1" : ""
            }`}
          />
        </Link>

        <Link to="/mybookspage">
          <HiOutlineBookOpen  className={`fs-3 sidebarIcons ${
              active === "mybooks" ? "active1" : ""
            }`} />
        </Link>
            <BsPeople className='fs-3 sidebarIcons' />
      
      </div>
    </div>
  );
};

export default Sidebar;
