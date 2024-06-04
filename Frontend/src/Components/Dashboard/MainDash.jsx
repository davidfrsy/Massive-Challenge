import React from 'react'
import NavDash from './NavDash'

const MainDash = () => {
  return (
    <div className='bg-blue-100 rounded-l-3xl w-full'>
        <div className='m-5'>
            <NavDash />
            <div className='m-5'>
                <div className='p-9 border border-gray-200 shadow-lg space-y-4 bg-white max-w-screen-xl'>
                    <h3 className='text-3xl'>Selamat Datang, Sugi!</h3>
                    <p className='text-justify text-xl max-w-5xl'>
                        Layanan manajemen perikanan 
                        sebagai solusi bagi pembudidaya 
                        ikan dan para peminatnya. Hadir 
                        dalam bentuk pelayanan Website 
                        dengan memberikan beberapa 
                        fitur dashboard yang memudahkan 
                        bagi para pembudidaya ikan.
                        </p>
                    <button className='button btn-md rounded-md shadow-md bg-blue-600 hover:bg-blue-700 text-white'>
                        Learn More
                    </button>
                </div>
            </div>
            <div className='flex space-x-5 m-5'>
                <div className='py-10 px-14 border border-gray-200 shadow-md space-y-2 bg-white'>
                    <h2 className='font-bold text-4xl'>Total</h2>
                    <p className='text-xl'>Pengeluaran</p>
                    <p className='text-2xl'>Rp. 1.000.000,-</p>
                </div>
                <div className='py-10 px-14 border border-gray-200 shadow-md space-y-2 bg-white'>
                    <h2 className='font-bold text-4xl'>Total</h2>
                    <p className='text-xl'>Hasil Panen</p>
                    <p className='text-2xl'>Rp. 1.000.000,-</p>
                </div>
                <div className='py-10 px-14 border border-gray-200 shadow-md space-y-2 bg-white'>
                    <h2 className='font-bold text-4xl'>Total</h2>
                    <p className='text-xl'>Pendapatan</p>
                    <p className='text-2xl'>Rp. 1.000.000,-</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainDash

