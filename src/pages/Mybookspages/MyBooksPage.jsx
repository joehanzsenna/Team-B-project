import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DashboardLayout from '../../components/layout/DashboardLayout'
import AllBooks from '../../components/MyBooksComponents/AllBooks'
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
          <AllBooks/>
        </DashboardLayout>
    </div>
  )
}
export default MyBooksPage