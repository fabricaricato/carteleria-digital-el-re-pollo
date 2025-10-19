import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const CarteleriaDinamica = () => {
  const [fechaHora, establecerFechaHora] = useState('');
  const [diapositivaActual, establecerDiapositivaActual] = useState(0);
  const [saliendo, establecerSaliendo] = useState(false);
  const navigate = useNavigate()

  // Configuración de productos por diapositiva (6 productos por diapositiva)
  const diapositivas = [
    [
      { 
        id: 1, 
        icono: '🍗', 
        nombre: 'Pollo Entero', 
        precio: '$2,850', 
        unidad: 'por kg', 
        destacado: true, 
        etiqueta: 'OFERTA' 
      },
      { 
        id: 2, 
        icono: '🍖', 
        nombre: 'Pechuga', 
        precio: '$3,200', 
        unidad: 'por kg' 
      },
      { 
        id: 3, 
        icono: '🍗', 
        nombre: 'Pata-Muslo', 
        precio: '$2,450', 
        unidad: 'por kg' 
      },
      { 
        id: 4, 
        icono: '🥚', 
        nombre: 'Huevos Frescos', 
        precio: '$1,680', 
        unidad: 'por maple', 
        destacado: true, 
        etiqueta: 'PROMO' 
      },
      { 
        id: 5, 
        icono: '🍗', 
        nombre: 'Alitas', 
        precio: '$2,980', 
        unidad: 'por kg' 
      },
      { 
        id: 6, 
        icono: '🍖', 
        nombre: 'Suprema', 
        precio: '$3,400', 
        unidad: 'por kg' 
      }
    ],
    [
      { 
        id: 7, 
        icono: '🍖', 
        nombre: 'Milanesas', 
        precio: '$3,450', 
        unidad: 'por kg', 
        destacado: true, 
        etiqueta: 'NUEVO' 
      },
      { 
        id: 8, 
        icono: '🍗', 
        nombre: 'Trutro', 
        precio: '$2,200', 
        unidad: 'por kg' 
      },
      { 
        id: 9, 
        icono: '🍖', 
        nombre: 'Pechuga Deshuesada', 
        precio: '$3,600', 
        unidad: 'por kg' 
      },
      { 
        id: 10, 
        icono: '🍗', 
        nombre: 'Muslos', 
        precio: '$2,350', 
        unidad: 'por kg' 
      },
      { 
        id: 11, 
        icono: '🍖', 
        nombre: 'Pata', 
        precio: '$2,150', 
        unidad: 'por kg',
        destacado: true, 
        etiqueta: 'OFERTA' 
      },
      { 
        id: 12, 
        icono: '🍗', 
        nombre: 'Alón', 
        precio: '$2,750', 
        unidad: 'por kg' 
      }
    ],
    [
      { 
        id: 13, 
        icono: '🥚', 
        nombre: 'Huevos Color', 
        precio: '$1,850', 
        unidad: 'por maple',
        destacado: true, 
        etiqueta: 'NUEVO' 
      },
      { 
        id: 14, 
        icono: '🍖', 
        nombre: 'Carcasa', 
        precio: '$1,950', 
        unidad: 'por kg' 
      },
      { 
        id: 15, 
        icono: '🍗', 
        nombre: 'Menudos', 
        precio: '$1,500', 
        unidad: 'por kg' 
      },
      { 
        id: 16, 
        icono: '🍖', 
        nombre: 'Nuggets', 
        precio: '$3,800', 
        unidad: 'por kg' 
      },
      { 
        id: 17, 
        icono: '🍗', 
        nombre: 'Alitas Marinadas', 
        precio: '$3,200', 
        unidad: 'por kg',
        destacado: true, 
        etiqueta: 'PROMO' 
      },
      { 
        id: 18, 
        icono: '🍖', 
        nombre: 'Pechuga Marinada', 
        precio: '$3,650', 
        unidad: 'por kg' 
      }
    ]
  ];

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