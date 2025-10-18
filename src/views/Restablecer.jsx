import { usePassword } from "../context/PasswordContext"

const Restablecer = () => {
  const { contrasena, actualizarContrasena } = usePassword()
  
  const restablecerContrasena = () => {
    const nuevaContrasena = prompt("Ingrese la nueva contraseña:");
    if (nuevaContrasena) {
      actualizarContrasena(nuevaContrasena);
      alert("¡Contraseña actualizada exitosamente!");
    }
  }
  
  return (
    <div>
      <h1>Restablecer contraseña</h1>
      <p>Contraseña actual: {contrasena}</p>
      <button onClick={restablecerContrasena} className="boton-restablecer-contrasena">Cambiar contraseña</button>
    </div>
  )
}

export default Restablecer