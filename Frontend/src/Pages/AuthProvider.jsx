import React, { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// Membuat context untuk autentikasi
const AuthContext = createContext();

// Komponen penyedia autentikasi
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("site") || "");
    const navigate = useNavigate();

    const loginAction = async (data) => {
        try {
            const response = await fetch("http://localhost:3001/auth/login", { 
                method: "POST", // Menambahkan metode permintaan POST
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const res = await response.json();
            if (res.status === "Success") { // Memastikan respons sukses berdasarkan status
                setUser(res.user);
                setToken(res.token);
                localStorage.setItem("site", res.token);
                navigate("/dashboard");
                return;
            }
            throw new Error(res.error); // Menangani pesan error dengan benar
        } catch (err) {
            console.error(err);
        }
    };

    const logOut = () => {
        setUser(null);
        setToken("");
        localStorage.removeItem("site");
        navigate("/");
    };

    return (
        <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

// Hook custom untuk menggunakan konteks autentikasi
export const useAuth = () => {
    return useContext(AuthContext);
};