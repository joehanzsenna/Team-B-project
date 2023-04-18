import React from 'react'
import Section1 from '../components/DashboardComponents/Section1'
import Section2 from '../components/DashboardComponents/Section2'
import Sidebar from '../components/DashboardComponents/Sidebar'
import Topbar from '../components/DashboardComponents/Topbar'
import DashboardLayout from '../components/layout/DashboardLayout'

const Dashboard = () => {
  return (
    <div className="container">
      <DashboardLayout >
        {/* <Topbar/> */}
        {/* <Sidebar/> */}
        <Section1/>
        <Section2/>
    </DashboardLayout>
    </div>
  )
}

export default Dashboard