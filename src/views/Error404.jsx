import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate()  
  const manejarVolver = () => {
    navigate("/")
  };

  return (
    <div className="contenedor-error">
      <h1 className="numero-error">404</h1>
      <div className="linea-separadora"></div>
      <h2 className="titulo-error">Página no encontrada</h2>
      <p className="mensaje-error">
        La página que estás buscando no existe, ha sido eliminada o la URL es incorrecta.
      </p>
      <a href="/" className="boton-inicio" onClick={(e) => {
        e.preventDefault();
        manejarVolver();
      }}>
        Volver
      </a>
    </div>
  );
};

export default Error404;