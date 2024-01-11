import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [Buscar, setBuscar] = useState("");

  const navigate = useNavigate();

  const hacer_Busqueda = (e) => {
    e.preventDefault();
    let mi_busqueda = e.target.search_field.value;
    console.log(mi_busqueda);
    navigate("/buscar/" + mi_busqueda, { replace: true });
  };
  return (
    <aside className="lateral">
      <div className="search">
        <h3 className="title">Buscar: </h3>
        <form action="" onSubmit={hacer_Busqueda}>
          <input
            type="text"
            name="search_field"
            id="search_field"
            autoComplete="off"
          />
          <input type="submit" id="search" value="Buscar" />
        </form>
      </div>
    </aside>
  );
};

export default Sidebar;
