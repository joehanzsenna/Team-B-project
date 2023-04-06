import React from 'react'
import { Link } from "react-router-dom";
import logo from '../assets/Bookers logo.svg'

const NavBar = () => {
  return (
    <div className='Nav'>
        <div className='Nav-items'> 
          <div>
            <img src={logo} alt="" />
          </div>
          <ul>
              <li><Link to='/' className='link'>Home</Link></li>
              <li><Link to='/about' className='link'>About</Link></li>
              <li><Link to='/features' className='link'>Features</Link></li>
              <li ><Link to='/signup' id='started' className='link'>Get Started</Link></li>
          </ul>
        </div>
    </div>
  )
}

export default NavBar