import React from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import PurchasedBooks from '../../components/MyBooksComponents/PurchasedBooks'

const PurchasedBooksPage = () => {
  return (
    <div>
        <DashboardLayout>
            <PurchasedBooks/>
        </DashboardLayout>
    </div>
  )
}

export default PurchasedBooksPage