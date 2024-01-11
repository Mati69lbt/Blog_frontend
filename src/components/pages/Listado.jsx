import { Link } from "react-router-dom";
import Ajax_helpers from "../../helpers/Ajax_helpers";
import Fecha_Formateada from "../../helpers/Fecha_Formateada";
import Global from "../../helpers/Global";

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
          <Link to={"/imagen/" + item.imagen}>
            <img
              src={Global.url + "imagen/" + item.imagen}
              alt="no hay imagen"
            />
          </Link>
        )}
        {item.imagen === "default.png" && (
          <img src={Global.not_imagen} alt="no hay imagen" />
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
