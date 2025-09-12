//Eventos en Submit

const formulario = document.querySelector("#formulario")

formulario.addEventListener("submit", e => {
    e.preventDefault();

    const inputNombre = document.querySelector("#nombre");
    const inputPassword = document.querySelector("#password");

    const nombre = inputNombre.value.trim();
    const password = inputPassword.value.trim();

    const alerta = document.createElement("DIV");
    alerta.classList.add("alerta", "text-white", "uppercase", "text-sm", "text-center", "p-2", "font-black");

    if (nombre === "" || password === "") {
        alerta.textContent = "Llena todos los campos";
        alerta.classList.add("bg-red-500");
    } else {
        console.log("Iniciando sesión");
        alerta.textContent = "Sesión iniciada correctamente";
        alerta.classList.add("bg-green-500");
    }

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
        inputNombre.value = "";
        inputPassword.value = "";
    }, 3000);
});
