import React from 'react'

export const Add = () => {
    return (
        <div className="add">
            <h3 className="title">Añadir recetas</h3>
            <form>
                <input type="text" placeholder="Titulo" />
                <textarea placeholder="descripcion"></textarea>
                <input type="submit" value="guardar" />
            </form>
        </div>
    )
}
