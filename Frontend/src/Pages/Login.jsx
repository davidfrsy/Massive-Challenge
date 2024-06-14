import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import bgLogin from "../Assets/bg-login.png";
import lgLogin from "../Assets/lg-login.png";
import googleIcon from "../Assets/google.svg";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const auth = useAuth()

  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/auth/login",

        { email: values.email, password: values.password }
      );

      if (response.status === 200 && response.data.status === "Success") {
        auth.loginAction(input);
        navigate("/dashboard");
      } else {
        console.log("Email atau password salah");
      }
    } catch (error) {
      console.log("Terjadi kesalahan saat login:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        <div className="flex flex-col justify-center p-8 md:p-14 max-w-sm">
          <span className="mb-3 text-4xl font-bold">Welcome Back!</span>
          <form onSubmit={handleSubmit}>
            <div className="py-4">
              <label htmlFor="email" className="mb-2 text-md">
                Email
              </label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-50 text-black"
                name="email"
                onChange={handleInput}
                required
              />
            </div>
            <div className="py-4">
              <label htmlFor="password" className="mb-2 text-md">
                Password
              </label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500 text-black"
                name="password"
                onChange={handleInput}
                required
              />
            </div>
            <button className="text-center w-full bg-blue-600 text-white p-2 rounded-lg mb-6 hover:bg-blue-800">
              Log in
            </button>
            <button className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white">
              <img
                src={googleIcon}
                alt="Google Icon"
                className="w-6 h-6 inline mr-2"
              />
              Log in with Google
            </button>
            <div className="text-center text-gray-400">
              Create a new account?{" "}
              <Link to={"/register"} className="font-bold text-blue-700">
                Sign up
              </Link>
            </div>
          </form>
        </div>
        <div className="relative hidden md:block">
          <img
            src={bgLogin}
            alt="Background"
            className="w-[400px] h-full rounded-r-2xl object-cover"
          />
          <div className="absolute top-14 left-40 translate-y-full">
            <img src={lgLogin} alt="Logo" className="h-36" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
