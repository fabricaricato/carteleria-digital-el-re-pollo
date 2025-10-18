import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Acceso() {
  const [contrasena, setContrasena] = useState(); 
  const navigate = useNavigate();
  const manejarBotonAcceso = (e) => {
    e.preventDefault();
    
    // Validar que la contraseña ingresada coincida
    if (contrasena) {
      alert("¡Acceso correcto!");
      navigate("/home");
    } else {
      alert("Contraseña incorrecta");
    }
  };

  return (
    <div className="contenedor-login">
      <div className="tarjeta-login">
        <h2 className="titulo">Bienvenido a Granja El Re Pollo</h2>
        <p className="subtitulo">Ingrese para acceder a su panel de productos</p>

        <form className="formulario">
          <div className="campo">
            <label htmlFor="contraseña">Contraseña</label>
            <input
              type="password"
              id="contraseña"
              name="contraseña"
              placeholder="Ingrese su contraseña"
              required
              onChange={(evento) => setContrasena(evento.target.value)}
            />
          </div>

          <button onClick={manejarBotonAcceso} className="boton">
            Ingresar
          </button>

          <p className="texto-registro">
            ¿Olvidó su contraseña? <a href="#">Restablecer aquí</a>
          </p>
        </form>
      </div>
    </div>
  );
}
