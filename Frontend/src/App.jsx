import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Modul from './Pages/Modul'
// Login Page
import Login from './Pages/Login'
// Menu Setelah Login 
import DashboardMenu from './Pages/DashboardMenu'
import DashOperasi from './Pages/DashOperasi'
import DashPanen from './Pages/DashPanen'
import DashKeuangan from './Pages/DashKeuangan'

const App = () => {
  return (
    <BrowserRouter >
      <div>
        <Routes>
          {/* HomePage */}
          <Route path='/' element={<Home/>}/>
          {/* Modul */}
          <Route path='/modul' element={<Modul/>}/>
          {/* Login */}
          <Route path='/login' element={<Login/>}/>
          {/* Menu setelah login */}
          <Route path='/dashboard' element={<DashboardMenu/>}/>
          <Route path='/dash-operasi' element={<DashOperasi/>}/>
          <Route path='/dash-hasilpanen' element={<DashPanen/>}/>
          <Route path='/dash-keuangan' element={<DashKeuangan/>}/>

        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
