import { useNavigate, useParams } from "react-router-dom";
import Global from "../../helpers/Global";
import { useEffect, useState } from "react";

const Imagen = () => {
  const [imagen, setImagen] = useState();

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    traer_Imagen();
  }, []);

  const traer_Imagen = async () => {
    const url = Global.url + "imagen/" + params.nombre;

    try {
      const peticion = await fetch(url);
      if (!peticion.ok) {
        throw new Error(
          `Error en la solicitud: ${peticion.status} ${peticion.statusText}`
        );
      }
      // Obtén la imagen como objeto Blob
      const imagenBlob = await peticion.blob();

      // Crea una URL para el objeto Blob
      const imageUrl = URL.createObjectURL(imagenBlob);

      // Establece la URL de la imagen en el estado
      setImagen(imageUrl);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="jumbo">
      <img
        src={imagen}
        alt=""
        className="superimagen"
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
      <button onClick={() => navigate(-1)}>Volver</button>
    </div>
  );
};

export default Imagen;
