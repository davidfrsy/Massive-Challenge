import React from 'react'
import fb from '../../Assets/rounded-fb.png'
import x from '../../Assets/twitter.png'
import wa from '../../Assets/whatsapp.png'
import Slide from '../Slide/Slide'

const AquaModulDetail = () => {
  return (
    <div className='mx-auto'>
        <div className='flex flex-col justify-center'>
            <div className='py-9'>
                <h2 className='font-bold text-4xl text-center'>Bagaimana Cara Membudidayakan Lele Agar Cepat Panen</h2>
            </div>
            <div className='flex justify-center'>
                <iframe 
                    width="760" 
                    height="415" 
                    src="https://www.youtube.com/embed/hi1sqzVDkZ4?si=vf_aydtYtINC3790" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen>
                </iframe>
            </div>
            <div className='mx-auto max-w-5xl m-5'>
                <p className='text-justify text-2xl'>
                    Agar menghasilkan panen yang melimpah dan 
                    segar perlu adanya perencanaan yang matang 
                    dalam pemilihan bibit yang berkualitas, 
                    pengaturan nutrisi yang tepat dalam pakan, 
                    pemantauan kondisi lingkungan kolam secara 
                    berkala, serta penerapan praktik-praktik
                    budidaya yang efisien dan terkini. Selain 
                    itu, <a href='' className='text-blue-600 hover:underline'>Selanjutnya...</a>
                </p>
            </div>
            <div className='max-w-5xl justify-center mx-auto w-full'>
                <div className='py-4 space-y-3'>
                    <span className='text-sky-700'>Bagikan Modul Ini</span>
                    <div className='flex space-x-4'>
                        <a href=""><img src={fb} alt="img"  className='h-10 w-10'/></a>
                        <a href=""><img src={x} alt="img" className='h-10 w-10' /></a>
                        <a href=""><img src={wa} alt="img" className='h-10 w-10' /></a>
                    </div>
                </div>
                <hr className='border-x-2 border-gray-800'/>
                <div className='py-4'>
                    <span className='text-sky-700'>Topik Terkait</span>
                    <div className='py-3'>
                        <span>#Budidaya</span>
                        <span>#Tambak</span>
                        <span>#Panen</span>
                    </div>
                </div>
            </div>
            <div>
                {/* carousel */}
                <Slide />
            </div>
        </div>
    </div>
  )
}

export default AquaModulDetail
