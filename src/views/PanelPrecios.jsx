import "../index.css"

function PanelPrecios() {
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

          {/* Producto 1 */}
          <div className="fila-producto">
            <label htmlFor="pollo-entero">Pollo Entero</label>
            <input 
              type="number" 
              id="pollo-entero" 
              name="pollo-entero" 
              placeholder="Ej: 3500" 
              className="entrada-precio" 
            />
          </div>

          {/* Producto 2 */}
          <div className="fila-producto">
            <label htmlFor="pollo-trozado">Pollo Trozado (x Kg)</label>
            <input 
              type="number" 
              id="pollo-trozado" 
              name="pollo-trozado" 
              placeholder="Ej: 4200" 
              className="entrada-precio" 
            />
          </div>

          {/* Producto 3 */}
          <div className="fila-producto">
            <label htmlFor="milanesas">Milanesas (x Kg)</label>
            <input 
              type="number" 
              id="milanesas" 
              name="milanesas" 
              placeholder="Ej: 5500" 
              className="entrada-precio" 
            />
          </div>
          
          {/* Producto 4 */}
          <div className="fila-producto">
            <label htmlFor="patamuslo">Pata Muslo (x Kg)</label>
            <input 
              type="number" 
              id="patamuslo" 
              name="patamuslo" 
              placeholder="Ej: 4800" 
              className="entrada-precio" 
            />
          </div>
          
          {/* Producto 5 */}
          <div className="fila-producto">
            <label htmlFor="alitas">Alitas (x Kg)</label>
            <input 
              type="number" 
              id="alitas" 
              name="alitas" 
              placeholder="Ej: 2500" 
              className="entrada-precio" 
            />
          </div>

          <div className="formulario-acciones">
            <button type="submit" className="boton boton-actualizar">Actualizar Precios</button>
            <button type="button" className="boton boton-previsualizar">Vista Previa</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PanelPrecios;