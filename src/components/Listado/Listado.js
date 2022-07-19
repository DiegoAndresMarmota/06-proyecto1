import React, { useEffect, useState } from 'react'
import { Editar } from '../editar/Editar';

export const Listado = ({ listadoState, setListadoState }) => {

    //const [listadoState, setListadoState] = useState([]);

    const [editar, setEditar] = useState(0);

    useEffect(() => {
        conseguirRecetas();
    }, []);

    const conseguirRecetas = () => {
        let recetas = JSON.parse(localStorage.getItem("recetas"));

        setListadoState(recetas);
    }

    const borrarReceta = (id) => {

        //Conseguir peliculas almacenadas
        let receta_almacenadas = conseguirRecetas();

        //Filtrar esas peliculas para que elimine del array la que no quiero
        let nuevo_array_recetas = receta_almacenadas.filter(receta => receta.id !== parseInt(id));

        //Actualizar estado del listado
        setListadoState(nuevo_array_recetas);

        //Actualizar los datos en el LocalStorage
        localStorage.setItem('recetas', JSON.stringify(nuevo_array_recetas));
    }
    
    return (
        <>
            {listadoState != null ? listadoState.map(receta => {

                return (
                    <article key={receta.id} className="receta-item">
                        <h3 className="title">{receta.title}</h3>
                        <p className="description">{receta.description}</p>
    
                        <button className="edit" onClick={() => {
                            setEditar(receta.id)
                        }}
                        >Editar</button>
                        <button className="delete" onClick={() =>
                            borrarReceta(receta.id)}>Borrar</button>
                        
                        {/*Aparece formulario de editar*/}
                        {editar === receta.id && (
                            <Editar receta={receta} />
                        
                        )}
                    </article>
                );
            })
                : <h2> No hay recetas para mostrar </h2>
            }
        </>
    )
};
