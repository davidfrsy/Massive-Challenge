import React, { useEffect } from 'react'
import fb from '../../Assets/rounded-fb.png'
import x from '../../Assets/twitter.png'
import wa from '../../Assets/whatsapp.png'
import Slide from '../Slide/Slide'

const AquaModulDetail = () => {

    useEffect(() => {
        const whatsappShareButton = document.getElementById('whatsapp-share');
        if (whatsappShareButton) {
            whatsappShareButton.addEventListener('click', function() {
            const url = 'https://youtu.be/UV4r-WGrOhg?si=L2opmFZWnYOZzEd7';
            const text = 'Cek link ini: ' + url;
            const whatsappUrl = 'https://api.whatsapp.com/send?text=' + encodeURIComponent(text);
            window.open(whatsappUrl, '_blank');
            });
        }
        return () => {
            if (whatsappShareButton) {
                whatsappShareButton.removeEventListener('click', function() {
                const url = 'https://youtu.be/UV4r-WGrOhg?si=L2opmFZWnYOZzEd7';
                const text = 'Cek link ini: ' + url;
                const whatsappUrl = 'https://api.whatsapp.com/send?text=' + encodeURIComponent(text);
                window.open(whatsappUrl, '_blank');
                });
            }
        };
    }, []);

  return (
    <div className='mx-auto'>
        <div className='flex flex-col justify-center'>
            <div className='py-9'>
                <h2 className='font-bold text-4xl text-center'>Aqua Care: Solusi Cerdas untuk Manajemen Perikanan Modern</h2>
            </div>
            <div className='flex justify-center'>
            <iframe 
                width="760" 
                height="415" 
                src="https://www.youtube.com/embed/UV4r-WGrOhg?si=338Q0ipsRuK9Q7Vw" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
            </iframe>
            </div>
            <div className='mx-auto max-w-5xl m-5'>
                <p className='text-justify text-2xl'>
                    Temukan bagaimana Aqua Care merevolusi 
                    manajemen perikanan dengan teknologi canggih. 
                    Video ini memperkenalkan fitur unggulan Aqua 
                    Care seperti pemantauan pakan, air, dan 
                    antibiotik secara real-time, chatbot dan 
                    pemindaian penyakit ikan berbasis AI, serta 
                    sistem informasi hasil panen yang terperinci. 
                    Saksikan bagaimana Aqua Care membantu pembudidaya 
                    ikan meningkatkan efisiensi, keberlanjutan, dan 
                    kesehatan ekosistem perairan. Aqua Care: Solusi 
                    Cerdas untuk Manajemen Perikanan Modern. <a 
                        href='https://youtu.be/UV4r-WGrOhg?si=L2opmFZWnYOZzEd7' 
                        className='text-blue-600 hover:underline'>
                        Selanjutnya...
                    </a>
                </p>
            </div>
            <div className='max-w-5xl justify-center mx-auto w-full'>
                <div className='py-4 space-y-3'>
                    <span className='text-sky-700'>Bagikan Modul Ini</span>
                    <div className='flex space-x-4'>
                        <a href="https://www.facebook.com/"><img src={fb} alt="img"  className='h-10 w-10'/></a>
                        <a href="https://x.com/home?lang=id"><img src={x} alt="img" className='h-10 w-10' /></a>
                        <a href="#"><img src={wa} alt="img" className='h-10 w-10' id='whatsapp-share'/></a>
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
