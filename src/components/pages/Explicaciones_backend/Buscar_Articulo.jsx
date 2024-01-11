import React from "react";

const Buscar_Articulo = () => {
  return (
    <div className="explicaciones">
      <h1>Buscador de Articulos</h1>
      <ul>
        <li>
          <p>controladores\Articulo.js</p>
          <pre>
            <code>{`
const buscador = async (req, res) => {
  let busqueda = req.params.busqueda;

  const articulo = Articulo.find({
    $or: [
      { titulo: { $regex: busqueda, $options: "i" } },
      { contenido: { $regex: busqueda, $options: "i" } },
    ],
  });
  const articulo_encontrado = await articulo.sort({ fecha: -1 }).exec();
  if (!articulo_encontrado || articulo_encontrado.length === 0) {
    return res.status(404).json({
      status: "error",
      message: "No hay articulos en la base de datos",
    });
  } else {
    res.status(200).json({
      status: "succes",
      articulo_encontrado,
    });
  }
};

en rutas\Articulos.js
const ArticuloControlador = require("../controladores/Articulo");
router.get("/buscar/:busqueda", ArticuloControlador.buscador);


            `}</code>
          </pre>
        </li>
      </ul>
    </div>
  );
};

export default Buscar_Articulo;
