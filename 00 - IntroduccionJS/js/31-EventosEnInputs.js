//Eventos en Inputs

const imputNombre = document.querySelector("#nombre");
imputNombre.addEventListener("input", (e) =>{
    console.log(e.target.value)
})

const inputPassword = document.querySelector("#password")

inputPassword.addEventListener("input", functionPassword);


function functionPassword(){
    inputPassword.type = "Text"
    setTimeout(() =>{
        inputPassword.type = "password"
    },3000)
}