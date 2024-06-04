import React from 'react'
import SideNav from '../Components/SideNav/SideNav'
import Keuangan from '../Components/Dashboard/Keuangan'

const DashOperasi = () => {
  return (
    <div className='flex flex-row'>
        <SideNav />
        <Keuangan />
    </div>
  )
}

export default DashOperasi
