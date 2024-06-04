import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Header from '../Components/Header/Header'
import AquaModul from '../Components/AquaModul/AquaModul'
import About from '../Components/About/About'
import Layanan from '../Components/Layanan/Layanan'
import Help from '../Components/Help/Help'
import Footer from '../Components/Footer/Footer'
import Kosong from '../Components/Kosong/Kosong'
// Pindah Page

const Home = () => {
  return (
    <div className='container'>
      <div id='navbar'><Navbar /></div>
      <Header />
      <AquaModul />
      <div id='about'><About /></div>
      <Layanan />
      <div id='help'><Help /></div>
      <Kosong />
      <Footer />
    </div>
  )
}

export default Home

