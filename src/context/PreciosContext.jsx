import { useContext, createContext, useState, useEffect } from "react";

const PreciosContext = createContext();

const PreciosProvider = ({ children }) => {
  const [precio, setPrecio] = useState([
    [
      { 
        id: 1, icono: '🍗', nombre: 'Pollo Entero', precio: '$2,850', unidad: 'por kg', destacado: true, etiqueta: 'OFERTA' 
      },
      { 
        id: 2, icono: '🍖', nombre: 'Pechuga', precio: '$3,200', unidad: 'por kg' 
      },
      { 
        id: 3, icono: '🍗', nombre: 'Pata Muslo', precio: '$2,450', unidad: 'por kg' 
      },
      { 
        id: 4, icono: '🥚', nombre: 'Huevos Frescos', precio: '$1,680', unidad: 'por maple', destacado: true, etiqueta: 'PROMO' 
      },
      { 
        id: 5, icono: '🍗', nombre: 'Alitas', precio: '$2,980', unidad: 'por kg' 
      },
      { 
        id: 6, icono: '🍖', nombre: 'Suprema', precio: '$3,400', unidad: 'por kg' 
      }
    ],
    [
      { 
        id: 7, icono: '🍖', nombre: 'Milanesas', precio: '$3,450', unidad: 'por kg', destacado: true, etiqueta: 'NUEVO' 
      },
      { 
        id: 8, icono: '🍗', nombre: 'Trutro', precio: '$2,200', unidad: 'por kg' 
      },
      { 
        id: 9, icono: '🍖', nombre: 'Pechuga Deshuesada', precio: '$3,600', unidad: 'por kg' 
      },
      { 
        id: 10, icono: '🍗', nombre: 'Muslos', precio: '$2,350', unidad: 'por kg' 
      },
      { 
        id: 11, icono: '🍖', nombre: 'Pata', precio: '$2,150', unidad: 'por kg', destacado: true, etiqueta: 'OFERTA' 
      },
      { 
        id: 12, icono: '🍗', nombre: 'Alón', precio: '$2,750', unidad: 'por kg' 
      }
    ],
    [
      { 
        id: 13, icono: '🥚', nombre: 'Huevos Color', precio: '$1,850', unidad: 'por maple', destacado: true, etiqueta: 'NUEVO' 
      },
      { 
        id: 14, icono: '🍖', nombre: 'Carcasa', precio: '$1,950', unidad: 'por kg' 
      },
      { 
        id: 15, icono: '🍗', nombre: 'Menudos', precio: '$1,500', unidad: 'por kg' 
      },
      { 
        id: 16, icono: '🍖', nombre: 'Nuggets', precio: '$3,800', unidad: 'por kg' 
      },
      { 
        id: 17, icono: '🍗', nombre: 'Alitas Marinadas', precio: '$3,200', unidad: 'por kg', destacado: true, etiqueta: 'PROMO' 
      },
      { 
        id: 18, icono: '🍖', nombre: 'Pechuga Marinada', precio: '$3,650', unidad: 'por kg' 
      }
    ]
  ]);

  return (
    <PreciosContext.Provider value={{ precio, setPrecio }}>
      {children}
    </PreciosContext.Provider>
  );
};

const usePrecios = () => useContext(PreciosContext);

export { usePrecios, PreciosProvider };