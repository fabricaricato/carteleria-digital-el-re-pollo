import { usePassword } from "../context/PasswordContext"

const Restablecer = () => {
  const {contrasena, setContrasena } = usePassword()
  const restablecerContrasena = (nuevaContrasena) => {
    setContrasena(nuevaContrasena)
  }
  return (
    <h1>restablecer contraseña: <input></input> <button onClick={restablecerContrasena}>cambiar</button></h1>
  )
}

export default Restablecer