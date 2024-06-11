import React from 'react'
import './Navbar.css'
import logo from '../../Assets/logo-dark-blue.svg'
import ilgn from "../../Assets/icon-lgn.png";
import isgn from "../../Assets/icon-sg.png";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 text-20">
                    <li><a href='#about'>Tentang Kami</a></li>
                    <li><a href='#help'>Help</a></li>
                    <li>
                    <a>Budidaya</a>
                    <ul className="p-2">
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/dash-hasilpanen">Manajemen Panen</Link></li>
                        <li><Link to="/dash-penjualan">Penjualan</Link></li>
                    </ul>
                    </li>
                </ul>
                </div>
                <a href=""><img src={logo} alt="Logo" className='h-24 py-5 px-4' /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><a href='#about'>Tentang Kami</a></li>
                <li><a href='#help'>Bantuan</a></li>
                <li>
                    <details>
                    <summary>Budidaya</summary>
                    <ul className="p-2 bg-white">
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/dash-hasilpanen">Manajemen Panen</Link></li>
                        <li><Link to="/dash-penjualan">Penjualan</Link></li>
                    </ul>
                    </details>
                </li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1 bg-white">
                        Login
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52 space-y-2">
                        <li className="border rounded-lg p-1 shadow-md hover:bg-blue-600 hover:text-white">  
                            <Link to="/register">
                                <img src={isgn} alt="img" className='w-8'/>
                                Sign Up
                            </Link>
                        </li>

                        <li className="border rounded-lg p-1 shadow-md hover:bg-blue-600 hover:text-white">
                            <Link to="/Login">
                                <img src={ilgn} alt="img" />
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
