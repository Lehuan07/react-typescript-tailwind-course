
//Optional Chaining, se define con un ?
//Reducis el uso de if, y se usa para apis y BD

const alumno ={
    nombre: "Juan",
    clase: "Programacion 1",
    aprobado: true,
}

console.log(alumno.examenes?.examen1)

console.log("Despues del alumno")

//Nullish coalecing operator se define con un??
//Se utiliza para la paginacion

const pagina = null ?? 1 //En caso que sea nulo, se le agrega 1 a la pagina. Caso contrario toma el N correspondiente

console.log(pagina)