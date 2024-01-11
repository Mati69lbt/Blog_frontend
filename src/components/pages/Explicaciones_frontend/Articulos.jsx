import React from "react";

const Articulos = () => {
  return (
    <div className="explicaciones">
      <h1>Todo sobre articulos, articulo y listado</h1>
      <ul>
        <li>
          <p>Articulos</p>
          <pre>
            <code>
              {`
  const Articulos = () => {
    const [articulos, setArticulos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
    conseguir_Articulos();
  }, []);

  const conseguir_Articulos = async () => {
    const url = Global.url + "articulos";
    const { datos, cargando } = await Ajax_helpers(url, "GET");
    setLoading(cargando);

    /*
    METODO ANTERIOR
    let peticion = await fetch(url, {
      method: "GET",
    }); 
     let datos = await peticion.json(); 
    */

    if (datos.status === "succes") {
      setArticulos(datos.articulos);
    }
    setLoading(false);
  };
  return (
    <>
      {loading ? (
        "Cargando..."
      ) : articulos.length >= 1 ? (
        <Listado articulos={articulos} setArticulos={setArticulos} />
      ) : (
        <div>
          <h1>
            No hay articulos,{" "}
            <Link to="/crear-articulos" className="button">
              creee uno:
            </Link>
          </h1>
        </div>
      )}
    </>
  );
};

export default Articulos;
            `}
            </code>
          </pre>
        </li>
        <li>
          <p>Articulo</p>
          <pre>
            <code>
              {`
  const Articulo = () => {
    const [articulo, setArticulo] = useState({});
    const [loading, setLoading] = useState(false);
    const params = useParams();

    useEffect(() => {
      conseguir_Articulo();
    }, []);

    const conseguir_Articulo = async () => {
      const url = Global.url + "articulo/" + params.id;
      const { datos, cargando } = await Ajax_helpers(url, "GET");
      setLoading(cargando);

      if (datos.status === "success") {
      setArticulo(datos.articulo);
      }
      setLoading(false);
    };
    return (
      <div className="jumbo">
        {loading ? (
          "Cargando..."
      ) : (
        <>
          <div className="mascara">
            {articulo.imagen != "default.png" && (
              <img
                src={Global.url + "imagen/" + articulo.imagen}
                alt="no hay imagen"
              />
            )}
            {articulo.imagen === "default.png" && (
              <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkI"
                alt="no hay imagen"
              />
            )}
          </div>
          <h1>{articulo.titulo}</h1>
          <p>Creado: {Fecha_Formateada(articulo.fecha)}</p>
          <p className="description">{articulo.contenido}</p>
        </>
      )}
    </div>
  );
};
            `}
            </code>
          </pre>
        </li>
        <li>
          <p>Listado</p>
          <pre>
            <code>
              {`
  const Listado = ({ articulos, setArticulos }) => {
    const eliminar = async (id) => {
      try {
        let { datos } = await Ajax_helpers(
          Global.url + "articulo/" + id,
          "DELETE"
        );

      if (datos.status === "success") {
        let articulos_Actualizados = articulos.filter(
          (articulo) => articulo._id !== id
        );

        setArticulos(articulos_Actualizados);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return articulos.map((item) => (
    <article className="articulo-item" key={item._id}>
      <div className="mascara">
        {item.imagen != "default.png" && (
          <img src={Global.url + "imagen/" + item.imagen} alt="no hay imagen" />
        )}
        {item.imagen === "default.png" && (
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/"
            alt="no hay imagen"
          />
        )}
      </div>
      <div className="datos">
        <h3 className="title">
          <Link to={"/articulo/" + item._id}>{item.titulo}</Link>
        </h3>
        <p>Creado: {Fecha_Formateada(item.fecha)}</p>
        <p className="description">{item.contenido}</p>
        <div>
          <Link className="edit" to={"/editar/" + item._id}>
            Editar
          </Link>
          <button
            className="delete"
            onClick={() => {
              eliminar(item._id);
            }}
          >
            Eliminar
          </button>
        </div>
      </div>
    </article>
  ));
};

export default Listado;
            `}
            </code>
          </pre>
        </li>
      </ul>
    </div>
  );
};

export default Articulos;
