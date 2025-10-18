import { useContext, createContext, useState, useEffect } from "react";

const PasswordContext = createContext();

const PasswordProvider = ({ children }) => {
  const [contrasena, setContrasena] = useState(null);

  const actualizarContrasena = (nuevaContrasena) => {
    setContrasena(nuevaContrasena)
  }

  return (
    <PasswordContext.Provider value={{contrasena, actualizarContrasena}}>
      {children}
    </PasswordContext.Provider>
  )
}

const usePassword = () => useContext(PasswordContext)

export { usePassword, PasswordProvider }