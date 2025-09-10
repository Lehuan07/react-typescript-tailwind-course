//AND y OR

const disponible = 2000
const pagar = 2200
const tarjeta = true

if(disponible > pagar || tarjeta){
    console.log("Puede pagar")
}else{
    console.log("No tiene salgo ni tarjeta")
}