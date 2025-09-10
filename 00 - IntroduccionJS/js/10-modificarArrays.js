const tecnologias = [
    'HTML','CSS','JavaScript','React.js','Angular','Node.js'
]
//Agregar
tecnologias.push('Nest.js')

const nuevoArreglo =[
    'Nest.js', ...tecnologias
]

console.log(tecnologias)

console.table(nuevoArreglo)

//Eliminar
tecnologias.shift();
console.log(tecnologias)

//Filtrar
const tecnologiasDos = tecnologias.filter(function(tech){
    if(tech == "CSS")
    return tech
})

console.log(tecnologiasDos)

//Modificar

tecnologias[3] = 'Python'

const tecnologiastres = tecnologias.map(function(tech){
    if(tech == 'Nest.js'){
        return 'Nest.js'
    }else{
        tech
    }
})

console.log(tecnologiastres)