const numeros = [ 20, 30, 40]
const tecnologias = [ 'HTML','CSS','JavaScript','React.js','Angular','Node.js']

//* Filter, utilizado para caracteres y numeros
const nuevoArray = tecnologias.filter((tech) => tech !== 'HTML')
console.log(nuevoArray)

const nuevoArrayNumero = numeros.filter(numero => numero > 15)
console.log(nuevoArrayNumero)

//*Includes
const resultado = tecnologias.includes('CSS')
console.log(resultado)

//*Some, si al menos uno cumple la funcion, devuelve true

const resultado2 = numeros.some(numero => numero<15)
console.log(resultado2)

//* Find devuelve el primer elemento que cumple la funcion

const numeroDevuelve = numeros.find(numero => numero >15)
console.log(numeroDevuelve)

//* Every retorna true o false si todos cumplen la condicion

const coincidenTodos = numeros.every(numero => numero <50)
console.log(coincidenTodos)

//* Redurce retorna un acumulado del total

const acumulado = numeros.reduce((total, numeroActual)=>{
    console.log(total)
    console.log(numeroActual)

    return total+numeroActual
}, 0)

