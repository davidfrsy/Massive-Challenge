import React from 'react'
import ft_mobile1 from '../../Assets/mobile1.png'
import ft_mobile2 from '../../Assets/mobile2.png'


const Layanan = () => {
  return (
    <div className='bg-white py-3'>
        <div className='grid grid-flow-col px-36 mx-auto items-center  py-16'>
            <img src={ft_mobile1} alt="" className='px-4 pb-10'/>
            <img src={ft_mobile2} alt="" className='px-4 pt-10'/>
            <div className='block mx-7 px-14 py-5 border rounded-lg shadow-lg bg-blue-900 text-white'>
                <div className='pb-10'>
                    <p>Mobile</p>
                    <h3 className='font-bold text-3xl'>Layanan Fitur Mobile</h3>
                </div>
                <div className='pb-5'>
                    <ul className='list-disc list-outside'>
                        <li>Panduan Budidaya: akses ke berbagai sumber daya digital</li>
                        <li>Scan Kesehatan Ikan : kemampuan sistem untuk menganalisis gambar ikan dan mendeteksi gejala penyakit serta memberikan diagnosis dan rekomendasi perawatan</li>
                        <li>Pengingat Perawatan Ikan : menjaga jadwal perawatan ikan yang konsisten dan memastikan pemberian pakan, penggunaan antibiotik, dan penggantian air sesuai dengan kebutuhan.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Layanan
