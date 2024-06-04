import React from 'react'
import SideNav from '../Components/SideNav/SideNav'
import HasilPanen from '../Components/Dashboard/HasilPanen'

const DashOperasi = () => {
  return (
    <div className='flex flex-row'>
        <SideNav />
        <HasilPanen />
    </div>
  )
}

export default DashOperasi
