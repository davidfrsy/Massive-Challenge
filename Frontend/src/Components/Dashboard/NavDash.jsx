import React from 'react'
import sugi from '../../Assets/paksugi.png'
import { Link } from 'react-router-dom'
const NavDash = () => {
  return (
    <div className='m-5 px-10 min-w-screen-lg max-w-screen w-full'>
        <div className='navbar'>
            <div className='navbar-start'>
              
            </div>
            <div className="form-control relative navbar-center">
                <input 
                    type="text" 
                    placeholder="Search" 
                    className="input input-bordered w-24 h-8 md:w-auto rounded-lg" />
                <i className="fa fa-search absolute right-2 translate-y-1/2 text-gray-400"></i>
            </div>
            <div className='navbar-end'>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={sugi} alt="Tailwind CSS Navbar component"  />
                  </div>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52">
                  <li><Link to="/">Logout</Link></li>
                </ul>
              </div>
            </div>
        </div>
    </div>
  )
}

export default NavDash
