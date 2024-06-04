import React from 'react'
import './Header.css'
import ft_header from '../../Assets/bg-header.png'

const Header = () => {
  return (
    <div>
      <div className='header text-center pt-24 pb-20 h-cust6 '>
        <h2 className='pt-20 pb-10 py-10 font-bold text-6xl text-white' >AquaCare</h2>
        <p className='text-2xl text-white mx-8 px-10 pt-4 pb-6'>
            Website pelayanan manajemen 
            perikanan ini hadir sebagai 
            solusi bagi para pembudidaya 
            ikan pemula ataupun ahli dengan 
            fitur-fitur inovatif yang dimana 
            nantinya terdapat fitur informasi 
            tentang berbagai aspek budidaya 
            ikan serta manfaat ikan tertentu, 
            dan juga terdapat fitur yang 
            memungkinkan pengguna untuk mencatat 
            dan melacak data hasil panen dan 
            manajemen panen secara teratur. 
            Dengan demikian website ini dapat 
            meningkatkan efisiensi dan 
            kesuksesan pembudidaya ikan 
            dalam usaha mereka.
        </p>
      </div>
    </div>
  )
}

export default Header
