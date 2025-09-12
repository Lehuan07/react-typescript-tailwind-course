//Eventos Click

const heading = document.querySelector(".heading")

heading.addEventListener("click", ()=>{
    heading.textContent = "Hiciste click, me cambiaste"
})

const enlaces = document.querySelectorAll(".navegacion a")

enlaces.forEach(enlace => {
    enlace.addEventListener("click", (e) =>{
        e.preventDefault()
        e.target.textContent = "Abriendo....espera eh!..."
    })
});