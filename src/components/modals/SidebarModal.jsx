import React from 'react'
import '../../styles/dashboard/dashboardLayout.css'
import "../../styles/dashboard/sidebar.css";
import booklogo from "../../assets/logos_growth-book-icon.png";
import windows from "../../assets/frame.png";
import bookmark from "../../assets/book.png";
import people from "../../assets/people.png";
import { IoMdNotificationsOutline } from "react-icons/io";



const SidebarModal = () => {
  return (
    <div>
        {/* <!-- Button trigger modal --> */}
{/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#sidebar-modal">
  Launch demo modal
</button> */}

{/* <!-- Modal --> */}
<div class="modal left fade" id="sidebar-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content mobile-modal">
      <div class="modal-body mobile-body">
      <div className="modal-sidebar-container">
      <div className="modal-logo-container">
        <img src={booklogo} alt="" className="modal-sidebar-logo" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-features-icons d-flex">
        <div className='d-flex gap-2'><img src={windows} alt="" className='' /> <p className='sidetext'>Dashboard</p></div>
        <div className='d-flex gap-2'><img src={bookmark} alt="" className='' /> <p className='sidetext'>My Books</p></div>
        <div className='d-flex gap-2'><img src={people} alt="" className='' /> <p className='sidetext'>Community</p></div>
        <div className='d-flex gap-2'><IoMdNotificationsOutline className='fs-1' /> <p className='sidetext'>Notification</p></div>
        {/* <img src={bookmark} alt="" />
        <img src={people} alt="" /> */}
      </div>
    </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default SidebarModal