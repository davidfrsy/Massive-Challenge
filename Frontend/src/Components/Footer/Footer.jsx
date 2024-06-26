import React from 'react'
import ft_app from '../../Assets/mobile-app.png'
import barcode from '../../Assets/qr.png'
import lg_insta from '../../Assets/Instagram.png'
import lg_yt from '../../Assets/YouTube.png'
import lg_light from '../../Assets/logo-putih.png'

const Footer = () => {
  return (
    <div className=' bg-white'>
        <div className='bg-sky-800 p-10 grid grid-flow-col relative'>
            <img src={ft_app} alt="" className='absolute left-40 -top-44 h-cust4' />
            <h3 className='text-white font-bold text-3xl text-center'>Dapatkan Aplikasi Melalui Barcode!</h3>
            <img src={barcode} alt="" className='absolute z-10 size-28 right-48 -top-10 '/>
        </div>
        <footer className="footer p-10 bg-slate-800 text-slate-400">
            <aside>
                <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current -z-10"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
                <p className='-z-10'>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
            </aside> 
            <nav>
                <h6 className="footer-title text-slate-100">Informasi Aplikasi</h6> 
                <span className="">Alarm Pengganti Air</span>
                <span className="">Alarm Pemberian Antibiotik</span>
                <span className="">Alarm pemberian Pakan</span>
                <span className="">Scan Penyakit Ikan</span>
                <span className="">Chat Bot</span>
            </nav> 
            <nav>
                <h6 className="footer-title text-slate-100">Akses Link</h6> 
                <a className="link link-hover" href='#about'>About us</a>
                <a className="link link-hover" href='#help'>Contact</a>
                <a className="link link-hover" href='#navbar'>Budidaya</a>
            </nav> 
            <nav>
                <h6 className="footer-title text-slate-100">Social</h6> 
                <div className="grid grid-flow-col gap-4">
                    <a href="https://www.instagram.com/aquacare.official?igsh=MW1vaDQzc3NvOXdrbQ==">
                        <img src={lg_insta} alt="" className='h-8' />
                    </a>
                    <a href="https://www.youtube.com/@aquacare.official">
                        <img src={lg_yt} alt="" className='h-8' />
                    </a>
                </div>
                <div className='block'>
                    <a href="">
                        <img src={lg_light} alt="" className='h-12' />
                    </a>
                </div>
            </nav>
        </footer>
        <div className='text-center bg-slate-800 text-white py-1'>
            <p>Copyright AquaCare @2024. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer
