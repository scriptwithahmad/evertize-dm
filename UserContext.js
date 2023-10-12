// UserContext.js

import React, { createContext, useState, useContext, useEffect } from "react";
import Cookies from 'js-cookie';
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    Cookies.remove('AccessToken'); 
    // Assuming you're using cookies, clear the user cookie here
    // For example, if you're using js-cookie library:
    // import Cookies from 'js-cookie';
    // Cookies.remove('userCookieName');
  };

  useEffect(() => {
    // Check if  running in the browser before accessing localStorage
    if (typeof window !== "undefined") {
      const savedUser = localStorage.getItem("user");
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
};
