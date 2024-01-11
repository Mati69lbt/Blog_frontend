import React from "react";

const Subir_Imagen = () => {
  return (
    <div className="explicaciones">
      <h1>Subir Imagen</h1>
      <ul>
        <li>
          <p>Uso del middleware Multer</p>
          <pre>
            <code>{`
rutas/Articulos.js

const multer = require("multer");

// //Configuracion
const almacenamiento = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./imagenes/articulos/");
  },
  filename: (req, file, cb) => {
    cb(null, "articulo" + Date.now() + file.originalname);
  },
});

// // Middleware Multer:
const imagenes_subidas = multer({ storage: almacenamiento });

// // Ruta de Express:
const ArticuloControlador = require("../controladores/Articulo");
router.post(
  "/subir-imagen/:id",
  [imagenes_subidas.single("file0")],
  ArticuloControlador.subir_imagenes
);


controladores\Articulo.js
const fs = require("fs");

const subir_imagenes = async (req, res) => {
  if (!req.file ) {
    return res.status(400).send({
      status: "Error",
      message: "No has subido ninguna imagen",
    });
  }

 //Nombre del archivo
  let nombreImagen = req.file.originalname;

  //obtener la extension del archivo
  let archivo_split = nombreImagen.split(".");
  let extension_archivo = archivo_split[1].toLowerCase();

  const extesiones_permitidas = ["png", "jpg", "jpeg", "gif"].map((ext) =>
    ext.toLowerCase()
  );
// comprobar extension correcta
  if (!extesiones_permitidas.includes(extension_archivo)) {
    // borrar archivo y enviar respuesta
    fs.unlink(req.file.path, (error) => {
      return res.status(400).json({
        status: "Error",
        mensaje: "La extension del archivo no es validad",
      });
    });
  } else {
    let articulo_id = req.params.id;
    try {
      const articulo_Actualizado = await Articulo.findOneAndUpdate(
        { _id: articulo_id },
        { imagen: req.file.filename },
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
          mensaje: "Imagen actualizada correctamente",
          articulo: articulo_Actualizado,
        });
      }
    } catch (error) {
      return res.status(500).json({
        status: "error",
        mensaje: "Faltan datos por enviar",
        error: error.message,
      });
    }
  }
}
            `}</code>
          </pre>
        </li>
        <li>
          <p>Obtener una sola imagen</p>
          <pre>
            <code>{`
rutas/Articulos.js
router.get("/imagen/:fichero", ArticuloControlador.imagen);

controladores\Articulo.js
const imagen = async (req, res) => {
  let fichero = req.params.fichero;
  let ruta_fisica = "./imagenes/articulos/" + fichero;
  fs.stat(ruta_fisica, (error, existe) => {
    if (existe) {
      return res.sendFile(path.resolve(ruta_fisica));
    } else {
      return res.status(404).json({
        status: "Error",
        Mensaje: "La imagen no se encuentra disponible",
        existe,
        fichero,
        ruta_fisica,
      });
    }
  });
};
            `}</code>
          </pre>
        </li>
      </ul>
    </div>
  );
};

export default Subir_Imagen;
