export default function Acceso() {
  return (
    <div className="contenedor-login">
      <div className="tarjeta-login">
        <h2 className="titulo">Bienvenido a Granja El Re Pollo</h2>
        <p className="subtitulo">Ingrese para acceder a su panel de productos</p>

        <form className="formulario">
          <div className="campo">
            <label htmlFor="usuario">Usuario</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Ingrese su usuario"
              required
            />
          </div>

          <div className="campo">
            <label htmlFor="contraseña">Contraseña</label>
            <input
              type="password"
              id="contraseña"
              name="contraseña"
              placeholder="Ingrese su contraseña"
              required
            />
          </div>

          <button type="submit" className="boton">
            Ingresar
          </button>

          <p className="texto-registro">
            ¿No tiene una cuenta? <a href="#">Regístrese aquí</a>
          </p>
        </form>
      </div>
    </div>
  );
}
