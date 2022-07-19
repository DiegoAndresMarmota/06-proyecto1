import React from 'react'

export const Editar = ({receta}) => {

    const titulo_componente = 'Editar pelicula'

    return (
        <div className='edit_form'>
            <h3 className='title'>{titulo_componente}</h3>
            <form>
                <input
                    type='text'
                    name='titulo'
                    className='titulo_editado'
                    defaultValue={receta.titulo} />
                
                <textarea
                    name='descripcion'
                    defaultValue={ receta.descripcion}
                    className='descripcion_editada' />
                
                <input
                    type="submit"
                    className='editar'
                    value="Actualizar" />
            </form>
        </div>
    )
}

