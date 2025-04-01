import React from 'react'
import { Link } from 'react-router-dom'
// import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='bg-sky-600 w-[100vw] h-17 flex justify-between'>
        <div className='w-30 h-18 '>
            <h1 className='text-center ml-5 mt-4.5 cursor-pointer text-blue-50 font-bold text-xl'>
              <Link to='/'>
                Track App
                </Link>
            </h1>
        </div>
      <ul className='w-200 h-18 flex justify-evenly text-1xl text-blue-50'>
        <i className='LI'>
          <Link to='/'>Home</Link>
        </i>
        <i className='LI'>
          <Link to='/add-cotent'>Add Content</Link>
        </i>
        <i className='LI'>
          <Link to='/show-cotent'>Show Content</Link>
        </i>
      </ul>
      <div className='w-50 h-18 flex justify-evenly text-blue-50'>
        <div>
            <h1 className='mt-5.5 cursor-pointer'>
              <Link to='/sigin'>LOGIN</Link>
            </h1>
        </div>
        <div>
            <h1 className='mt-5.5 cursor-pointer'>
              <Link to='/search'>Search</Link>
            </h1>
        </div>
      </div>
    </div>
  )
}

export default Navbar
