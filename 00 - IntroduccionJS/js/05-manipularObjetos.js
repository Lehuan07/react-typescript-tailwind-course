//*Objetos

const producto = {
    //*Key     Value
    nombre: "Tablet", //!Completo es una propiedad
    precio: 300,
    disponible: false
}

//!El freeze no deja modificar el objeto
Object.freeze(producto)

//*El Seal permite solo modificar las propiedades existentes, pero no permite agregar ni eliminar nuevas propiedades al objeto
Object.seal(producto)

producto.disponible = true;

//*Si no existe, lo va a agregar
producto.imagen = "imagen.jpg"

console.log(producto.disponible)

console.table(producto)

//!Eliminar

delete producto.precio;
console.log(producto)