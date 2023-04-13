import React from 'react'
import '../../styles/dashboard/sidebar.css'
import booklogo from '../../assets/logos_growth-book-icon.png'
import windows from '../../assets/frame.png'
import bookmark from '../../assets/book.png'
import people from '../../assets/people.png'

const Sidebar = () => {
  return (
    <div className='sidebar-container '>
      <img src={booklogo} alt="" />
      <div className="features-icons d-flex">
        <img src={windows} alt="" />
        <img src={bookmark} alt="" />
        <img src={people} alt="" />
      </div>
    </div>
  )
}

export default Sidebar