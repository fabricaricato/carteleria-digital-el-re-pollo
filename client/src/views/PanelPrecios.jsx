import { Link, useNavigate } from "react-router-dom";
import { usePrecios } from "../context/PreciosContext";
import { useState } from "react";

const PanelPrecios = () => {
  const { precio, actualizarPrecio, resetearPrecios } = usePrecios();
  const navigate = useNavigate();
  const [cambiosPendientes, setCambiosPendientes] = useState({});

  const manejarBotonPrevisualizar = () => {
    navigate("/carteleria");
  };

  // Maneja cambio temporal en el input
  const handleChange = (productoId, nuevoValor) => {
    setCambiosPendientes(prev => ({
      ...prev,
      [productoId]: nuevoValor
    }));
  };

  // Aplica todos los cambios pendientes
  const aplicarCambios = (e) => {
    e.preventDefault();
    
    Object.entries(cambiosPendientes).forEach(([id, valor]) => {
      if (valor && valor.trim() !== '') {
        actualizarPrecio(Number(id), `$${valor}`);
      }
    });

    setCambiosPendientes({});
    alert('Precios actualizados correctamente');
  };

  // Resetea los precios a los valores iniciales
  const manejarResetear = () => {
    if (window.confirm('¿Estás seguro de resetear todos los precios?')) {
      resetearPrecios();
      setCambiosPendientes({});
      alert('Precios reseteados a valores iniciales');
    }
  };

  return (
    <div className="panel-contenedor">
      <div className="panel-tarjeta">
        <header className="panel-encabezado">
          <h1 className="panel-titulo">Panel de Control de Precios</h1>
          <p className="panel-subtitulo">
            Modifica los valores para la cartelería digital
          </p>
        </header>

        <form className="formulario-precios" onSubmit={aplicarCambios}>
          {precio.map((grupo, grupoIndex) => (
            <div key={grupoIndex} className="grupo-productos">
              {grupo.map((producto) => (
                <div key={producto.id} className="fila-producto">
                  <label htmlFor={`producto-${producto.id}`}>
                    {producto.icono} {producto.nombre}
                  </label>
                  <div className="contenedor-input">
                    <input
                      type="number"
                      id={`producto-${producto.id}`}
                      name={producto.nombre.toLowerCase().replace(/\s+/g, "-")}
                      placeholder={producto.precio.replace("$", "").replace(",", "")}
                      value={cambiosPendientes[producto.id] || ''}
                      className="entrada-precio"
                      onChange={(e) => handleChange(producto.id, e.target.value)}
                    />
                    <span className="precio-actual">
                      Actual: {producto.precio}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ))}

          <div className="formulario-acciones">
            <button type="submit" className="boton boton-actualizar">
              Actualizar Precios
            </button>
            <button 
              type="button" 
              className="boton boton-previsualizar"
              onClick={manejarBotonPrevisualizar}
            >
              Vista Previa
            </button>
            <button 
              type="button" 
              className="boton boton-resetear"
              onClick={manejarResetear}
            >
              Resetear
            </button>
          </div>
        </form>

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