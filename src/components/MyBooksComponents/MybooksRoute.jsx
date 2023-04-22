import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const MybooksRoute = () => {
    const [whenActive, setWhenActive] = useState(0)

    const toggle = (index) => {
        setWhenActive(index)
      }
  return (
    <div>
        <div className='MybooksSection1-tab'>
        {/* className={({ isActive }) => (isActive ? active)} */}
            <NavLink to='/mybookspage'
                className={whenActive == 1 ? ` active` : ' normal'}
                onClick={() => toggle(1)}
            >
                 <li className='nav-li'>All Books</li>
            </NavLink>
            <NavLink to='/purchasedbookspage' 
            // className='linkStyle'
                className={whenActive == 2 ? ` active` : 'normal'}
                onClick={() => toggle(2)}
            >
                    <li className='nav-li'>PurchasedBooks</li>
            </NavLink>
            <NavLink to='/bookmarkedbooksPage' 
            // className='linkStyle'
                className={whenActive == 3 ? ` active ` : 'normal'} 
                onClick={() => toggle(3)}
            >
                 <li className='nav-li'>Bookmarked Books</li>
            </NavLink>
        </div>
    </div>
  )
}

export default MybooksRoute