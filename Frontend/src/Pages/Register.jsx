import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import bg_login from "../Assets/bg-login.png";
import lg_login from "../Assets/lg-login.png";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/auth/register", formData);
      if (response.data.status === "Success") {
        navigate("/login");
      } else {
        alert("Error");
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("Error registering user");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        <div className="flex flex-col justify-center p-8 md:p-14 max-w-sm">
          <span className="mb-3 text-4xl font-bold">Sign Up!</span>
          <form onSubmit={handleSubmit}>
            <div className="py-4">
              <label htmlFor="name" className="mb-2 text-md">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInput}
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500 text-black"
                required
              />
            </div>
            <div className="py-4">
              <label htmlFor="email" className="mb-2 text-md">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInput}
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500 text-black"
                required
              />
            </div>
            <div className="py-4">
              <label htmlFor="password" className="mb-2 text-md">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInput}
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500 text-black"
                required
              />
            </div>
            <button
              type="submit"
              className="text-center w-full bg-blue-600 text-white p-2 rounded-lg mb-6 hover:bg-blue-800"
            >
              Sign up
            </button>
            <div className="text-center text-gray-400">
              Sudah punya akun?{" "}
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
