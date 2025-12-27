import { useContext, createContext, useState, useEffect } from "react";

const PasswordContext = createContext();

const PasswordProvider = ({ children }) => {
  // Inicializa con una contraseña por defecto
  const [contrasena, setContrasena] = useState("0000");

  const actualizarContrasena = (nuevaContrasena) => {
    setContrasena(nuevaContrasena);
    localStorage.setItem("contrasena", nuevaContrasena);
  }

  useEffect(() => {
    const contrasenaGuardada = localStorage.getItem("contrasena");
    if (contrasenaGuardada) {
      setContrasena(contrasenaGuardada);
    }
  }, []);

  return (
    <PasswordContext.Provider value={{contrasena, setContrasena, actualizarContrasena}}>
      {children}
    </PasswordContext.Provider>
  )
}

const usePassword = () => useContext(PasswordContext);

export { usePassword, PasswordProvider };