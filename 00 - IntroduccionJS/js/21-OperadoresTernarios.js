//Operadores ternarios


const auth = true

const saldo = 2000
const pagar = 2200
const tarjeta = true

//*Primerp: Lo que queremos comprobar (lo que va en el if)
//* ? preguntamos si se cumple la condicion y se ejecuta el codigo
//* : es el else

auth ? 
    console.log("Usted esta autenticado") : 
    console.log("Usted no esta autenticado")

saldo > pagar ?
    console.log("Usted puede pagar") :
    tarjeta ? console.log("Usted puede pagar con tarjeta") : 
    console.log("Usted no puede pagar")