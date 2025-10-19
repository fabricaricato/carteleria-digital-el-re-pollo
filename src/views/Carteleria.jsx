import { useState, useEffect } from 'react';

const CarteleriaDigital = () => {
  const [fechaHora, setFechaHora] = useState('');

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
      setFechaHora(fechaHoraTexto);
    };

    actualizarFechaHora();
    const intervalo = setInterval(actualizarFechaHora, 60000);

    return () => clearInterval(intervalo);
  }, []);

  const productos = [
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
      unidad: 'por kg',
      destacado: false
    },
    {
      id: 3,
      icono: '🍗',
      nombre: 'Pata-Muslo',
      precio: '$2,450',
      unidad: 'por kg',
      destacado: false
    },
    {
      id: 4,
      icono: '🥚',
      nombre: 'Huevos Frescos',
      precio: '$1,680',
      unidad: 'por maple',
      destacado: false
    },
    {
      id: 5,
      icono: '🍗',
      nombre: 'Alitas',
      precio: '$2,980',
      unidad: 'por kg',
      destacado: false
    },
    {
      id: 6,
      icono: '🍖',
      nombre: 'Milanesas',
      precio: '$3,450',
      unidad: 'por kg',
      destacado: true,
      etiqueta: 'NUEVO'
    }
  ];

  return (
    <div className="carteleria-contenedor">
      <div className="encabezado">
        <h1 className="logo-titulo">🐔 GRANJA EL RE POLLO</h1>
        <p className="subtitulo-cartel">Productos Frescos y de Calidad</p>
        <p className="fecha-hora">{fechaHora}</p>
      </div>

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
  );
};

export default CarteleriaDigital