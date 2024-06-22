import React from 'react'
import logo_polos from '../../Assets/logo-polos.png'

const About = () => {
  return (
    <div className='bg-gray-100 py-5'>
        <div className='px-9 py-5 mx-auto'>
            <div className="py-5" id="about">
                <h3 className='text-3xl font-semibold text-blue-900 text-center'>Tentang Kami</h3>
            </div>
            <div className='flex items-center mx-auto justify-center py-9'>
                <div className='px-10 py-4 block'>
                    <img src={logo_polos} alt="" className='flex items-center justify-center mx-auto py-2'/>
                    <h3 className='font-bold text text-5xl text-sky-700'>AquaCare</h3>
                </div>
                <div>
                    <p className='text-justify font-normal text-xl text-black my-auto bottom-0 pt-6 pl-5 max-w-2xl'>
                        Layanan manajemen perikanan sebagai 
                        solusi bagi pembudidaya ikan dan para 
                        peminatnya. Hadir dalam bentuk pelayanan 
                        Website dengan memberikan beberapa 
                        fitur dashboard yang memudahkan bagi para 
                        pembudidaya ikan untuk manajement 
                        operasionalnya, keuangan dan hasil panen. 
                        Dengan adanya Website ini maka dengan mudah 
                        dapat membantu berjalannya budidaya ikan. 
                        Tidak hanya memberikan layanan dalam bentuk 
                        Website, AquaCare juga menyediakan layanan 
                        dalam aplikasi Mobile
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
