import React from "react";
import logo from "../../Assets/logo-dark-blue.svg";
import idash from "../../Assets/dashboard.png";
import ioperate from "../../Assets/operasional.png";
import iresult from "../../Assets/hasil-panen.png";
import icash from "../../Assets/keuangan.png";
// Penyambung
import { Link, NavLink, useLocation } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="p-9 min-w-80 rounded-lg h-screen">
      <div className="p-4">
        <Link to="/">
          <img src={logo} alt="img" />
        </Link>
      </div>
      <div>
        <ul>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `navbar my-2 border rounded-lg p-4 hover:bg-blue-600 hover:text-white text-xl 
                        ${
                          isActive
                            ? "bg-blue-600 text-white"
                            : "hover:bg-blue-700"
                        }`
              }
            >
              <img src={idash} alt="img" className="pr-3" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dash-operasi"
              className={({ isActive }) =>
                `navbar my-2 border rounded-lg p-4 hover:bg-blue-600 hover:text-white text-xl 
                        ${
                          isActive
                            ? "bg-blue-600 text-white"
                            : "hover:bg-blue-700"
                        }`
              }
            >
              <img src={ioperate} alt="img" className="pr-3" />
              Operasional
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dash-hasilpanen"
              className={({ isActive }) =>
                `navbar my-2 border rounded-lg p-4 hover:bg-blue-600 hover:text-white text-xl 
                        ${
                          isActive
                            ? "bg-blue-600 text-white"
                            : "hover:bg-blue-700"
                        }`
              }
            >
              <img src={iresult} alt="img" className="pr-3" />
              Hasil Panen
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dash-keuangan"
              className={({ isActive }) =>
                `navbar my-2 border rounded-lg p-4 hover:bg-blue-600 hover:text-white text-xl 
                        ${
                          isActive
                            ? "bg-blue-600 text-white"
                            : "hover:bg-blue-700"
                        }`
              }
            >
              <img src={icash} alt="img" className="pr-3" />
              Keuangan
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
