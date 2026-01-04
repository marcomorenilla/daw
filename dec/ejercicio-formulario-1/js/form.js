//Función para validar formulario
function checkForm(e) {
    e.preventDefault()

    //Obtengo elementos
    const nombre = document.getElementById('nombre')
    const email = document.getElementById('correo')
    const tel = document.getElementById('tel')
    const birthDate = document.getElementById('nacimiento')
    const country = document.getElementById('country')
    const acept = document.getElementById('acept')

    //Defino regex
    const telRegex = /^\d+$/
    const emptyRegex = /.+/

    //Creo variable para estado global del formulario
    let isFormValid = true;

    //Compruebo campos con las regex
    if (emptyRegex.test(nombre.value)) {
        nombre.classList.remove('fail-style')
    } else {
        nombre.classList.add('fail-style')
        isFormValid = false
    }

    if (emptyRegex.test(email.value)) {
        email.classList.remove('fail-style')
    } else {
        email.classList.add('fail-style')
        isFormValid = false
    }

    if (emptyRegex.test(tel.value) && telRegex.test(tel.value)) {
        tel.classList.remove('fail-style')
    } else {
        tel.classList.add('fail-style')
        isFormValid = false
    }

    if (emptyRegex.test(birthDate.value)) {
        birthDate.classList.remove('fail-style')
    } else {
        birthDate.classList.add('fail-style')
        isFormValid = false
    }

    if(emptyRegex.test(country.value)){
        country.classList.remove('fail-style')
    }else{
        country.classList.add('fail-style')
        isFormValid=false
    }

    if(!acept.checked){
        acept.classList.add('acept-fail')
        isFormValid=false
    }else{
        acept.classList.remove('acept-fail')
    }

    //Si tras comprobaciones no se ha cambiado el estado de isFormValid, se envía y resetea
    if(isFormValid){
        alert('Formulario enviado correctamente')
        this.reset()
    }



}
document.addEventListener('DOMContentLoaded', () => {
    //Declaramos formulario
    const form = document.getElementById('contact-form')

    //Escuchamos evento de formulario
    form.addEventListener('submit', checkForm)

})

