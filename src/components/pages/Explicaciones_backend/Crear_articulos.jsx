import React from "react";

const Crear_articulos = () => {
  return (
    <div className="explicaciones">
      <h1>Crear y guardar nuevos articulos</h1>
      <ul>
        <li>
          <p>controladores\Articulo.js</p>
          <pre>
            <code>{`
  const crear_articulo = async (req, res) => {
  //recoger parametros por post a guardar
  let parametros = req.body;

  //validar los datos con validaor
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
          `}</code>
          </pre>
        </li>
        <li>
          <p>Crear el objeto a guardar</p>
          <pre>
            <code>{`  
//asi se guarda todo automaticamente
const articulo = new Articulo(parametros); 

//asignar valores a objeto basado en el modelo (manual o automatico)
//articulo.titulo = parametros.titulo; 
--- de forma manual, pero tardariamos mucho si tendriamos muchos parametros`}</code>
          </pre>
        </li>
        <li>
          <p>Guardar el articulo en la base de datos</p>
          <pre>
            <code>{`
  // el metodo de abajo esta deprecado
  // //   articulo.save((err, articuloGuardado) => {
  // //     if (err || !articuloGuardado) {
  // //       return res.status(400).json({
  // //         status: "error",
  // //         mensaje: "Error al guardar el art�culo",
  // //         });
  // //         }
  // //   return res.status(200).json({
  // //     status: "success",
  // //     articulo: articuloGuardado,
  // //     mensaje: "articulo guardado con exito!!!"
  // //   });
  // // });

  // nuevo metodo de guardado
  try {
    const articuloGuardado = await articulo.save();
    return res.status(200).json({
      status: "succes",
      articulo: articuloGuardado,
      mensaje: "Articulo guardado con exito",
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      mensaje: "Error al guardar el articulo",
    });
  }
};

module.exports = {
  crear_articulo,
};

en rutas\Articulos.js
const ArticuloControlador = require("../controladores/Articulo");
router.post("/crear", ArticuloControlador.crear_articulo);
            `}</code>
          </pre>
        </li>
      </ul>
    </div>
  );
};

export default Crear_articulos;

/*
<li>
          <p></p>
          <pre><code>{``}</code></pre>
        </li>
*/
