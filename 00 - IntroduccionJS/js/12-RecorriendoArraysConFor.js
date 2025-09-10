//Recorriendo arrays con for
const tecnologias = [
    'HTML','CSS','JavaScript','React.js','Angular','Node.js'
]

for(let i = 0; i < tecnologias.length; i++){
    console.log(tecnologias[i])
}

//For
const tecnologias2 = [
    'HTML','CSS','JavaScript','React.js','Angular','Node.js'
]

//forEach
tecnologias2.forEach(function(tech) {
    console.log("Recorriendo desde forEach " + tech)
});

//Map

const arregloNuevo = tecnologias2.map(function(tech) {
    return tech;
});

console.log(arregloNuevo)

//!La diferencia entre forEach y Map, es que el segundo te crea un nuevo arreglo

//for...of
for(let tech of tecnologias){
    console.log("Recorriendo desde el for...of: " + tech)
}