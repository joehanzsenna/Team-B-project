import React from "react";
import Sidebar from "../DashboardComponents/Sidebar";
import Topbar from "../DashboardComponents/Topbar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="d-flex ">
      <Sidebar />
      <div className="content-container ps-5">
        <Topbar />
        <div className="childrenContainer">
            {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
