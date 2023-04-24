import React,{useState} from 'react'
import { Link } from "react-router-dom";
import logo from '../assets/HomePageImages/Bookers logo.svg'
import { FiMenu } from 'react-icons/fi';


const NavBar = () => {
  const [click, setClick] = useState('menu')

  const menuToggle = () => {
    if(click === 'menu'){
      setClick('menuActive menu')
    }else{
      setClick('menu')
    }
  }
  return (
    <div className='Nav container-xxl'>
        <div className='Nav-items'> 
          <div>
            <img src={logo} alt="" className='main-logo'/>
          </div>
          <FiMenu className='menuIcon' onClick={menuToggle}/>
          <ul className={click}>
              <li><Link to='/' className='link'>Home</Link></li>
              <li><Link to='/about' className='link'>About</Link></li>
              <li><Link to='/started' id='started' className='link'>Get Started</Link></li>
          </ul>
        </div>
    </div>
  )
}

export default NavBar