import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate()

  const manejarBotonCerrar = () => {
    localStorage.removeItem("isLoggedIn")
    navigate("/")
  }
  return (
    <main className="contenedor-home">
      <h1 className="titulo-home">Panel de administración - El Re Pollo</h1>
      <section className="botones">
        <Link className="boton-precios" to="/panel">Cambio de precios</Link>
        <Link className="vista-previa">Vista previa de cartelería</Link>
      </section>
      <div className="contenedor-cerrar-sesion">
        <button onClick={manejarBotonCerrar} className="boton-cerrar-sesion">Cerrar sesión</button>
      </div>
    </main>
  )
}