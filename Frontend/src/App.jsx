import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Modul from './Pages/Modul'
// Login and Register Page
import Login from './Pages/Login'
import Register from './Pages/Register'
// Menu Setelah Login 
import DashboardMenu from './Pages/DashboardMenu'
import DashOperasi from './Pages/DashOperasi'
import DashPanen from './Pages/DashPanen'
import DashKeuangan from './Pages/DashKeuangan'
import AuthProvider from './Pages/AuthProvider'
import PrivateRoute from './Pages/PrivateRoute'

const App = () => {
  return (
    <BrowserRouter >
      <div>
      <AuthProvider>
        <Routes>
          {/* HomePage */}
          <Route path='/' element={<Home/>}/>
          {/* Modul */}
          <Route path='/modul' element={<Modul/>}/>
          {/* Login */}
          <Route path='/login' element={<Login/>}/>
          {/* Register */}
          <Route path='/register' element={<Register/>}/>
          {/* Menu setelah login */}
            <Route element={<PrivateRoute/>}>
              <Route path='/dashboard' element={<DashboardMenu/>}/>
              <Route path='/dash-operasi' element={<DashOperasi/>}/>
              <Route path='/dash-hasilpanen' element={<DashPanen/>}/>
              <Route path='/dash-keuangan' element={<DashKeuangan/>}/>
            </Route>
        </Routes>
      </AuthProvider>
      </div>
    </BrowserRouter>
  )
}

export default App
