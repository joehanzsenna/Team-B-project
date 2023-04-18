import React from 'react'
import Sidebar from './DashboardComponents/Sidebar'
import Topbar from './DashboardComponents/Topbar'

const DashboardLayout = ({children}) => {
  return (
    <div className='container-xxl position-relative index-container'>
        <Sidebar/>
        <div className='w-75'>
            <Topbar/>
            <div>
                {children}
            </div>
        </div>
    </div>
  )
}

export default DashboardLayout