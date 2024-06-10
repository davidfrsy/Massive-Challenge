import React from "react";
import SideNav from "../Components/SideNav/SideNav";
import MainDash from "../Components/Dashboard/MainDash";

const DashboardMenu = () => {
  return (
    <div className="flex flex-row">
      <SideNav />
      <MainDash />
    </div>
  );
};

export default DashboardMenu;
