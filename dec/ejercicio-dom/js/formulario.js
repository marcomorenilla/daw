document.addEventListener('DOMContentLoaded', () => {

    console.log('doc cargado');
    const form = document.getElementById("contact");
    const table = document.getElementById("table-div");
    const warn = document.getElementById("warn");
    const tbody = document.getElementById("t-body");
    const btnEliminar = document.getElementById('eliminar')

    let tableData = JSON.parse(localStorage.getItem('data')) || [];

    function showTable() {
        if (tableData.length > 0) {
            warn.style = "display:none;";
            table.style = "display:block";
        } else {
            warn.style = "display:inline-block;";
            table.style = "display:none";
        }
    }

    function generateTableRow(data = {}) {
        console.log(`${JSON.stringify(data, null, 4)}`)
        const fila = document.createElement('tr');
        const celdaNombre = `<td>${data.nombreData}</td>`
        const celdaEmail = `<td>${data.emailData}</td>`
        const celdamensaje = `<td>${data.mensajeData}</td>`

        fila.innerHTML = `${celdaNombre}${celdaEmail}${celdamensaje}`
        tbody.appendChild(fila)
    }

    function saveData(data = {}) {
        tableData.push(data);
        generateTableRow(data);
        showTable();
        localStorage.setItem('data', JSON.stringify(tableData));
    }

    function removeData() {
        localStorage.clear();
        tableData = []
        tbody.innerHTML = '';
        showTable();
    }

    tableData.forEach(d => {
        generateTableRow(d)
    })

    showTable();

    btnEliminar.addEventListener('click', removeData);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('form añadido')


        const nombreData = document.getElementById("nombre").value
        const emailData = document.getElementById("email").value
        const mensajeData = document.getElementById("mensaje").value
        if (nombreData && emailData && mensajeData) {
            const res = confirm(`Deseas añadir los siguientes datos?
                nombre: ${nombreData}
                email: ${emailData}
                mensaje: ${mensajeData}`
            )
            res ? saveData({ nombreData, emailData, mensajeData }) : alert('Operación canelada')

        } else {
            alert('faltan datos por rellenar')
        }
    })
})
