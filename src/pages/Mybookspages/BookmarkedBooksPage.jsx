import React from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import MybooksSection1 from '../../components/MyBooksComponents/MybooksSection1'
import BookmarkedBooks from '../../components/MyBooksComponents/BookmarkedBooks'

const BookmarkedBooksPage = () => {
  return (
    <div>
        <DashboardLayout>
            {/* <MybooksSection1/> */}
            <BookmarkedBooks/>
        </DashboardLayout>
    </div>
  )
}

export default BookmarkedBooksPage