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
            const url = 'https://youtu.be/FUEI9TmC_TQ?si=whXkwohPaxwP92gq';
            const text = 'Cek link ini: ' + url;
            const whatsappUrl = 'https://api.whatsapp.com/send?text=' + encodeURIComponent(text);
            window.open(whatsappUrl, '_blank');
            });
        }
        return () => {
            if (whatsappShareButton) {
                whatsappShareButton.removeEventListener('click', function() {
                const url = 'https://youtu.be/FUEI9TmC_TQ?si=whXkwohPaxwP92gq';
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
                <h2 className='font-bold text-4xl text-center'>Aqua Care: Jaga Kualitas Air Kolam Ikan Lele</h2>
            </div>
            <div className='flex justify-center'>
            <iframe 
                width="760" 
                height="415" 
                src="https://www.youtube.com/embed/FUEI9TmC_TQ?si=G_jY1ogdpkEw98eC" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
            </iframe>
            </div>
            <div className='mx-auto max-w-5xl m-5'>
                <p className='text-justify text-2xl'>
                    Pelajari cara menjaga kualitas air 
                    kolam ikan lele agar tetap sehat dan 
                    produktif dalam video ini. Kami 
                    membahas pentingnya kualitas air, 
                    faktor-faktor yang mempengaruhinya 
                    seperti pH, suhu, oksigen terlarut, 
                    dan kandungan amonia. Lihat demonstrasi 
                    pemantauan dan pengelolaan air dengan 
                    alat uji, serta tips tambahan seperti 
                    penggunaan tanaman air dan aerator. 
                    Pastikan ikan lele Anda tumbuh sehat 
                    dengan menjaga air kolam tetap optimal. 
                    Jangan lupa untuk like, komen, dan 
                    subscribe untuk tips menarik lainnya!, <a 
                        href='https://youtu.be/FUEI9TmC_TQ?si=whXkwohPaxwP92gq' 
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
