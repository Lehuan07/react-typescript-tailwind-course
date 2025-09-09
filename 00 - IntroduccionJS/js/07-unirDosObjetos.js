//!Distrocturing de dos o mas objetos

const producto = {
    //*Key     Value
    nombre: "Tablet", //!Completo es una propiedad
    precio: 300,
    disponible: false
}

const cliente = {
    nombre: "Juan",
    premium: true,
}

const carrito ={
    cantidad: 1,
    ...producto //Tres puntos o spred, espara agregar un objeto dentro de otro de forma plana
}

console.log(carrito)

const nuevoObjeto ={
    ...producto,
    ...cliente //!En este caso el nombre del producto se borra por que se sobre escribe.
}

console.log(nuevoObjeto)

const nuevoObjeto2 = Object.assign(producto, cliente);
console.log(nuevoObjeto2)