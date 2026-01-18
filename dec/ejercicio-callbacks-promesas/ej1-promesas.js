/*
1. Ejercicio de Temporizador con Promesas: 
Crea una función llamada temporizador que acepte un número de milisegundos como parámetro y devuelva una promesa. 
La promesa debe resolverse después del tiempo especificado, imprimiendo un mensaje en la consola que indique que el temporizador ha finalizado. 
Además, si se pasa un número negativo, la promesa debe ser rechazada con un mensaje de error adecuado. Utiliza then y catch para manejar los resultados y errores.
*/


//Función que devuelve una promesa que en caso de recibir unos ms > 0 se resuelve
//En caso contrario se genera un error y se rechaza
function temporizador(ms) {

    return new Promise((resolve, reject) => {
        ms > 0 ?
            setTimeout(() => {
                resolve(`Promesa resuelta en ${ms} ms`)
            }, ms) :
            reject(new Error('Los ms no pueden ser negativos'))
    })
}
console.log('Empezando...')
// Ejecución para que falle que terminará antes ya que el setTimeout solamente se ejecuta para el caso ms > 0
temporizador(-1)
    .then(msg => console.log(msg))
    .catch(err => console.log(err.message))


//Ejecución de éxito que terminará tras 2 segundos 
temporizador(2000)
    .then(msg => console.log(msg))
    .catch(err => console.error(err.message))

