import React from 'react'
import NavDash from './NavDash'
import keuangan from '../../Assets/keuangan.png'

const Operasional = () => {
  return (
    <div className='bg-blue-100 rounded-l-3xl w-full'>
        <div className='m-5'>
            <NavDash />
            <div className='m-5'>
                <div className="overflow-y-auto h-cust5">
                <table className="table table-lg table-zebra table-pin-rows border border-gray-400 scroll">
                    <thead className='sticky top-0 text-black'> 
                    <tr>
                        <th></th> 
                        <td>Tanggal</td> 
                        <td>Pemeliharaan</td> 
                        <td>Operasional</td> 
                        <td>Panen</td> 
                        <td>Pendapatan</td> 
                    </tr>
                    </thead> 
                    <tbody>
                    <tr>
                        <th>1</th> 
                        <td>12/16/2020</td> 
                        <td>1</td> 
                        <td>800.000</td> 
                        <td>350.000</td> 
                        <td>-450.000</td>
                    </tr>
                    <tr>
                        <th>2</th> 
                        <td>12/16/2020</td> 
                        <td>2</td> 
                        <td>240.000</td> 
                        <td>350.000</td> 
                        <td>110.000</td>
                    </tr>
                    <tr>
                        <th>3</th> 
                        <td>12/16/2020</td> 
                        <td>3</td> 
                        <td>230.000</td> 
                        <td>350.000</td> 
                        <td>120.000</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
            <div className='flex float-right'>
                <div className='flex space-x-3'>

                    <button 
                        className='btn bg-blue-700 text-white px-8 hover:bg-blue-900'
                        onClick={()=>document.getElementById('my_modal_1').showModal()}>
                        Tambah
                    </button>

                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <div className='flex flex-col justify-center'>
                                <img src={keuangan} alt="img" className='w-10 self-center'/>
                                <h3 className="font-bold text-lg text-center">Tambah Data Hasil Keuangan!</h3>
                            </div>
                            <div className='flex flex-col justify-center p-8 text-left'>
                                <form action="" className='p-2 text-justify'>
                                <div className='p-1 space-x-5 '>
                                    <label htmlFor="" className='font-bold text-lg'>Tanggal</label>
                                    <input type="date" name="" id="" className='border border-gray-400 rounded w-56 float-right px-1'/>
                                </div>
                                <div className='p-1 space-x-5 '>
                                    <label htmlFor="" className='font-bold text-lg'>Pemeliharaan</label>
                                    <input type="text" className='border border-gray-400 rounded w-56 float-right px-1'/>
                                </div>
                                <div className='p-1 space-x-5 '>
                                    <label htmlFor="" className='font-bold text-lg'>Operasional</label>
                                    <input type="text" className='border border-gray-400 rounded w-56 float-right px-1'/>
                                </div>
                                <div className='p-1 space-x-5 '>
                                    <label htmlFor="" className='font-bold text-lg'>Panen</label>
                                    <input type="text" className='border border-gray-400 rounded w-56 float-right px-1'/>
                                </div>
                                <div className='p-1 space-x-5 '>
                                    <label htmlFor="" className='font-bold text-lg'>Pendapatan</label>
                                    <input type="text" className='border border-gray-400 rounded w-56 float-right px-1'/>
                                </div>
                                </form>
                            </div>
                            <div className="modal-action">
                                <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>

                    <button 
                        className='btn bg-blue-700 text-white px-8 hover:bg-blue-900'>
                        Cetak
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Operasional