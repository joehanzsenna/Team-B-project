import React from 'react'
import Section1 from '../components/DashboardComponents/Section1'
import Sidebar from '../components/DashboardComponents/Sidebar'
import Topbar from '../components/DashboardComponents/Topbar'

const Dashboard = () => {
  return (
    <div className='container-xxl position-relative index-container'>
        <Topbar/>
        <Sidebar/>
        <Section1/>
    </div>
  )
}

export default Dashboard