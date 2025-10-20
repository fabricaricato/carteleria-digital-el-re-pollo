import { Link } from "react-router-dom";
import "../index.css";
import { usePrecios } from "../context/PreciosContext";

const PanelPrecios = () => {
  const { precio } = usePrecios();

  return (
    <div className="panel-contenedor">
      <div className="panel-tarjeta">
        <header className="panel-encabezado">
          <h1 className="panel-titulo">Panel de Control de Precios</h1>
          <p className="panel-subtitulo">Modifica los valores para la cartelería digital</p>
        </header>

        <form className="formulario-precios">
          {/* Encabezado */}
          <div className="fila-producto encabezado">
            <span>Producto</span>
            <span>Precio ($)</span>
          </div>

          {/* Productos */}
          {precio.map((grupo, i) => (
            <div key={i} className="grupo-productos">
              {grupo.map((producto) => (
                <div key={producto.id} className="fila-producto">
                  <label htmlFor={`producto-${producto.id}`}>
                    {producto.nombre}
                  </label>
                  <input
                    type="number"
                    id={`producto-${producto.id}`}
                    name={producto.nombre.toLowerCase().replace(/\s+/g, "-")}
                    placeholder={producto.precio.replace("$", "")}
                    className="entrada-precio"
                  />
                </div>
              ))}
            </div>
          ))}
        </form>

        <div className="formulario-acciones">
          <button type="submit" className="boton boton-actualizar">
            Actualizar Precios
          </button>
          <button type="button" className="boton boton-previsualizar">
            Vista Previa
          </button>
        </div>

        <div className="contenedor-boton-volver">
          <Link className="boton-volver" to="/home">
            🠔 Volver
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PanelPrecios;