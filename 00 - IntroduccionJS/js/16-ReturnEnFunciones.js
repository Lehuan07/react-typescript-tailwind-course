//funtion Expression

const sumar = function(num1 = 0, num2 = 0){
    return num1+num2
}

const resultado = sumar(1000, 2)
console.log(resultado)


function restar(num1, num2){
    return num1-num2
}

const resultadoResta = restar(2,5)
console.log(resultadoResta)

dividir =(num1 = 0, num2 = 0) => return num1/num2 //Da error por que es en una sola linea


