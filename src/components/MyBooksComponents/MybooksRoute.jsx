import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const MybooksRoute = () => {
    const [whenActive, setWhenActive] = useState(true)

    const toggle = (index) => {
        setWhenActive(index)
      }
  return (
    <div>
        <div className='MybooksSection1-tab'>

            <NavLink to='/mybookspage' className='linkStyle'>
                 <li className={whenActive == 1 ? `isActive` : ''}
                onClick={() => toggle(1)}
                >All Books</li>
            </NavLink>
            <NavLink to='/purchasedbookspage' className='linkStyle'>
                    <li className={whenActive == 2 ? `isActive` : ''}
                    onClick={() => toggle(2)}
                    >PurchasedBooks</li>
            </NavLink>
            <NavLink to='/bookmarkedbooksPage' className='linkStyle'>
                 <li className={whenActive == 3 ? `isActive` : ''}
                onClick={() => toggle(3)}
                >Bookmarked Books</li>
            </NavLink>
        </div>
    </div>
  )
}

export default MybooksRoute