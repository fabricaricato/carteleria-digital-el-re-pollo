import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePassword } from "../context/PasswordContext";

export default function Acceso() {
  const navigate = useNavigate()
  const { contrasena, setContrasena } = usePassword()
  const [pass, setPass] = useState("") // Comienza vacío

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (pass === contrasena) {
      alert("¡Acceso correcto!");
      navigate("/home");
    } else {
      alert("Contraseña incorrecta, ingrese nuevamente");
    }
  };
  const restablecerContrasena = () => {
    navigate("/restablecer-contraseña")
  }
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
              onChange={(evento) => setPass(evento.target.value)}
            />
          </div>

          <button onClick={manejarEnvio} className="boton">
            Ingresar
          </button>

          <p className="texto-registro">
            ¿Olvidó su contraseña? <button className="boton-restablecer-contrasena" onClick={restablecerContrasena}>Restablecer aquí</button>
          </p>
        </form>
      </div>
    </div>
  );
}
