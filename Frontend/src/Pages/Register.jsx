import React, { useState } from "react";
import bg_login from "../Assets/bg-login.png";
import lg_login from "../Assets/lg-login.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/auth/register", values)
      .then((res) => {
        if (res.data.status === "Success") {
          navigate("/login");
        } else {
          alert("Error");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        <div className="flex flex-col justify-center p-8 md:p-14 max-w-sm">
          <span className="mb-3 text-4xl font-bold">Sign Up!</span>
          <form onSubmit={handleSubmit}>
            <div className="py-4">
              <label htmlFor="username" className="mb-2 text-md">
                Name
              </label>
              <input
                type="text"
                value={values.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500 text-black"
                name="name"
                required
              />
            </div>
            <div className="py-4">
              <label htmlFor="email" className="mb-2 text-md">
                Email
              </label>
              <input
                type="email"
                value={values.email}
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500 text-black"
                name="email"
                required
              />
            </div>
            <div className="py-4">
              <label htmlFor="password" className="mb-2 text-md">
                Password
              </label>
              <input
                type="password"
                value={values.password}
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500 text-black"
                name="password"
                required
              />
            </div>
            <button className="text-center w-full bg-blue-600 text-white p-2 rounded-lg mb-6 hover:bg-blue-800">
              Sign up
            </button>
            <div className="text-center text-gray-400">
              Sudah punya akun?
              <Link to={"/login"} className="font-bold text-blue-700">
                Login
              </Link>
            </div>
          </form>
        </div>
        <div className="relative">
          <img
            src={bg_login}
            alt="Background Login"
            className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
          />
          <div className="absolute hidden md:block top-14 left-40 translate-y-full">
            <img src={lg_login} alt="Logo Login" className="h-36" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
