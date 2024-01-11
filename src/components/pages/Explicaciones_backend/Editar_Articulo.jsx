import React from "react";

const Editar_Articulo = () => {
  return (
    <div className="explicaciones">
      <h1>Editar Articulos</h1>
      <ul>
        <li>
          <p>controladores\Articulo.js</p>
          <pre>
            <code>{`
  const editar_articulo = async (req, res) => {
  let id_articulo = req.params.id;

  let parametros = req.body;

  try {
    let validar_titulo =
      !validator.isEmpty(parametros.titulo) &&
      validator.isLength(parametros.titulo, { min: 5, max: undefined });
    let validar_contenido = !validator.isEmpty(parametros.contenido);
    if (!validar_titulo || !validar_contenido) {
      throw new Error("No se ha validado la Informacion!");
    }
    //Buscar y actualizar el articulo
    const articulo_Actualizado = await Articulo.findOneAndUpdate(
      { _id: id_articulo },
      parametros,
      { new: true }
    );

    if (!articulo_Actualizado) {
      return res.status(404).json({
        status: "Error",
        Mensaje: "El articulo no existe en la base de Datos",
      });
    } else {
      res.status(201).json({
        status: "Exito",
        articulo: articulo_Actualizado,
      });
    }
  } catch (error) {
    return res.status(400).json({
      status: "error",
      mensaje: "Faltan datos por enviar",
      error: error.message,
    });
  }
};

rutas\Articulos.js
const ArticuloControlador = require("../controladores/Articulo");
router.put("/articulo/:id", ArticuloControlador.editar_articulo);
            `}</code>
          </pre>
        </li>
      </ul>
    </div>
  );
};

export default Editar_Articulo;
