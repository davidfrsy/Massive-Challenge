import React, { useEffect, useState } from 'react';
import NavDash from './NavDash'
import axios from 'axios';
import { jwtDecode } from "jwt-decode";

import updateIcon from '../../Assets/update.png'; // Path ke ikon update
import deleteIcon from '../../Assets/delete.png'; // Path ke ikon delete
import panen from '../../Assets/hasil-panen.png'

import { PDFDownloadLink } from "@react-pdf/renderer";
import HasilPanenPDF from "./HasilPanenPdf";

const HasilPanen = () => {
    const [hasilpanen, setHasil] = useState([]);
    const token = localStorage.getItem("site")
    const decode = jwtDecode(token)

    const [form, setForm] = useState({ 
        id: null, 
        tanggal: '', 
        pemeliharaan: '', 
        jenis: '', 
        harga: '', 
        berat: '', 
        total: '',
        user_id: decode.id,
    });
    const [isUpdateMode, setIsUpdateMode] = useState(false);

    useEffect(() => {
        fetchHasil();
    }, []);

    const fetchHasil = async () => {
        try {
            const res = await axios.post("http://localhost:3001/hasilpanen/data",  {user_id: decode.id});
            setHasil(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isUpdateMode) {
            await axios.put(`http://localhost:3001/hasilpanen/${form.id}`, form);
            } else {
            await axios.post("http://localhost:3001/hasilpanen", form);
            }
            setForm({
                id: null,
                tanggal: "",
                pemeliharaan: "",
                jenis: "",
                harga: "",
                berat: "",
                total: "",
                user_id: decode.id,
            });
            setIsUpdateMode(false);
            fetchHasil();
            document.getElementById("my_modal_1").close();
        } catch (err) {
            console.log(err);
        }
    };

    const handleUpdate = (data) => {
        setForm(data);
        setIsUpdateMode(true);
        document.getElementById("my_modal_1").showModal();
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/hasilpanen/${id}`);
            fetchHasil();
        } catch (err) {
            console.log(err);
        }
    };

    const handleAdd = () => {
        setForm({
            id:  "",
            tanggal: "",
            pemeliharaan: "",
            jenis: "",
            harga: "",
            berat: "",
            total: "",
            user_id: decode.id,
        });
        setIsUpdateMode(false);
        document.getElementById("my_modal_1").showModal();
    };

  return (
    <div className='bg-blue-100 rounded-l-3xl w-full'>
        <div className='m-5'>
            <NavDash />
            <div className='m-5'>
                <div className="overflow-y-auto h-cust5">
                <table className="table table-lg table-zebra table-pin-rows border border-gray-400 scroll">
                    <thead className='sticky top-0 text-black'> 
                        <tr>
                            <th>No</th>
                            <td>Tanggal</td> 
                            <td>Pemeliharaan</td> 
                            <td>Jenis</td> 
                            <td>Harga (/Kg)</td> 
                            <td>Berat (Kg)</td> 
                            <td>Total</td>
                            <th>Action</th> 
                        </tr>
                    </thead> 
                    <tbody>
                        {hasilpanen.map((data, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>
                                    {new Date(data.tanggal).toLocaleDateString("id-ID")}
                                </td>
                                <td>{data.pemeliharaan}</td>
                                <td>{data.jenis}</td>
                                <td>{data.harga}</td>
                                <td>{data.berat}</td>
                                <td>{data.total}</td>
                                <td className='space-x-3'>
                                    <button onClick={() => handleUpdate(data)}>
                                        <img 
                                        src={updateIcon} 
                                        alt="Update" 
                                        className='w-6 h-6 inline' />
                                    </button>
                                    <button onClick={() => handleDelete(data.id)}>
                                        <img 
                                        src={deleteIcon} 
                                        alt="Delete" 
                                        className='w-6 h-6 inline' 
                                        />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </div>
            <div className='flex float-right'>
                <div className='flex space-x-3'>

                    <button 
                        className='btn bg-blue-700 text-white px-8 hover:bg-blue-900'
                        onClick={handleAdd}>
                        Tambah
                    </button>

                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <div className='flex flex-col justify-center'>
                                <img src={panen} alt="img" className='w-10 self-center' />
                                <h3 
                                    className="font-bold text-lg text-center">
                                    {isUpdateMode ? 'Update' : 'Tambah'} Data Hasil Panen!
                                </h3>
                            </div>
                            <div className='flex flex-col justify-center p-8 text-left'>
                                <form onSubmit={handleSubmit} className='p-2 text-justify'>
                                    <div className='p-1 space-x-5 '>
                                        <label htmlFor="tanggal" className='font-bold text-lg'>
                                            Tanggal
                                        </label>
                                        <input 
                                            type="date" 
                                            name="tanggal" 
                                            value={form.tanggal}
                                            onChange={handleChange} 
                                            className='border border-gray-400 rounded w-56 float-right px-1' />
                                    </div>
                                    <div className='p-1 space-x-5 '>
                                        <label 
                                            htmlFor="pemeliharaan" 
                                            className='font-bold text-lg'>
                                            Pemeliharaan
                                        </label>
                                        <input 
                                            type="text" 
                                            placeholder='pemeliharaan ke ?'
                                            name="pemeliharaan" 
                                            value={form.pemeliharaan} 
                                            onChange={handleChange} 
                                            className='border border-gray-400 rounded w-56 float-right px-1' />
                                    </div>
                                    <div className='p-1 space-x-5 '>
                                        <label 
                                            htmlFor="jenis" 
                                            className='font-bold text-lg'>
                                            Jenis
                                        </label>
                                        <input 
                                            type="text" 
                                            placeholder='jenis ikan'
                                            name="jenis" 
                                            value={form.jenis} 
                                            onChange={handleChange} 
                                            className='border border-gray-400 rounded w-56 float-right px-1' />
                                    </div>
                                    <div className='p-1 space-x-5 '>
                                        <label htmlFor="harga" className='font-bold text-lg'>Harga</label>
                                        <input 
                                            type="text" 
                                            placeholder='harga jual'
                                            name="harga" 
                                            value={form.harga} 
                                            onChange={handleChange} 
                                            className='border border-gray-400 rounded w-56 float-right px-1' />
                                    </div>
                                    <div className='p-1 space-x-5 '>
                                        <label htmlFor="berat" className='font-bold text-lg'>Berat</label>
                                        <input 
                                            type="text" 
                                            placeholder='berat hasil panen'
                                            name="berat" 
                                            value={form.berat} 
                                            onChange={handleChange} 
                                            className='border border-gray-400 rounded w-56 float-right px-1' />
                                    </div>
                                    <div className='p-1 space-x-5 '>
                                        <label htmlFor="Total" className='font-bold text-lg'>Total</label>
                                        <input 
                                            type="text" 
                                            placeholder='total penjualan'
                                            name="total" 
                                            value={form.total} 
                                            onChange={handleChange} 
                                            className='border border-gray-400 rounded w-56 float-right px-1' />
                                    </div>

                                    <div className="modal-action">
                                        <button type="submit" className="btn">
                                            Simpan
                                        </button>
                                        <button
                                            type="button"
                                            className="btn"
                                            onClick={() => document.getElementById("my_modal_1").close()}>
                                            Close
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </dialog>
                    <PDFDownloadLink
                        document={<HasilPanenPDF data={hasilpanen} />}
                        fileName="laporan_hasil_panen.pdf">
                        {({ loading }) =>
                        loading ? (
                            "Loading document..."
                        ) : (
                            <button className="btn bg-blue-700 text-white px-8 hover:bg-blue-900">
                            Cetak
                            </button>
                        )
                        }
                    </PDFDownloadLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HasilPanen