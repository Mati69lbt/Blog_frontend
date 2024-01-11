import React from "react";

const Borrar_Articulo = () => {
  return (
    <div className="explicaciones">
      <h1>Borrar un Articulo</h1>
      <ul>
        <li>
          <p>controladores\Articulo.js</p>
          <pre>
            <code>{`
  const borrar_articulo = async (req, res) => {
  let id_params = req.params.id;

  let articulo;

  try {
    articulo = await Articulo.findOneAndDelete({ _id: id_params });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: "No se ha podido eliminar el articulo",
      error: error.message,
    });
  }

  if (!articulo) {
    return res.status(404).json({
      status: "error",
      message: "El articulo no existe",
    });
  }
  return res.status(200).json({
    status: "success",
    message: "metodo de borrar aprobado",
    id,
    articulo
  });
};

rutas\Articulos.js
const ArticuloControlador = require("../controladores/Articulo");
router.delete("/articulo/:id", ArticuloControlador.borrar_articulo);
`}</code>
          </pre>
        </li>
      </ul>
    </div>
  );
};

export default Borrar_Articulo;
