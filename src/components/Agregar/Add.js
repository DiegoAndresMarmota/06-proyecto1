import React, { useState } from 'react'

export const Add = () => {
    //1. Agregar propiedad del propio componente
    const titulo = "Añadir receta"
    //9. Guardar esta inforamcion en el estado del propio componente
    const [recetaState, setRecetaState] = useState({
        title: '',
        description: '',
    });

    const { title, description } = recetaState;

    //5.
    const conseguirDatosForm = (e) => {
        //6. Evitar el funcionamiento por default del form(actualizar)
        e.preventDefault();
        //7. Conseguir datos del form
        let target = e.target;
        let titulo = target.title.value;
        let description = target.description.value;
        //8. Crear objeto de la receta a guardar
        let receta = {
            id: new Date().getTime(),
            titulo,
            description,
        };

        //10. Guardar estado
        setRecetaState(receta);

        //12. Guardar en el amacenamiento local
        guardarEnStorage(receta);
        
    }

    const guardarEnStorage = receta => { 
        
        //13. Conseguir los elementos que ya tenemos en el locaStorage;
        let elementos = JSON.parse(localStorage.getItem("recetas"));

        //14. Comprobar si es un array
        if (Array.isArray(elementos)){
            //14a. Añadir dentro del array un elemento nuevo
            elementos.push(receta);
        } else {
            //14b. Crear un array con la nueva receta
            elementos = [receta];
        }
        //15. Guardar en el localstorage
        localStorage.getItem("Recetas", JSON.stringify(elementos));
         
        //11. Guardar en el almacenamiento local
        //17. Guardar datos en un JSON string
        localStorage.setItem('recetas', JSON.stringify([receta]));
    
        //16. Devolver el objeto guardado
        return receta;
    }

    return (
        <div className="add">
            {/*2. Sustituir variable por componente */}
            <h3 className="title">{titulo}</h3>
            <strong>
                {(title && description) && "Has creado la receta: " + title}
            </strong>
            {/*4. Vincular al formulario un evento con onSubmit*/}
            <form onSubmit={conseguirDatosForm}>
                {/*3. Conseguir datos del formulario, cuando sea rellenado*/}
                <input
                    type="text"
                    id='title'
                    name='title'
                    placeholder="Titulo" />
                <textarea
                    id='description'
                    name='description'
                    placeholder="Descripcion"></textarea>
                <input
                    type="submit"
                    id='save'
                    value="guardar" />
            </form>
        </div>
    )
}