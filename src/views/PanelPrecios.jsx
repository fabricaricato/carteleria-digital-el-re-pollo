import { Link } from "react-router-dom";
import "../index.css"
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
          <div className="fila-producto encabezado">
            <span>Producto</span>
            <span>Precio ($)</span>
          </div>

          <div className="fila-producto">
            <label htmlFor="pollo-entero">{precio[0][0].nombre}</label>
            <input 
              type="number" 
              id="pollo-entero" 
              name="pollo-entero" 
              placeholder="Ej: 3500" 
              className="entrada-precio" 
            />
          </div>

          <div className="fila-producto">
            <label htmlFor="pollo-trozado">{precio[0][1].nombre}</label>
            <input 
              type="number" 
              id="pollo-trozado" 
              name="pollo-trozado" 
              placeholder="Ej: 4200" 
              className="entrada-precio" 
            />
          </div>

          <div className="fila-producto">
            <label htmlFor="milanesas">{precio[0][2].nombre}</label>
            <input 
              type="number" 
              id="milanesas" 
              name="milanesas" 
              placeholder="Ej: 5500" 
              className="entrada-precio" 
            />
          </div>
          
          <div className="fila-producto">
            <label htmlFor="patamuslo">{precio[0][3].nombre}</label>
            <input 
              type="number" 
              id="patamuslo" 
              name="patamuslo" 
              placeholder="Ej: 4800" 
              className="entrada-precio" 
            />
          </div>
          
          <div className="fila-producto">
            <label htmlFor="alitas">{precio[0][4].nombre}</label>
            <input 
              type="number" 
              id="alitas" 
              name="alitas" 
              placeholder="Ej: 2500" 
              className="entrada-precio" 
            />
          </div>

          <div className="fila-producto">
            <label htmlFor="alitas">{precio[0][5].nombre}</label>
            <input 
              type="number" 
              id="alitas" 
              name="alitas" 
              placeholder="Ej: 2500" 
              className="entrada-precio" 
            />
          </div>

          <div className="fila-producto">
            <label htmlFor="alitas">{precio[1][0].nombre}</label>
            <input 
              type="number" 
              id="alitas" 
              name="alitas" 
              placeholder="Ej: 2500" 
              className="entrada-precio" 
            />
          </div>

          <div className="fila-producto">
            <label htmlFor="alitas">{precio[1][1].nombre}</label>
            <input 
              type="number" 
              id="alitas" 
              name="alitas" 
              placeholder="Ej: 2500" 
              className="entrada-precio" 
            />
          </div>

          <div className="fila-producto">
            <label htmlFor="alitas">{precio[1][2].nombre}</label>
            <input 
              type="number" 
              id="alitas" 
              name="alitas" 
              placeholder="Ej: 2500" 
              className="entrada-precio" 
            />
          </div>

          <div className="fila-producto">
            <label htmlFor="alitas">{precio[1][3].nombre}</label>
            <input 
              type="number" 
              id="alitas" 
              name="alitas" 
              placeholder="Ej: 2500" 
              className="entrada-precio" 
            />
          </div>

          <div className="fila-producto">
            <label htmlFor="alitas">{precio[1][4].nombre}</label>
            <input 
              type="number" 
              id="alitas" 
              name="alitas" 
              placeholder="Ej: 2500" 
              className="entrada-precio" 
            />
          </div>

          <div className="fila-producto">
            <label htmlFor="alitas">{precio[1][5].nombre}</label>
            <input 
              type="number" 
              id="alitas" 
              name="alitas" 
              placeholder="Ej: 2500" 
              className="entrada-precio" 
            />
          </div>

          <div className="fila-producto">
            <label htmlFor="alitas">{precio[2][0].nombre}</label>
            <input 
              type="number" 
              id="alitas" 
              name="alitas" 
              placeholder="Ej: 2500" 
              className="entrada-precio" 
            />
          </div>

          <div className="fila-producto">
            <label htmlFor="alitas">{precio[2][1].nombre}</label>
            <input 
              type="number" 
              id="alitas" 
              name="alitas" 
              placeholder="Ej: 2500" 
              className="entrada-precio" 
            />
          </div>

          <div className="fila-producto">
            <label htmlFor="alitas">{precio[2][2].nombre}</label>
            <input 
              type="number" 
              id="alitas" 
              name="alitas" 
              placeholder="Ej: 2500" 
              className="entrada-precio" 
            />
          </div>

          <div className="fila-producto">
            <label htmlFor="alitas">{precio[2][3].nombre}</label>
            <input 
              type="number" 
              id="alitas" 
              name="alitas" 
              placeholder="Ej: 2500" 
              className="entrada-precio" 
            />
          </div>

          <div className="fila-producto">
            <label htmlFor="alitas">{precio[2][4].nombre}</label>
            <input 
              type="number" 
              id="alitas" 
              name="alitas" 
              placeholder="Ej: 2500" 
              className="entrada-precio" 
            />
          </div>

          <div className="fila-producto">
            <label htmlFor="alitas">{precio[2][5].nombre}</label>
            <input 
              type="number" 
              id="alitas" 
              name="alitas" 
              placeholder="Ej: 2500" 
              className="entrada-precio" 
            />
          </div>
        </form>
        <div className="formulario-acciones">
          <button type="submit" className="boton boton-actualizar">Actualizar Precios</button>
          <button type="button" className="boton boton-previsualizar">Vista Previa</button>
        </div>
        <div className="contenedor-boton-volver">
          <Link className="boton-volver" to="/home">🠔 Volver</Link>
        </div>
      </div>
    </div>
  );
}

export default PanelPrecios;