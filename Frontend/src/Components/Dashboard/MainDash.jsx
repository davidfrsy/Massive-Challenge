import React, { useEffect, useState } from "react";
import NavDash from "./NavDash";
import axios from "axios";
import { useAuth } from "../../Pages/AuthProvider";
import { jwtDecode } from "jwt-decode";

const MainDash = () => {
  const token = localStorage.getItem("site")
  const decode = jwtDecode(token)
  const [operasional, setOperasional] = useState([]);
  const [hasilpanen, setHasil] = useState([]);
  const [keuangan, setKeuangan] = useState([]);
  
  useEffect(() => {
    fetchOperasional();
    fetchHasil();
    fetchKeuangan();
  }, []);

  const fetchOperasional = async () => {
    try {
      const res = await axios.post("http://localhost:3001/operasional/data", {user_id: decode.id});
      setOperasional(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchHasil = async () => {
        try {
            const res = await axios.post("http://localhost:3001/hasilpanen/data",  {user_id: decode.id});
            setHasil(res.data);
        } catch (err) {
            console.log(err);
        }
  };

  const fetchKeuangan = async () => {
    try {
        const res = await axios.post("http://localhost:3001/keuangan/data", {user_id: decode.id});
        setKeuangan(res.data);
    } catch (err) {
        console.log(err);
    }
  };

  let totalOperasional = 0;
  let totalHasilPanen = 0;
  let totalKeuangan = 0;

  operasional.forEach((data) => {
    totalOperasional += data.bibit + data.pakan + data.suplemen + data.lainnya;
  });

  hasilpanen.forEach((data) => {
    totalHasilPanen += data.total;
  });

  keuangan.forEach((data) => {
    totalKeuangan += data.pendapatan;
  });
  
  const formatCurrency = (number) => {
    return number.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
  };

  return (
    <div className="bg-blue-100 rounded-l-3xl w-full">
      <div className="m-5">
        <NavDash />
        <div className="m-5">
          <div className="p-9 border border-gray-200 shadow-lg space-y-4 bg-white max-w-screen-xl">
            <h3 className="text-3xl">Selamat Datang, {decode.name}</h3>

            <p className="text-justify text-xl max-w-5xl">
              Layanan manajemen perikanan sebagai solusi bagi pembudidaya ikan
              dan para peminatnya. Hadir dalam bentuk pelayanan Website dengan
              memberikan beberapa fitur dashboard yang memudahkan bagi para
              pembudidaya ikan.
            </p>
          </div>
        </div>
        <div className="flex space-x-5 m-5">
          <div className="py-10 px-14 border border-gray-200 shadow-md space-y-2 bg-white">
            <h2 className="font-bold text-4xl">Total</h2>
            <p className="text-xl">Operasional</p>
            <p className="text-2xl">{formatCurrency(totalOperasional)}</p>
          </div>
          <div className="py-10 px-14 border border-gray-200 shadow-md space-y-2 bg-white">
            <h2 className="font-bold text-4xl">Total</h2>
            <p className="text-xl">Hasil Panen</p>
            <p className="text-2xl">{formatCurrency(totalHasilPanen)}</p>
          </div>
          <div className="py-10 px-14 border border-gray-200 shadow-md space-y-2 bg-white">
            <h2 className="font-bold text-4xl">Total</h2>
            <p className="text-xl">Keuangan</p>
            <p className="text-2xl">{formatCurrency(totalKeuangan)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDash;
