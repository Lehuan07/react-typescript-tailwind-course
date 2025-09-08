//*Tipos de datos

//Strings o cadenas de texto

const alumno = "Juan";
console.log(alumno);
console.log(typeof alumno);

const producto = 'Monitor 49"'

console.log(producto);
console.log(typeof producto);

//Numbers

const numero = 20.30
const numero2 = 30
const numero3 = -100
const numero4 = "-100"

console.log(typeof numero);
console.log(typeof numero2);
console.log(typeof numero3);
console.log(typeof numero4);


//BigInt 
const numeroGrande = BigInt (123453648745312354864133512344866431313543586443555452186999845312)
console.log(typeof numeroGrande)

//boolean
const descuento = true
console.log(typeof descuento)

//Null
const acceso = null;
console.log(typeof acceso)

//Symbol

const primerSymbol = Symbol(30)
const segundoSymbol = Symbol(30)
console.log (primerSymbol === segundoSymbol)