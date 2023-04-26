import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/MyBooks/MyBooks.css'

const MybooksRoute = () => {
    const [whenActive, setWhenActive] = useState(0)

    const toggle = (index) => {
        setWhenActive(index)
      }
  return (
    <div>
        <div className='MybooksSection1-tab'>
            <NavLink to='/mybookspage'
                className={whenActive === 1 ? ` active` : ' normal'}
                onClick={() => toggle(1)}
            >
                 <span className='routeText'>All Books</span>
            </NavLink>
            <NavLink to='/purchasedbookspage' 
                className={whenActive === 2 ? ` active` : 'normal'}
                onClick={() => toggle(2)}
            >
                    <span className='routeText'>PurchasedBooks</span>
            </NavLink>
            <NavLink to='/bookmarkedbooksPage' 
                className={whenActive === 3 ? ` active ` : 'normal'} 
                onClick={() => toggle(3)}
            >
                 <span className='routeText'>Bookmarked Books</span>
            </NavLink>
        </div>
    </div>
  )
}

export default MybooksRoute