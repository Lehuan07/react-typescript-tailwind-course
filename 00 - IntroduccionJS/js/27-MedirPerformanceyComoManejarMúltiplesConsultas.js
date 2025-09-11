//Medir Performance y como manejar múltiples consultas

const url = 'https://jsonplaceholder.typicode.com/comments'
const url2 = 'https://jsonplaceholder.typicode.com/todos'
const url3 = 'https://jsonplaceholder.typicode.com/photos'

const consultarAPI = async() =>{
    try {
        const inicio = performance.now()

        const respuesta = await fetch(url)
        const datos = await respuesta.json()
        console.log(datos)

        const respuesta2 = await fetch(url2);
        const datos2 = await respuesta2.json();
        console.log(datos2)


        const respuesta3 = await fetch(url3);
        const datos3 = await respuesta3.json();
        console.log(datos3)
        const fin = performance.now()

        console.log("El resultado de la primer funcion es: " + (fin - inicio).toFixed(2) + "ms");

    } catch (error) {
        console.log(error.message)
    }
}

consultarAPI()

const consultarAPI2 = async() =>{
    try {
        const inicio = performance.now()

        const [response, response2, response3] = await Promise.all([fetch(url), fetch(url2), fetch(url3)])

        const [datos, datos2, datos3] = await Promise.all([response.json(), response2.json(), response3.json()])


        console.log(datos)
        console.log(datos2)
        console.log(datos3)
        const fin = performance.now()

        console.log("El resultado de la segunda funcion es: " + (fin - inicio).toFixed(2) + "ms");

    } catch (error) {
        console.log(error.message)
    }
}

consultarAPI2()