const form = document.getElementById("contact");


let data = [];
document.addEventListener('DOMContentLoaded', () => {
    console.log('doc cargato')
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('form añadido')
        let nombreData = document.getElementById("nombre").value
        let emailData = document.getElementById("email").value
        let mensajeData = document.getElementById("mensaje").value
        console.log(`Datos introducidos: ${nombreData}, ${emailData}, ${mensajeData}`)
    })
})
