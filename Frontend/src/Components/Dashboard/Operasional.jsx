import React, { useEffect, useState } from "react";
import NavDash from "./NavDash";
import axios from "axios";

import updateIcon from "../../Assets/update.png"; // Path ke ikon update
import deleteIcon from "../../Assets/delete.png"; // Path ke ikon delete
import ops from "../../Assets/operasional.png";

import { PDFDownloadLink } from "@react-pdf/renderer";
import OperasionalPDF from "./OperasionalPdf";

const Operasional = () => {
  const [operasional, setOperasional] = useState([]);
  const [form, setForm] = useState({
    id: "",
    tanggal: "",
    pemeliharaan: "",
    bibit: "",
    pakan: "",
    suplemen: "",
    lainnya: "",
  });
  const [isUpdateMode, setIsUpdateMode] = useState(false);

  useEffect(() => {
    fetchOperasional();
  }, []);

  const fetchOperasional = async () => {
    try {
      const res = await axios.get("http://localhost:3001/operasional");
      setOperasional(res.data);
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
        await axios.put(`http://localhost:3001/operasional/${form.id}`, form);
      } else {
        await axios.post("http://localhost:3001/operasional", form);
      }
      setForm({
        id: "",
        tanggal: "",
        pemeliharaan: "",
        bibit: "",
        pakan: "",
        suplemen: "",
        lainnya: "",
      });
      setIsUpdateMode(false);
      fetchOperasional();
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
      await axios.delete(`http://localhost:3001/operasional/${id}`);
      fetchOperasional();
    } catch (err) {
      console.log(err);
    }
  };

  const handleAdd = () => {
    setForm({
      id: "",
      tanggal: "",
      pemeliharaan: "",
      bibit: "",
      pakan: "",
      suplemen: "",
      lainnya: "",
    });
    setIsUpdateMode(false);
    document.getElementById("my_modal_1").showModal();
  };

  return (
    <div className="bg-blue-100 rounded-l-3xl w-full">
      <div className="m-5">
        <NavDash />
        <div className="m-5">
          <div className="overflow-y-auto h-cust5" id="ContentToConvert">
            <table className="table table-lg table-zebra table-pin-rows border border-gray-400 scroll">
              <thead className="sticky top-0 text-black">
                <tr>
                  <th>No</th>
                  <td>Tanggal</td>
                  <td>Pemeliharaan</td>
                  <td>Bibit</td>
                  <td>Pakan</td>
                  <td>Suplemen</td>
                  <td>Lain-lain</td>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {operasional.map((data, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>
                      {new Date(data.tanggal).toLocaleDateString("id-ID")}
                    </td>
                    <td>{data.pemeliharaan}</td>
                    <td>{data.bibit}</td>
                    <td>{data.pakan}</td>
                    <td>{data.suplemen}</td>
                    <td>{data.lainnya}</td>
                    <td className="space-x-3">
                      <button onClick={() => handleUpdate(data)}>
                        <img
                          src={updateIcon}
                          alt="Update"
                          className="w-6 h-6 inline"
                        />
                      </button>
                      <button onClick={() => handleDelete(data.id)}>
                        <img
                          src={deleteIcon}
                          alt="Delete"
                          className="w-6 h-6 inline"
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex float-right">
          <div className="flex space-x-3">
            <button
              className="btn bg-blue-700 text-white px-8 hover:bg-blue-900"
              onClick={handleAdd}>
              Tambah
            </button>

            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <div className="flex flex-col justify-center">
                  <img src={ops} alt="img" className="w-10 self-center" />
                  <h3 className="font-bold text-lg text-center">
                    {isUpdateMode ? "Update" : "Tambah"} Data Operasional!
                  </h3>
                </div>
                <div className="flex flex-col justify-center p-8 text-left">
                  <form onSubmit={handleSubmit} className="p-2 text-justify">
                    <div className="p-1 space-x-5 ">
                      <label htmlFor="tanggal" className="font-bold text-lg">
                        Tanggal
                      </label>
                      <input
                        type="date"
                        name="tanggal"
                        value={form.tanggal}
                        onChange={handleChange}
                        className="border border-gray-400 rounded w-56 float-right px-1"
                      />
                    </div>
                    <div className="p-1 space-x-5 ">
                      <label
                        htmlFor="pemeliharaan"
                        className="font-bold text-lg">
                        Pemeliharaan
                      </label>
                      <input
                        type="text"
                        name="pemeliharaan"
                        value={form.pemeliharaan}
                        onChange={handleChange}
                        className="border border-gray-400 rounded w-56 float-right px-1"
                      />
                    </div>
                    <div className="p-1 space-x-5 ">
                      <label htmlFor="bibit" className="font-bold text-lg">
                        Bibit
                      </label>
                      <input
                        type="text"
                        name="bibit"
                        value={form.bibit}
                        onChange={handleChange}
                        className="border border-gray-400 rounded w-56 float-right px-1"
                      />
                    </div>
                    <div className="p-1 space-x-5 ">
                      <label htmlFor="pakan" className="font-bold text-lg">
                        Pakan
                      </label>
                      <input
                        type="text"
                        name="pakan"
                        value={form.pakan}
                        onChange={handleChange}
                        className="border border-gray-400 rounded w-56 float-right px-1"
                      />
                    </div>
                    <div className="p-1 space-x-5 ">
                      <label htmlFor="suplemen" className="font-bold text-lg">
                        Suplemen
                      </label>
                      <input
                        type="text"
                        name="suplemen"
                        value={form.suplemen}
                        onChange={handleChange}
                        className="border border-gray-400 rounded w-56 float-right px-1"
                      />
                    </div>
                    <div className="p-1 space-x-5 ">
                      <label htmlFor="lainnya" className="font-bold text-lg">
                        Lainnya
                      </label>
                      <input
                        type="text"
                        name="lainnya"
                        value={form.lainnya}
                        onChange={handleChange}
                        className="border border-gray-400 rounded w-56 float-right px-1"
                      />
                    </div>
                    <div className="modal-action">
                      <button type="submit" className="btn">
                        Simpan
                      </button>
                      <button
                        type="button"
                        className="btn"
                        onClick={() =>
                          document.getElementById("my_modal_1").close()
                        }
                      >
                        Close
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </dialog>

            <PDFDownloadLink
              document={<OperasionalPDF data={operasional} />}
              fileName="laporan_operasional.pdf">
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
  );
};

export default Operasional;
