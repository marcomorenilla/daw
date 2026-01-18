/**
 * 
2. Ejercicio de Encadenamiento de Promesas:
Diseña un programa que simule una secuencia de operaciones asincrónicas. Crea dos funciones, obtenerDatos y procesarDatos, que devuelvan promesas. 
La función obtenerDatos debe resolver con un objeto de datos simulado después de 2 segundos, mientras que procesarDatos debe tomar esos datos y devolver un resultado modificado después de 1 segundo. 
Encadena las promesas utilizando then y maneja cualquier error que pueda surgir usando catch. Asegúrate de imprimir los resultados en la consola.
 */

//Función que podría simular una llamada a la API en este caso va a devolver un usuario de BBDD con una promesa
//Como la llamada es simulada vamos a hacer que siempre se resuelva
function obtenerDatos(ms, name, role) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                'user': name,
                'role': role,
                'isLogged': true
            })
        }, ms)
    })
}

// Función que cambia el isLogged del usuario
// En este caso vamos a simular que pueda fallar si no llega ningún usuario
function procesarDatos(ms, user) {
    return new Promise((resolve, reject) => {
        user ?
            setTimeout(
                () => {
                    user.isLogged = !user.isLogged
                    resolve(user)
                }, ms)
            :
            reject(new Error('No ha llegado ningún usuario para el procesamiento'))
    })
}

//Llamamos a obtenerDatos
obtenerDatos(2000, 'Marco', 'admin')
    .then(
        user => {
            //Cogemos el usuario que devuelve la primera promesa y lo procesamos
            return procesarDatos(1000, user)
        }
    )
    .then(user => {
        //Al principio is logged es true por lo que se imprime el mensaje de el usuario ha cerrado sesión
        user.isLogged ?
            console.log(`El usuario ha iniciado sesión`) :
            console.log(`El usuario ha cerrado sesión`)

        //Vamos a devolver una nueva promesa para que el usuario se quede como estaba
        return procesarDatos(1000, user)
    })
    .then(
        user => {
            //En este caso user inicia sesión
            user.isLogged ?
                console.log(`El usuario ha iniciado sesión`) :
                console.log(`El usuario ha cerrado sesión`)

                //Devolvemos una nueva promesa para que se ejecute el reject y salte el catch
                return procesarDatos(1000,null)
        }
    )
    .catch(err => console.error(err.message))

