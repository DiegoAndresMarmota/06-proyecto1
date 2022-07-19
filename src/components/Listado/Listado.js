import React, { useEffect, useState } from 'react'

export const Listado = (listadoState, setListadoState  => {

    const [listadoState, setListadoState] = useState([]);

    useEffect(() => {
        conseguirRecetas();
    }, []);

    const conseguirRecetas = () => {
        let recetas = JSON.parse(localStorage.getItem("recetas"));

        setListadoState(recetas);
    }

    return (
        <>
            {listadoState != null ? listadoState.map(receta => {

                return (
                    <article key={receta.id} className="receta-item">
                        <h3 className="title">{receta.title}</h3>
                        <p className="description">{receta.description}</p>
    
                        <button className="edit">Editar</button>
                        <button className="delete">Borrar</button>
                    </article>
                );
            })
                : <h2> No hay recetas para mostrar </h2>
            }
        </>
    )
})
