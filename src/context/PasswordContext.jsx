import { useContext, createContext, useState, useEffect } from "react";

const PasswordContext = createContext();

const PasswordProvider = ({ children }) => {
  return (
    <PasswordContext.Provider value={{}}>
      {children}
    </PasswordContext.Provider>
  )
}

const usePassword = () => useContext(PasswordContext)

export { usePassword, PasswordProvider }