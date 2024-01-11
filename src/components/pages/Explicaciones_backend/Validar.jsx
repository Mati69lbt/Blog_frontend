const Validar = () => {
  return (
    <div className="explicaciones">
      <h1>Validar Datos</h1>
      <ul>
        <li>
          <p>Validar los datos en el controladores\Articulo.js</p>
          <pre>
            <code>{`
const validator = require("validator");

  const crear_articulo = (req, res) => {
  /* recoger parametros por post a guardar */  
  let parametros = req.body;
  
  /* validar los datos con validar */
  try {
    let validar_titulo =
      !validator.isEmpty(parametros.titulo) &&
      validator.isLength(parametros.titulo, { min: 5, max: undefined });
    let validar_contenido = !validator.isEmpty(parametros.contenido);
    if (!validar_titulo || !validar_contenido) {
      throw new Error("No se ha validado la Informacion!");
    }
  } catch (error) {
    return res.status(400).json({
      status: "error",
      mensaje: "Faltan datos por enviar",
    });
  }
  return res.status(200).json({
    mensaje: "Accion de guardar",
    parametros,
  });
};
          `}</code>
          </pre>
        </li>
      </ul>
    </div>
  );
};

export default Validar;
