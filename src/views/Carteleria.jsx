import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { usePrecios } from "../context/PreciosContext";

const CarteleriaDinamica = () => {
  const { precio } = usePrecios();
  const [fechaHora, establecerFechaHora] = useState('');
  const [diapositivaActual, establecerDiapositivaActual] = useState(0);
  const [saliendo, establecerSaliendo] = useState(false);
  const navigate = useNavigate()
  
  const diapositivas = precio;

  const DURACION_DIAPOSITIVA = 10000; // 10 segundos

  // Actualizar fecha y hora
  useEffect(() => {
    const actualizarFechaHora = () => {
      const ahora = new Date();
      const opciones = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      };
      const fechaHoraTexto = ahora.toLocaleDateString('es-AR', opciones);
      establecerFechaHora(fechaHoraTexto);
    };

    actualizarFechaHora();
    const intervalo = setInterval(actualizarFechaHora, 60000);

    return () => clearInterval(intervalo);
  }, []);

  // Carrusel automático
  useEffect(() => {
    const intervalo = setInterval(() => {
      cambiarDiapositiva((diapositivaActual + 1) % diapositivas.length);
    }, DURACION_DIAPOSITIVA);

    return () => clearInterval(intervalo);
  }, [diapositivaActual, diapositivas.length]);

  const cambiarDiapositiva = (nuevaIndex) => {
    establecerSaliendo(true);
    setTimeout(() => {
      establecerDiapositivaActual(nuevaIndex);
      establecerSaliendo(false);
    }, 600);
  };

  const volverInicio = () => {
    navigate("/home")
  }

  return (
    <div className="carteleria-contenedor">
      <div className="encabezado">
        <h1 className="logo-titulo" onClick={volverInicio}>🐔 GRANJA EL RE POLLO</h1>
        <p className="subtitulo-cartel">Productos Frescos y de Calidad</p>
        <p className="fecha-hora">{fechaHora}</p>
      </div>

      <div className="carrusel-contenedor">
        {diapositivas.map((productos, indice) => (
          <div 
            key={indice}
            className={`diapositiva ${
              indice === diapositivaActual && !saliendo ? 'activa' : ''
            } ${
              indice === diapositivaActual && saliendo ? 'saliendo' : ''
            }`}
          >
            <div className="grid-productos">
              {productos.map((producto) => (
                <div 
                  key={producto.id}
                  className={`tarjeta-producto ${producto.destacado ? 'destacado' : ''}`}
                >
                  {producto.destacado && (
                    <div className="etiqueta-oferta">{producto.etiqueta}</div>
                  )}
                  <div className="icono-producto">{producto.icono}</div>
                  <h2 className="nombre-producto">{producto.nombre}</h2>
                  <p className="precio-producto">{producto.precio}</p>
                  <p className="unidad-producto">{producto.unidad}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="indicadores">
        {diapositivas.map((_, indice) => (
          <div
            key={indice}
            className={`indicador ${indice === diapositivaActual ? 'activo' : ''}`}
            onClick={() => cambiarDiapositiva(indice)}
          />
        ))}
      </div>
    </div>
  );
};

export default CarteleriaDinamica;