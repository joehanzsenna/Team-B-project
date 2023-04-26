import React, { useEffect, useState } from "react";
import Sidebar from "../DashboardComponents/Sidebar";
import Topbar from "../DashboardComponents/Topbar";
import "../../styles/dashboard/dashboardLayout.css";

function useWindowSize() {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  useEffect(() => {
    const handleSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);
  return size;
}

const DashboardLayout = ({ children }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [showHamburger, setShowHamburger] = useState(false);
  const [width, height] = useWindowSize();

  useEffect(() => {
    if (width <= 768) {
      setShowSearch(true);
      setShowHamburger(true);
    } else {
      setShowSearch(false);
      setShowHamburger(true);
    }
  }, [width]);

  return (
    <div className="overall">
      <div className="d-lg-flex">
        <Sidebar  />
        <div className="content-container ps-lg-4 ">
          <Topbar
            width={width}
            height={height}
            showHamburger={showHamburger}
            setShowHamburger={setShowHamburger}
            showSearch={showSearch}
            setShowSearch={setShowSearch}
          />
          <div className="childrenContainer">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
