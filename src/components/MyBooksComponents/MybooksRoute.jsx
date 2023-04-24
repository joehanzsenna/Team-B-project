import React, {useState} from 'react'
// import { Link } from 'react-router-dom'
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
        {/* className={({ isActive }) => (isActive ? active)} */}
            <NavLink to='/mybookspage'
                className={whenActive === 1 ? ` active` : ' normal'}
                onClick={() => toggle(1)}
            >
                 <h4 className='routeText'>All Books</h4>
            </NavLink>
            <NavLink to='/purchasedbookspage' 
            // className='linkStyle'
                className={whenActive === 2 ? ` active` : 'normal'}
                onClick={() => toggle(2)}
            >
                    <h4 className='routeText'>PurchasedBooks</h4>
            </NavLink>
            <NavLink to='/bookmarkedbooksPage' 
            // className='linkStyle'
                className={whenActive === 3 ? ` active ` : 'normal'} 
                onClick={() => toggle(3)}
            >
                 <h4 className='routeText'>Bookmarked Books</h4>
            </NavLink>
        </div>
    </div>
  )
}

export default MybooksRoute