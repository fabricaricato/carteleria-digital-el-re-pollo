import { useContext, createContext, useState, useEffect } from "react";

const PreciosContext = createContext();

const PreciosProvider = ({ children }) => {
  // Inicializa con una contraseña por defecto
  const [] = useState();

  return (
    <PreciosContext.Provider value={{}}>
      {children}
    </PreciosContext.Provider>
  )
}

const usePrecios = () => useContext(PreciosContext);

export { usePrecios, PreciosProvider };