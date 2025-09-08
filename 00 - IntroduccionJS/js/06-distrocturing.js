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
    direccion: {
        calle: "Calle Mexico"
    }
}

const {nombre} = producto

const {nombre: nombreCliente, direccion: {calle}} = cliente

console.log(nombre);
console.log(nombreCliente)
console.log(calle)