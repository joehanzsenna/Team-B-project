import React from 'react'
import { Link } from "react-router-dom";
import logo from '../assets/HomePageImages/Bookers logo.svg'

const NavBar = () => {
  return (
    <div className='Nav container-xxl'>
        <div className='Nav-items'> 
          <div>
            <img src={logo} alt="" className='main-logo'/>
          </div>
          <ul>
              <li><Link to='/' className='link'>Home</Link></li>
              <li><Link to='/about' className='link'>About</Link></li>
              <li><Link to='/started' id='started' className='link'>Get Started</Link></li>
          </ul>
        </div>
    </div>
  )
}

export default NavBar