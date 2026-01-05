//Función para validar formulario
function formHandler(e){
    e.preventDefault()

    const emptyRegex = /.+/

    //Vamos a utilizar variables boolean para ir comprobando los campos para modularizar el código
    const isValidName = nameHandler(emptyRegex)
    const isValidMail = mailHandler()
    const isValidPhone = phoneHandler()
}

//Función para comprobar el nombre
function nameHandler(emptyRegex){
    const nombre=document.getElementById('nombre')
    const nameError = document.getElementById('name-error')

    let isValid = emptyRegex.test(nombre.value);

    if(!isValid){
       nameError.innerHTML = '* Debes rellenar el campo antes de mandar el formulario'
       nombre.classList.add('validation-error') 
    } else{
        nombre.classList.remove('validation-error')
        nameError.innerHTML = ''
    }

    return isValid 
}

//Función para validar el mail
function mailHandler(){
    const mailRegex = /^[A-Za-z0-9-_]+@[a-z]+\.[a-z]+$/

    const mail = document.getElementById('correo')
    const mailError = document.getElementById('mail-error')

    console.log(`validación correo ${mailRegex.test(mail.value)}`)

    let isValid = mailRegex.test(mail.value);

    if(isValid){
        mailError.innerHTML=''
        mail.classList.remove('validation-error')
    }else{
        mailError.innerHTML=`* Para que el correo sea válido y poder enviar el formulario:
        <ul>
        <li> No puede estar vacío
        <li> La primera parte acepta letras mayúsculas o minúsculas, números o carácteres especiales (- y _)
        <li> Debe contener una @
        <li> Después de la arroba debe ir el dominio en minúsculas
        <li> Debe contener un . después del dominio y una extensión p.ej .com
        </ul>`
        mail.classList.add('validation-error')
    }

    return isValid
}

//Función para validar el teléfono
function phoneHandler(){
    const phoneRegex = /^\+?[0-9-]{3,4}[0-9]{3,4}[0-9]{3}$/

    const phone=document.getElementById('tel')
    const phoneError = document.getElementById('tel-error')

    let isValid = phoneRegex.test(phone.value)

    if(isValid){
        phoneError.innerHTML = ''
        phone.classList.remove('validation-error')
    }else{
        phoneError.innerHTML=`
            * Para que el teléfono sea válido y poder enviar el formulario
            <ul>
            <li> No puede estar vacío
            <li> Solamente puede contener + para el prefijo números y entre 9 y 15 carácteres de longitud separados por - cada 3 después del prefijo
            <li> Por ejemplo +34-666-555-444, 666555444 o +34666555444 son teléfonos válidos
            </ul>`
        phone.classList.add('validation-error')
    }
    return isValid
}
document.addEventListener('DOMContentLoaded', () => {
    //Declaramos formulario
    const form = document.getElementById('contact-form')

    //Escuchamos evento de formulario
    form.addEventListener('submit', formHandler)

})

