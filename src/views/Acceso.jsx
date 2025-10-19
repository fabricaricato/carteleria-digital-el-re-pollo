import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePassword } from "../context/PasswordContext";
import { useEffect } from "react";

export default function Acceso() {
  const navigate = useNavigate()
  const { contrasena } = usePassword()
  const [pass, setPass] = useState("")
  const [preg, setPreg] = useState("kia")

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    if (isLoggedIn === "true") {
      navigate("/home")
    }
  }, [navigate])

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (pass === contrasena) {
      alert("¡Acceso correcto!");
      localStorage.setItem("isLoggedIn", "true")
      navigate("/home");
    } else {
      alert("Contraseña incorrecta, ingrese nuevamente");
    }
  }

  const preguntaSeguridad = () => {
    const pregunta = prompt("pregunta de seguridad: cual fue su primer auto? ")
    if (pregunta === preg) {
      alert("¡Acceso correcto!");
      navigate("/restablecer-contraseña")
    } else {
      alert("Pregunta incorrecta, ingrese nuevamente");
    }
  }

  const paginaRestablecer = () => {
    preguntaSeguridad()
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
              value={pass}
              onChange={(evento) => setPass(evento.target.value)}
            />
          </div>

          <button onClick={manejarEnvio} className="boton">
            Ingresar
          </button>

          <p className="texto-registro">
            ¿Olvidó su contraseña? <button type="button" className="boton-restablecer-contrasena" onClick={paginaRestablecer}>Restablecer aquí</button>
          </p>
        </form>
      </div>
    </div>
  )
}