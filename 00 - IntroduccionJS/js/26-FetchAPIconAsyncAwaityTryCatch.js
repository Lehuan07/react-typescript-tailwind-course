//Fetch API con Async Await y Try Catch

const url = 'https://jsonplaceholder.typicode.com/comments55'

const consultarAPI = async() =>{
    try {
        const respuesta = await fetch(url)
        if(!respuesta.ok){
            throw new Error("Error macho...")
        }
        const datos = await respuesta.json()
        console.log(datos)
    } catch (error) {
        console.log(error.message)
    }
}

consultarAPI()