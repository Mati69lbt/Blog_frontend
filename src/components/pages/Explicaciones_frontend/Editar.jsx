import React from "react";

const Editar = () => {
  return (
    <div className="explicaciones">
      <h1>Editar un Articulo existente</h1>
      <ul>
        <li>
          <p>Componente Editar</p>
          <pre>
            <code>{`

const Editar = () => { 
 
  const { formulario, enviado, cambiado } = useForm({});
  
  const [resultado, setResultado] = useState();
  const navigate = useNavigate();

  const [articulo, setArticulo] = useState({});
  
  const params = useParams();

  useEffect(() => {
    conseguir_Articulo();
  }, []);

  const conseguir_Articulo = async () => {
    try {
      const url = Global.url + "articulo/" + params.id;
      const { datos } = await Ajax_helpers(url, "GET");

      if (datos.status === "success") {
        setArticulo(datos.articulo);
      }
    } catch (error) {
      console.log(error;
    }
  };

  const editar_Articulo = async (e) => {
    e.preventDefault();
    
    try {
      const nuevo_Articulo = {
        titulo: formulario.titulo ? formulario.titulo : articulo.titulo,
        contenido: formulario.contenido
          ? formulario.contenido
          : articulo.contenido,
      };
      
      const fileInput = document.querySelector("#file");

      // Guardar el artículo
      const { datos } = await Ajax_helpers(
        Global.url + "articulo/" + params.id,
        "PUT",
        nuevo_Articulo
      );

      if (datos.status === "Exito") {
        setResultado("guardado");

        // Subir la imagen si se seleccionó un archivo
        if (fileInput.files.length > 0) {
          const formData = new FormData();
          formData.append("file0", fileInput.files[0]);

          const subir_imagen = await Ajax_helpers(
            Global.url + "subir-imagen/" + datos.articulo._id,
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
          // Conservar la imagen existente si no se selecciona un nuevo archivo
          const { datos } = await Ajax_helpers(
            Global.url + "/articulo/" + params.id,
            "PUT",
            { ...nuevo_Articulo, imagen: articulo.imagen }
          );

          if (datos.status === "Exito") {
            setResultado("guardado");
            navigate("/articulos");
          } else {
            setResultado("error");
          }
        }
      } else {
        setResultado("error");
      }
    } catch (error) {
      console.log(error);
    }

  };
  return (
    <div className="jumbo">
      <h1>Editar Articulo</h1>
      <p>
        Formulario para editar: <strong>{articulo.titulo}</strong>
      </p>

      <strong>{resultado === "guardado" ? "Articulo Guardado" : ""}</strong>
      <strong>
        {resultado === "error"
          ? "Algo no salio bien, por lo tanto salio MAL"
          : ""}
      </strong>
      {/* montar formulario */}
      <form action="" className="formulario" onSubmit={editar_Articulo}>
        <div className="form-group">
          <label htmlFor="titulo">Titulo del articulo</label>
          <input
            type="text"
            name="titulo"
            onChange={cambiado}
            defaultValue={articulo.titulo}
          />
        </div>

        <div className="form-group">
          <label htmlFor="contenido">Contenido</label>
          <textarea
            type="text"
            name="contenido"
            onChange={cambiado}
            defaultValue={articulo.contenido}
          />
        </div>

        <div className="form-group">
          <label htmlFor="file0">Imagen</label>
          <div className="mascara">
            {articulo.imagen != "default.png" && (
              <img
                src={Global.url + "imagen/" + articulo.imagen}
                alt="no hay imagen"
              />
            )}
            {articulo.imagen === "default.png" && (
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/"
                alt="no hay imagen"
              />
            )}
          </div>
          <input type="file" name="file0" id="file" />
        </div>

        <input type="submit" value="Guardar" className="btn btn-success" />
      </form>
    </div>
  );
};

export default Editar;


          `}</code>
          </pre>
        </li>
      </ul>
    </div>
  );
};

export default Editar;
