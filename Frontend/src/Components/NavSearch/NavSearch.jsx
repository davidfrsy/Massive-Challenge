import React from 'react'
import logo from '../../Assets/logo-dark-blue.svg'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

const NavSearch = () => {
  return (
    <div className='drop-shadow-lg'>
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to="/">
                    <img src={logo} alt="Logo" className='h-24 py-5 px-4' />
                </Link>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control relative">
                    <input 
                        type="text" 
                        placeholder="Search" 
                        className="input input-bordered w-24 h-8 md:w-auto rounded-lg" />
                    <i className="fa fa-search absolute top-1/2 transform -translate-y-1/2 text-gray-400 right-3 "></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavSearch
