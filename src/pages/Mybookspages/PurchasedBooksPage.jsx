import React from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import MybooksSection1 from '../../components/MyBooksComponents/MybooksSection1'
import PurchasedBooks from '../../components/MyBooksComponents/PurchasedBooks'

const PurchasedBooksPage = () => {
  return (
    <div>
        <DashboardLayout>
            {/* <MybooksSection1/> */}
            <PurchasedBooks/>
        </DashboardLayout>
    </div>
  )
}

export default PurchasedBooksPage