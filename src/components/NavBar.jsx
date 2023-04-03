import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className='Nav'>
        <div className='Nav-items'> 
          <div>
            logo
          </div>
          <ul>
              <li><Link to='/' className='link'>Home</Link></li>
              <li><Link to='/contacts' className='link'>Contacts</Link></li>
              <li><Link to='/about' className='link'>About Us</Link></li>
              <li><Link to='/blog' className='link'>Blog</Link></li>
              <li><Link to='/general' className='link'>General</Link></li>
          </ul>
        </div>
    </div>
  )
}

export default NavBar