import React, { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  //Menggunakan useState untuk menyimpan status otentikasi berdasarkan keberadaan token di cookies
  const [isAuthenticated, setIsAuthenticated] = useState(!!Cookies.get("token"));

  //Menggunakan useEffect untuk memantau perubahan pada token di cookies
  useEffect(() => {
    //Membuat fungsi handleTokenChange untuk memperbarui status otentikasi ketika token di cookies berubah
    const handleTokenChange = () => {
      setIsAuthenticated(!!Cookies.get("token"));
    };

    //Menambahkan event listener pada storage untuk memantau perubahan pada token
    window.addEventListener("storage", handleTokenChange);
    //Mengembalikan sebuah fungsi yang akan dipanggil saat komponen di-unmount untuk membersihkan event listener

    return () => {
      window.removeEventListener("storage", handleTokenChange);
    };
  }, []);

  //Mengembalikan provider dengan nilai isAuthenticated dan setIsAuthenticated yang diperoleh dari useState

  return <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>{children}</AuthContext.Provider>;
};
