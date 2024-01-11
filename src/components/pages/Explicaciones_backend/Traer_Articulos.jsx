import React from "react";

const Traer_Articulos = () => {
  return (
    <div className="explicaciones">
      <h1>Traer Articulos de la Base de datos</h1>
      <ul>
        <li>
          <p>controladores\Articulo.js</p>
          <pre>
            <code>{`
  const conseguir_articulos = async (req, res) => {
  try {
    const articulos = await Articulo.find({}).exec();

    if (!articulos || articulos.length === 0) {
      return res.status(404).json({
        status: "error",
        message: "No se encontraron articulos",
      });
    }
    return res.status(200).json({
      status: "sucess",
      articulos,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      mensaje: "Error al obtener los articulos",
      error: error.message,
    });
  }
};

module.exports = {
  conseguir_articulos,
};

en rutas\Articulos.js
const ArticuloControlador = require("../controladores/Articulo");
router.get("/articulos", ArticuloControlador.conseguir_articulos);
            `}</code>
          </pre>
        </li>
        <li>
          <p>
            ¿Como traer la cantidad de articulos que querramos?, es parecido al
            anterior con algunas cositas nuevas, como en el endpoint q ponemos
            el numero
          </p>
          <pre>
            <code>{`
controladores\Articulo.js
const listar_articulos = async (req, res) => {
  const parametros_url = req.params.ultimos;

  try {
    let busqueda = Articulo.find({});

    if (parametros_url) {
      busqueda = busqueda.limit(parseInt(parametros_url));
    }

    const articulos = await busqueda.sort({ fecha: 1 }).exec();

    if (!articulos || articulos.length === 0) {
      return res.status(404).json({
        status: "error",
        message: "No hay articulos en la base de datos",
        error: error.message,
      });
    }
    res.status(200).json({
      status: "succes",
      parametros_url: parametros_url,
      contador: articulos.length,
      articulos,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Error al obtener articulos",
      error: error.message,
    });
  }
};
module.exports = {
  listar_articulos,
};

rutas\Articulos.js
const ArticuloControlador = require("../controladores/Articulo");
router.get("/articulos/:ultimos?", ArticuloControlador.listar_articulos);

            `}</code>
          </pre>
        </li>
        <li>
          <p>¿Como traer un solo articulo?</p>
          <pre>
            <code>{`controladores\Articulo.js
            
const sacar_un_solo_articulo = async (req, res) => {
  // recoger id de la url
  let id = req.params.id;
  // buscar el articulo
let articulo; 
  try {
    articulo = await Articulo.findById(id);
    
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Error al buscar el art�culo",
      error: error.message,
    });
  }

  if (!articulo) {
    return res.status(404).json({
      status: "error",
      message: "El articulo no existe",
    });
  } else {
    res.status(200).json({
      status: "success",
      consulta: id,
      articulo,
    });
  }
};

rutas\Articulos.js
const ArticuloControlador = require("../controladores/Articulo");
router.get("/articulo/:id", ArticuloControlador.sacar_un_solo_articulo);`}</code>
          </pre>
        </li>
      </ul>
    </div>
  );
};

export default Traer_Articulos;
