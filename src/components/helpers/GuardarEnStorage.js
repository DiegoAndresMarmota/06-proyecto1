
export const GuardarEnStorage = (clave, elemento) => {
    
    //13. Conseguir los elementos que ya tenemos en el locaStorage
    let elementos = JSON.parse(localStorage.getItem(clave));
    //14. Comprobar si es un array
    if (Array.isArray(elementos)) {
        //14a. Añadir dentro del array un elemento nuevo
        elementos.push(elemento);
    } else {
        //14b. Crear un array con el nuevo elemento
        elementos = [elemento];
    }
    //15. Guardar en el localstorage
    localStorage.setItem(clave, JSON.stringify(elementos));
     
    //16. Devolver el objeto guardado
    return elemento;
}