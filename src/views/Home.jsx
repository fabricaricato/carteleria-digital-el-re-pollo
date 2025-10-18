import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="contenedor-home">
      <h1 className="titulo-home">Panel de administración - El Re Pollo</h1>
      <section className="botones">
        <Link className="boton-precios" to="/panel">Cambio de precios</Link>
        <Link className="vista-previa">Vista previa de cartelería</Link>
      </section>
      <div className="contenedor-cerrar-sesion">
        <button className="boton-cerrar-sesion">Cerrar sesión</button>
      </div>
    </main>
  )
}