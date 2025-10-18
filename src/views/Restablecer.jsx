import { usePassword } from "../context/PasswordContext"

const Restablecer = () => {
  const { contrasena, setContrasena, actualizarContrasena } = usePassword()
  
  const restablecerContrasena = () => {
    const nuevaContrasena = prompt("Ingrese la nueva contraseña:");
    if (nuevaContrasena) {
      actualizarContrasena(nuevaContrasena);
    }
  }
  
  return (
    <h1>restablecer contraseña: <input></input> <button onClick={restablecerContrasena}>cambiar</button></h1>
  )
}

export default Restablecer