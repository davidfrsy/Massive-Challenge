import React, { useState, useEffect } from 'react';
import logo from '../../Assets/logo-dark-blue.svg'
import ilgn from "../../Assets/icon-lgn.png";
import isgn from "../../Assets/icon-sg.png";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Pages/AuthProvider';

const NavSearch = () => {
    const auth = useAuth();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Periksa apakah ada token dalam auth
        if (auth.token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [auth.token]);

    const handleLogout = () => {
        auth.logOut();
    };
    
  return (
    <div className='drop-shadow-lg'>
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to="/">
                    <img src={logo} alt="Logo" className='h-24 py-5 px-4' />
                </Link>
            </div>
            <div className="navbar-end">
                    {isLoggedIn ? 
                    (
                        <button onClick={handleLogout} className="btn m-1 bg-white">
                            Logout
                        </button>
                    ) 
                    : 
                    (
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn m-1 bg-white">
                                Login
                            </div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52 space-y-2">
                                <li className="border rounded-lg p-1 shadow-md hover:bg-blue-600 hover:text-white">
                                    <Link to="/register">
                                        <img src={isgn} alt="img" className='w-8' />
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
                    )}
                </div>
        </div>
    </div>
  )
}

export default NavSearch
