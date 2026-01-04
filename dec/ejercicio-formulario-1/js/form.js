/**
 * 
    Nombre completo (obligatorio).
    Correo electrónico (obligatorio, con validación de formato de correo).
    Número de teléfono (opcional, con validación para que solo acepte números).
    Fecha de nacimiento (obligatorio).
    Selección de género (radio buttons).
    Selección de país (desplegable con al menos 3 opciones).
    Checkbox de aceptación de términos y condiciones (obligatorio).

 */
//Función para validar formulario
function checkForm(e) {
    e.preventDefault()
    const nombre = document.getElementById('nombre')
    const email = document.getElementById('correo')
    const tel = document.getElementById('tel')
    const birthDate = document.getElementById('nacimiento')
    const country = document.getElementById('country')
    const acept = document.getElementById('acept')

    const inputs = [nombre, email, tel, birthDate, country,acept]


    const telRegex = /^\d+$/
    const emptyRegex = /.+/


    inputs.forEach(i => {
        let emptyCheck = emptyRegex.test(i.value)
        
        emptyCheck? i.classList.remove('fail-style') : i.classList.add('failStyle')

    })

}
document.addEventListener('DOMContentLoaded', () => {
    //Declaramos formulario
    const form = document.getElementById('contact-form')

    //Escuchamos evento de formulario
    form.addEventListener('submit', checkForm)

})

