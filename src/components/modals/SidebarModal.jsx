import React, { useState, useEffect } from "react";
import "../../styles/dashboard/dashboardLayout.css";
import "../../styles/dashboard/sidebar.css";
import booklogo from "../../assets/logos_growth-book-icon.png";
import windows from "../../assets/frame.png";
import bookmark from "../../assets/book.png";
import people from "../../assets/people.png";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { HiOutlineBookOpen } from "react-icons/hi";
import { BsPeople } from "react-icons/bs";

const SidebarModal = () => {
  const [active, setActive] = useState("");
  const location = useLocation();

  function refreshPage() {
    window.location.reload(true);
  }

  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname === "/dashboard") {
      setActive("dashboard");
    } else if (location.pathname === "/mybookspage") {
      setActive("mybooks");
    } else {
      setActive("");
    }
  }, [location.pathname]);

  return (
    <div>
      {/* <!-- Modal --> */}
      <div
        class="modal left fade"
        id="sidebar-modal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content mobile-modal">
            <div class="modal-body mobile-body">
              <div className="modal-sidebar-container">
                <div className="modal-logo-container">
                  <Link to="/dashboard">
                    <img
                      src={booklogo}
                      alt=""
                      className="modal-sidebar-logo"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </Link>
                </div>
                <div className="features-icons d-flex">
                  <div className="d-flex gap-2">
                    <Link to="/dashboard">
                      <MdSpaceDashboard
                        className={`fs-3 sidebarIcons w-75 ${
                          active === "dashboard" ? "active1" : ""
                        }`}
                        data-bs-dismiss="modal"
                      />
                    </Link>
                    <p className="sidetext">Dashboard</p>
                  </div>
                  <div className="d-flex gap-2">
                    <Link to="/mybookspage">
                      <HiOutlineBookOpen
                        className={`fs-3 sidebarIcons w-75 ${
                          active === "mybooks" ? "active1" : ""
                        }`}
                        data-bs-dismiss="modal"
                      />
                    </Link>
                    <p className="sidetext">my Books</p>
                  </div>
                  <div className="d-flex gap-2">
                    <BsPeople className="fs-3 sidebarIcons" />
                    <p className="sidetext">community</p>

                  </div>
                  <IoMdNotificationsOutline className="fs-3 sidebarIcons" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarModal;
