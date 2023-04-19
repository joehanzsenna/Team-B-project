import React from 'react'
import DashboardLayout from '../components/layout/DashboardLayout'
import MybooksSection1 from '../components/MyBooksComponents/MybooksSection1'


const MyBooksPage = () => {
  return (
    <div>
        <DashboardLayout>
          <MybooksSection1/>
        </DashboardLayout>
    </div>
  )
}
export default MyBooksPage