import React from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import BookmarkedBooks from '../../components/MyBooksComponents/BookmarkedBooks'

const BookmarkedBooksPage = () => {
  return (
    <div>
        <DashboardLayout>
            <BookmarkedBooks/>
        </DashboardLayout>
    </div>
  )
}

export default BookmarkedBooksPage