//Manipular elementos


const heading = document.querySelector(".heading")
const enlaces = document.querySelectorAll(".navegacion a")

heading.textContent = "Hola, que tal?"

const inputNombre = document.querySelector("#nombre")

inputNombre.value = "Un nuevo valor"

enlaces.forEach(enlace => {
    enlace.textContent = "Nuevo enlace"
});