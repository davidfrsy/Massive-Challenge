import React from 'react'
import sugi from '../../Assets/paksugi.png'
import { useAuth } from '../../Pages/AuthProvider';

const NavDash = () => {
  const auth = useAuth();

  return (
    <div className='m-5 px-10 min-w-screen-lg max-w-screen w-full'>
        <div className='navbar'>
            <div className='navbar-start'>
              
            </div>
            <div className='navbar-end'>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={sugi} alt="Tailwind CSS Navbar component"  />
                  </div>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52">
                  <li><button onClick={() => auth.logOut()}>Logout</button></li>
                </ul>
              </div>
            </div>
        </div>
    </div>
  )
}

export default NavDash
