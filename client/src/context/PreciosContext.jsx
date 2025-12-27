import { useContext, createContext, useState, useEffect } from "react";

const PreciosContext = createContext();

const PreciosProvider = ({ children }) => {
  const preciosIniciales = [
    [
      { 
        id: 1, nombre: 'Pollo Entero', precio: '0', unidad: 'por kg', destacado: true, etiqueta: 'OFERTA' 
      },
      { 
        id: 2, nombre: 'Pechuga', precio: '0', unidad: 'por kg' 
      },
      { 
        id: 3, nombre: 'Pata Muslo', precio: '0', unidad: 'por kg' 
      },
      { 
        id: 4, nombre: 'Huevos Frescos', precio: '0', unidad: 'por maple', destacado: true, etiqueta: 'PROMO' 
      },
      { 
        id: 5, nombre: 'Alitas', precio: '0', unidad: 'por kg' 
      },
      { 
        id: 6, nombre: 'Suprema', precio: '0', unidad: 'por kg' 
      }
    ],
    [
      { 
        id: 7, nombre: 'Milanesas', precio: '0', unidad: 'por kg', destacado: true, etiqueta: 'NUEVO' 
      },
      { 
        id: 8, nombre: 'Trutro', precio: '0', unidad: 'por kg' 
      },
      { 
        id: 9, nombre: 'Pechuga Deshuesada', precio: '0', unidad: 'por kg' 
      },
      { 
        id: 10, nombre: 'Muslos', precio: '0', unidad: 'por kg' 
      },
      { 
        id: 11, nombre: 'Pata', precio: '0', unidad: 'por kg', destacado: true, etiqueta: 'OFERTA' 
      },
      { 
        id: 12, nombre: 'Alón', precio: '0', unidad: 'por kg' 
      }
    ],
    [
      { 
        id: 13, nombre: 'Huevos Color', precio: '0', unidad: 'por maple', destacado: true, etiqueta: 'NUEVO' 
      },
      { 
        id: 14, nombre: 'Carcasa', precio: '0', unidad: 'por kg' 
      },
      { 
        id: 15, nombre: 'Menudos', precio: '0', unidad: 'por kg' 
      },
      { 
        id: 16, nombre: 'Nuggets', precio: '0', unidad: 'por kg' 
      },
      { 
        id: 17, nombre: 'Alitas Marinadas', precio: '0', unidad: 'por kg', destacado: true, etiqueta: 'PROMO' 
      },
      { 
        id: 18, nombre: 'Pechuga Marinada', precio: '0', unidad: 'por kg' 
      }
    ]
  ];

  // Cargar precios desde localStorage o usar valores iniciales
  const cargarPrecios = () => {
    try {
      const preciosGuardados = localStorage.getItem('precios');
      if (preciosGuardados) {
        return JSON.parse(preciosGuardados);
      }
      return preciosIniciales;
    } catch (error) {
      console.error('Error al cargar precios:', error);
      return preciosIniciales;
    }
  };

  const [precio, setPrecio] = useState(cargarPrecios);

  // Guardar en localStorage cada vez que cambien los precios
  useEffect(() => {
    try {
      localStorage.setItem('precios', JSON.stringify(precio));
    } catch (error) {
      console.error('Error al guardar precios:', error);
    }
  }, [precio]);

  // Actualizar cualquier campo de un producto por ID
  const actualizarProducto = (id, nuevosDatos) => {
    setPrecio(prevPrecio => 
      prevPrecio.map(fila => 
        fila.map(producto => 
          producto.id === id 
            ? { ...producto, ...nuevosDatos } 
            : producto
        )
      )
    );
  };

  // Actualizar solo el precio de un producto
  const actualizarPrecio = (id, nuevoPrecio) => {
    actualizarProducto(id, { precio: nuevoPrecio });
  };

  // Actualizar solo el nombre de un producto
  const actualizarNombre = (id, nuevoNombre) => {
    actualizarProducto(id, { nombre: nuevoNombre });
  };

  // Eliminar un producto
  const eliminarProducto = (id) => {
    setPrecio(prevPrecio => 
      prevPrecio.map(fila => fila.filter(producto => producto.id !== id))
    );
  };

  // Agregar un producto a una fila específica
  const agregarProducto = (filaIndex, nuevoProducto) => {
    setPrecio(prevPrecio => 
      prevPrecio.map((fila, index) => 
        index === filaIndex ? [...fila, nuevoProducto] : fila
      )
    );
  };

  // Resetear a valores iniciales
  const resetearPrecios = () => {
    setPrecio(preciosIniciales);
    localStorage.setItem('precios', JSON.stringify(preciosIniciales));
  };

  // Obtener un producto por ID
  const obtenerProducto = (id) => {
    return precio.flat().find(producto => producto.id === id);
  };

  // Limpiar localStorage
  const limpiarStorage = () => {
    localStorage.removeItem('precios');
    setPrecio(preciosIniciales);
  };

  const value = {
    precio,
    setPrecio,
    actualizarProducto,
    actualizarPrecio,
    actualizarNombre,
    eliminarProducto,
    agregarProducto,
    resetearPrecios,
    obtenerProducto,
    limpiarStorage
  };

  return (
    <PreciosContext.Provider value={value}>
      {children}
    </PreciosContext.Provider>
  );
};

const usePrecios = () => useContext(PreciosContext);

export { usePrecios, PreciosProvider };