import { useState } from "react";
import Ajax_helpers from "../../helpers/Ajax_helpers";
import Global from "../../helpers/Global";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";

const Crear = () => {
  const { formulario, enviado, cambiado } = useForm({});
  const [resultado, setResultado] = useState();
  const navigate = useNavigate();

  const guardar_Articulo = async (e) => {
    e.preventDefault();
    let nuevo_Articulo = formulario;

    /* Guardar el articulo */
    const { datos, cargando } = await Ajax_helpers(
      Global.backend + "crear",
      "POST",
      nuevo_Articulo
    );

    const fileInput = document.querySelector("#file");

    if (datos.status === "success") {
      setResultado("guardado");
      //subir la imagen

      const formData = new FormData();

      formData.append("file0", fileInput.files[0]);

      const subir_imagen = await Ajax_helpers(
        Global.backend + "subir-imagen/" + datos.articulo._id,
        "POST",
        formData,
        true
      );

      if (subir_imagen.datos.status === "Exito") {
        setResultado("guardado");
        navigate("/articulos");
      } else {
        setResultado("error");
      }
    } else {
      setResultado("error");
    }
  };
  return (
    <div className="jumbo">
      <h1>Crear Articulos</h1>
      <p>Formulario para crearlo</p>

      <strong>{resultado === "guardado" ? "Articulo Guardado" : ""}</strong>
      <strong>
        {resultado === "error"
          ? "Algo no salio bien, por lo tanto salio MAL"
          : ""}
      </strong>
      {/* montar formulario */}
      <form action="" className="formulario" onSubmit={guardar_Articulo}>
        <div className="form-group">
          <label htmlFor="titulo">Titulo del articulo</label>
          <input type="text" name="titulo" onChange={cambiado} />
        </div>

        <div className="form-group">
          <label htmlFor="contenido">Contenido</label>
          <textarea type="text" name="contenido" onChange={cambiado} />
        </div>

        <div className="form-group">
          <label htmlFor="file0">Imagen</label>
          <input type="file" name="file0" id="file" />
        </div>

        <input type="submit" value="Guardar" className="btn btn-success" />
      </form>
    </div>
  );
};

export default Crear;
