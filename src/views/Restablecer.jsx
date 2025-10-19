import { useNavigate } from "react-router-dom";
import { usePassword } from "../context/PasswordContext"

const Restablecer = () => {
  const { contrasena, actualizarContrasena } = usePassword()
  const navigate = useNavigate()
  
  const restablecerContrasena = () => {
    const nuevaContrasena = prompt("Ingrese la nueva contraseña:");
    if (nuevaContrasena !== "") {
      const confirmacionContrasena = confirm("Su contraseña se actualizará a: " + nuevaContrasena + ", ¿desea continuar?");
      if (confirmacionContrasena) {
        actualizarContrasena(nuevaContrasena);
        alert("¡Contraseña actualizada exitosamente!");
      } else {
        alert("Contraseña no actualizada");
      }
    } else {
      alert("No puede ingresar una contraseña vacia, reintentelo nuevamente")
    }
    
  }

  const volverLogin = () => {
    localStorage.removeItem("canResetPassword")
    navigate("/")
  }
  
  return (
    <div className="panel-contenedor">
      <div className="panel-tarjeta">
        <header className="panel-encabezado">
          <h1 className="panel-titulo">Restablecer Contraseña</h1>
          <p className="panel-subtitulo">
            Desde aquí puedes cambiar la contraseña de acceso al panel.
          </p>
        </header>

        <div className="formulario-precios">
          <div className="formulario-acciones">
            <button 
              onClick={restablecerContrasena} 
              className="boton boton-actualizar"
            >
              Cambiar contraseña
            </button>
          </div>
        </div>

        <div className="contenedor-boton-volver">
          <button onClick={volverLogin} href="/" className="boton-volver">← Volver</button>
        </div>
      </div>
    </div>
  )
}

export default Restablecer
