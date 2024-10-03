
const Contact = () => {
    return (
        <div className="contacto-container">
        <h2>Contacto</h2>
        <form>
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" placeholder="Ingresa tu nombre" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Ingresa tu email" />
          </div>
          <div className="form-group">
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea id="mensaje" name="mensaje" placeholder="Escribe tu mensaje"></textarea>
          </div>
          <button type="button">Enviar</button>
        </form>
      </div>
      )
}

export default Contact;