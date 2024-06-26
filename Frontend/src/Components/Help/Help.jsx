import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ft_iwak from '../../Assets/iwak.png'

const Help = () => {
    const [helps, setHelps] = useState([]);
    const [form, setForm] = useState({ 
        name: '', 
        email: '', 
        message: '',
    });

    useEffect(() => {
        fetchHelps();
    }, []);

    const fetchHelps = async () => {
        try {
            const res = await axios.get("http://localhost:3001/helps");
            setHelps(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) {
            alert("Semua field harus diisi!");
            return;
        }
        try {
            await axios.post("http://localhost:3001/helps", form);
            setForm({
                name: '', 
                email: '', 
                message: '',
            });
            fetchHelps();
            alert("Terimakasih telah mengisi form Bantuan");
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <div className='bg-gray-100 text-black px-9 py-12' id='help'>
            <div className='flex justify-center font-semibold text-3xl text-blue-900'>
                <h3>Bantuan</h3>
            </div>

            <div className='flex justify-center mx-12 my-9 relative right-20'>
                <div className='bg-slate-200 rounded-lg relative h-cust5 my-auto mx-5 py-1 px-2'>
                    <div className='text-left justify-center px-5 py-4'>
                        <h3 className='font-bold text-4xl text-blue-900 pb-3'>Let's Talk</h3>
                        <p className='font-normal text-2xl'>Ask anything or just say hi!</p>
                    </div>
                    <div className='absolute -bottom-6 -right-6'>
                        <img src={ft_iwak} alt="Iwak" className='rounded-lg size-72 h-96 w-80'/>
                    </div>
                </div>

                <div className='my-auto mx-10 p-14 relative left-5'>
                    <form onSubmit={handleSubmit} className='max-w-sm mx-auto'>
                        <div className='px-5 text-2xl'>
                            <div className='flex py-6'>
                                <div className='pr-5'>
                                    <ul>
                                        <li><label htmlFor="name" className='text-gray-400'>Nama</label></li>
                                        <li><input 
                                            type="text" 
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange} 
                                            className='bg-gray-100 w-52 focus:outline-none text-gray-700 border-b-2 border-gray-400'/></li>
                                    </ul>
                                </div>
                                <div className='pl-6'>
                                    <ul>
                                        <li><label htmlFor="email" className='text-gray-400'>Email</label></li>
                                        <li><input 
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange} 
                                            className='bg-gray-100 w-52 focus:outline-none text-gray-700 border-b-2 border-gray-400'/></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='py-6'>
                                <ul>
                                    <li className='pb-14'><label htmlFor="message" className='text-gray-400'>Pesan</label></li>
                                    <li><input 
                                        type="text" 
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange} 
                                        className='bg-gray-100 w-cust4 focus:outline-none text-gray-700 border-b-2 border-gray-400'/></li>
                                </ul>
                            </div>
                            <div className='py-6'>
                                <button type='submit' className='rounded-md text-white bg-sky-800 px-6 py-1.5 shadow-lg hover:bg-sky-900'>Kirim</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Help;
