import { useContext, createContext, useState, useEffect } from "react";

const PasswordContext = createContext();

const PasswordProvider = ({ children }) => {
  const [contrasena, setContrasena] = useState("0000");

  const actualizarContrasena = (nuevaContrasena) => {
    setContrasena(nuevaContrasena)
  }

  return (
    <PasswordContext.Provider value={{contrasena, setContrasena, actualizarContrasena}}>
      {children}
    </PasswordContext.Provider>
  )
}

const usePassword = () => useContext(PasswordContext)

export { usePassword, PasswordProvider }