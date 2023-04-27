import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='ErrorContainer'>
        <h2 style={{color:'red'}}>
            Oops Something is Wrong !!
        </h2>
        <Link to='/' style={{textDecoration:''}}>
            <h2 style={{color:'white'}}>
                Click here to Homepage
            </h2>
        </Link>

    </div>
  )
}

export default Error