import React from 'react'
import SideNav from '../Components/SideNav/SideNav'
import Operasional from '../Components/Dashboard/Operasional'

const DashOperasi = () => {
  return (
    <div className='flex flex-row'>
        <SideNav />
        <Operasional />
    </div>
  )
}

export default DashOperasi
