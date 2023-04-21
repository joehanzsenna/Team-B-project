import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DashboardLayout from '../../components/layout/DashboardLayout'
import MybooksSection1 from '../../components/MyBooksComponents/MybooksSection1'
import MybooksRoute from '../../components/MyBooksComponents/MybooksRoute'


const MyBooksPage = () => {
  const [whenActive, setWhenActive] = useState(1)

  const toggle = (index) => {
    setWhenActive(index)
  }

  return (
    <div>
        <DashboardLayout>
          <MybooksRoute/>
          <MybooksSection1/>
        </DashboardLayout>
    </div>
  )
}
export default MyBooksPage