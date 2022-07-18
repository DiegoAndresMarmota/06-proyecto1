import { Add } from "./components/Agregar/Add";
import { Buscador } from "./components/Buscador/Buscador";
import { Titulo } from "./components/Cabecera/Titulo";
import { Listado } from "./components/Listado/Listado";
import { Navegacion } from "./components/navegacion/Nav";
import { PiePagina } from "./components/pie/PiePagina";

function App() {
    return (
        <div className="layout">

            {/*Cabecera*/}
            <header className="header">
                <Titulo />
            </header>

            {/*Barra de Navegación*/}
            <nav className="nav">
                <Navegacion />
            </nav>

            {/*Contenido Principal*/}
            <section className="content">
                {/*Aqui van el listado de recetas*/}
                <Listado />
            </section>

            {/*Barra lateral, boton buscador*/}
            <aside className="lateral">
                <Buscador />
            {/*Añadir recetas*/}
                <Add />
            </aside>

            {/*Pie de página*/}
            <footer className="footer">
                <PiePagina />
            </footer>

        </div>
    );
}

export default App;
