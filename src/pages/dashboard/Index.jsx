import React from 'react'
import Section1 from './Section1'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

const Index = () => {
  return (
    <div className='container-xxl position-relative'>
        <Topbar/>
        <Sidebar/>
        <Section1/>
    </div>
  )
}

export default Index