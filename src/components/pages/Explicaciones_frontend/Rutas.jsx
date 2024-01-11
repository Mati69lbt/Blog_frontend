import React from "react";

const Rutas = () => {
  return (
    <div className="explicaciones">
      <h1>Rutas</h1>
      <ul>
        <li>
          <p>Muestra del ruteo</p>
          <pre>
            <code>
              {`
const Rutas = () => {
  return (
    <BrowserRouter>
      {/* LAYOUT */}
      <Header />
      <Nav />

      {/* Contenido central y rutas */}
      <section id="content" className="content">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/articulos" element={<Articulos />} />
          <Route path="/crear-articulos" element={<Crear />} />
          <Route path="/buscar/:busqueda" element={<Busqueda />} />
          <Route path="/articulo/:id" element={<Articulo />} />
          <Route path="/editar/:id" element={<Editar />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/backend/*" element={<Backend_Routes />} />
          <Route path="/frontend/*" element={<Frontend_Routes />} />

          <Route
            path="*"
            element={
              <div className="Jumbo">
                <h1>Error 404</h1>
                <h1>Pagina No Encontrada</h1>
              </div>
            }
          />
        </Routes>
      </section>
      <Sidebar />
      <Footer />
    </BrowserRouter>
  );
};
            `}
            </code>
          </pre>
        </li>
      </ul>
    </div>
  );
};

export default Rutas;
/* 
<ul>
<li>
<p>Muestra del ruteo</p>
<pre><code>
            {`
            
            `}</code></pre>
</li>
</ul>
*/
