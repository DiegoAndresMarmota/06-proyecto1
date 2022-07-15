
function App() {
  return (
    <div className="layout">
        {/*Cabecera*/}
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
                <h1>#</h1>
        </header>
        {/*Barra de Navegación*/}
        <nav className="nav">
            <ul>
                <li><a href="/#">Inicio</a></li>
                <li><a href="/#">Recetas</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contacto</a></li>
            </ul>
        </nav>

        {/*Contenido Principal*/}
        <section className="content">
            {/*Aqui van las recetas*/}
            <article className="receta-item">
                <h3 className="title">Receta</h3>
                <p className="description">Descripcion de tu receta</p>
                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>
            <article className="receta-item">
                <h3 className="title">Receta</h3>
                <p className="description">Descripcion de tu receta</p>
                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>
            <article className="receta-item">
                <h3 className="title">Receta</h3>
                <p className="description">Descripcion de tu receta</p>
                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>
            <article className="receta-item">
                <h3 className="title">Receta</h3>
                <p className="description">Descripcion de tu receta</p>
                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>
        </section>

        {/*Barra lateral*/}
        <aside className="lateral">
            <div className="search">
                <h3 className="title">Buscador</h3>
                <form>
                    <input type="text" />
                    <button>Buscar</button>
                </form>
            </div>
            <div className="add">
                <h3 className="title">Añadir recetas</h3>
                <form>
                    <input type="text" placeholder="Titulo" />
                    <textarea placeholder="descripcion"></textarea>
                    <input type="submit" value="guardar" />
                </form>
            </div>
        </aside>

        {/*Pie de página*/}
        <footer className="footer">
            &copy; Proyecto inicial y maqueteo inicial de Js ES12 y TypeScript
        </footer>

    </div>
  );
}

export default App;
