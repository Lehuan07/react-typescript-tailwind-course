//*Objetos

const producto = {
    //*Key     Value
    nombre: "Tablet", //!Completo es una propiedad
    precio: 300,
    disponible: false
}

console.log(producto)
console.table(producto)
console.log(producto.precio)

//const disponible = producto.disponible;
//console.log(disponible)

//Destrocturing
const {nombre, precio, disponible} = producto
console.log(nombre)
console.log(precio)
console.log(disponible)


//? Objeto literal Enhacement
const autenticado = true;
const usuario2 = "Juan"

const nuevoObjeto = {
    autenticado,
    usuario: usuario2
}

console.log(nuevoObjeto)