//Fetch API con Promises

const url = 'https://jsonplaceholder.typicode.com/comments'

fetch(url)
    .then((respuesta)=>{
        if(respuesta.ok){
            return respuesta.json()
        }
        throw new Error("Hubo un error...")
    })
    .then(datos=>{
        console.log(datos)
    })
    .catch(error =>{
        console.log(error.message)
    })