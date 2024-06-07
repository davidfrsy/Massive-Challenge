import React, { useState } from 'react'
import bg_login from '../Assets/bg-login.png'
import lg_login from '../Assets/lg-login.png'
import google from '../Assets/google.svg'
import axios from 'axios'
import { Await, Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });

    // Validasi penulisan email & password
    const validateEmail = (email) => {
        // Regex sederhana untuk memvalidasi email
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };
    
    const validatePassword = (password) => {
        // Misalnya, password minimal 6 karakter
        return password.length >= 6;
    };

    const handleInput = (event) => {
        const { name, value } = event.target;
    
        setValues(prev => ({ ...prev, [name]: value }));
    
        // Validasi input
        if (name === 'email') {
            if (!validateEmail(value)) {
                setErrors(prev => ({ ...prev, email: 'Email tidak valid' }));
            } else {
                setErrors(prev => ({ ...prev, email: '' }));
            }
        }
    
        if (name === 'password') {
            if (!validatePassword(value)) {
                setErrors(prev => ({ ...prev, password: 'Password harus minimal 6 karakter' }));
            } else {
                setErrors(prev => ({ ...prev, password: '' }));
            }
        }
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:3001/login', values);
            
            if (response.status === 200 && response.data.pesan === "Success") {
                setValues(response.data.data); // Memperbarui state dengan data dari server
                navigate('/dashboard');
            } else {
                console.log("Email atau password salah");
            }
        } catch (error) {
            console.log("Terjadi kesalahan saat login:", error);
        }
    };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
        <div className='relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0'>
            <div className='flex flex-col justify-center p-8 md:p-14 max-w-sm'>
                <span className='mb-3 text-4xl font-bold'>Welcome Back!</span>
                <form action="" onSubmit={handleSubmit}>
                    <div className='py-4'>
                        <label htmlFor='email' className='mb-2 text-md'>Email</label>
                        <input type="email" 
                            className='w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-50 text-black' 
                            name='email' onChange={handleInput}/>
                            {errors.email && <span className='text-red-600 text-xs '>{errors.email}</span>}
                    </div>
                    <div className='py-4'>
                        <label htmlFor='password' className='mb-2 text-md'>Password</label>
                        <input type="password"
                            className='w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500 text-black' 
                            name='password' onChange={handleInput}/>
                            {errors.password && <span className='text-red-600 text-xs '>{errors.password}</span>}
                    </div>
                    <button className='text-center w-full bg-blue-600 text-white p-2 rounded-lg mb-6 hover:bg-blue-800' >
                        Log in
                    </button>
                    <button className='w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white'>
                        <img src={google} alt="img" className='w-6 h-6 inline mr-2' />
                        Log in with Google
                    </button>
                    <div className='text-center text-gray-400'>
                        Buat akun baru?
                        <Link to={'/register'} className='font-bold text-blue-700'>Sign up</Link>
                    </div>
                </form>
            </div>
            <div className='relative'>
                <img src={bg_login} alt="img" className='w-[400px] h-full hidden rounded-r-2xl md:block object-cover' />
                <div className='absolute hidden md:block top-14 left-40  translate-y-full'>
                    <img src={lg_login} alt="img" className='h-36' />
                </div>
            </div>
        </div>
    </div>
  )
}
export default Login
