import React, { useEffect, useState } from "react";
import Section1 from "../components/DashboardComponents/Section1";
import Section2 from "../components/DashboardComponents/Section2";
import DashboardLayout from "../components/layout/DashboardLayout";

const Dashboard = () => {
  
  return (
    <div className="container-xxl p-0">
      <DashboardLayout>
        <Section1 />
        <Section2 />
      </DashboardLayout>
    </div>
  );
};

export default Dashboard;
