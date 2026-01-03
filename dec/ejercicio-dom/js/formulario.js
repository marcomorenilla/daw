//Esperamos a que se cargue el DOM
document.addEventListener('DOMContentLoaded', () => {
    console.log('doc cargado');

    //Obtenemos elementos necesarios del DOM
    //Formulario -> Para coger los datos
    //Div de tabla -> Para decidir si mostrarla en función si hay datos
    //Warn -> Div para mostrar si no hay datos
    //Body de la tabla -> para ir añadiendo filas
    //Botón Eliminar -> Borra los datos de variables y localstorage

    const form = document.getElementById("contact");
    const tableDiv = document.getElementById("table-div");
    const warn = document.getElementById("warn");
    const tbody = document.getElementById("t-body");
    const btnEliminar = document.getElementById('eliminar')

    //Parse de los datos del localstorage o array vacío
    let tableData = JSON.parse(localStorage.getItem('data')) || [];

    //Evalúa si hay datos en el array y cambia estilos para mostrar tabla o warn cambiando estilos de elementos
    function showTable() {
        if (tableData.length > 0) {
            warn.style = "display:none;";
            tableDiv.style = "display:block";
        } else {
            warn.style = "display:block;";
            tableDiv.style = "display:none";
        }
    }

    //Añade filas a la tabla creando fila, metiendo valores en celdas y añadiéndoselos al tbody
    function generateTableRow(data = {}) {
        console.log(`${JSON.stringify(data, null, 4)}`)
        const fila = document.createElement('tr');
        const celdaNombre = `<td>${data.nombreData}</td>`
        const celdaEmail = `<td>${data.emailData}</td>`
        const celdamensaje = `<td>${data.mensajeData}</td>`

        fila.innerHTML = `${celdaNombre}${celdaEmail}${celdamensaje}`
        tbody.appendChild(fila)
    }

    //Guarda dato, añadiendo los del formulario al array, generando fila y reescribiendo el array del localstorage
    //Al guardar un dato en la tabla la longitud cambia y se muestra la tabla en showTable
    function saveData(data = {}) {
        tableData.push(data);
        generateTableRow(data);
        localStorage.setItem('data', JSON.stringify(tableData));
        showTable();
    }

    //Borra datos del localstorage, de la variable y vacía el cuerpo de la tabla
    //Como resetea el tableData la longitud del array no es mayor que 0 y muestra el warn
    function removeData() {
        localStorage.clear();
        tableData = []
        tbody.innerHTML = '';
        showTable();
    }

    //Después de cargar el documento genera las filas
    tableData.forEach(d => {
        generateTableRow(d)
    })

    //Si no hay datos no se crean filas y no se muestra la tabla
    showTable();

    //Asociamos función eliminar datos al botón eliminar
    btnEliminar.addEventListener('click', removeData);

    //Ponemos a escuchar el envío del formulario
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('form añadido')

        //Capturamos datos de los input
        const nombreData = document.getElementById("nombre").value
        const emailData = document.getElementById("email").value
        const mensajeData = document.getElementById("mensaje").value

        //Evaluammos si no son ""
        if (nombreData && emailData && mensajeData) {

            //Mostramos mensaje de confirmación con los datos capturados
            const res = confirm(`Deseas añadir los siguientes datos?
                nombre: ${nombreData}
                email: ${emailData}
                mensaje: ${mensajeData}`
            )

            //Si la confirmación es true guardamos datos en el array y localstorage
            res ? saveData({ nombreData, emailData, mensajeData }) : alert('Operación canelada')

        } else {
            //Si algún campo del formulario es "" mostramos mensaje
            alert('faltan datos por rellenar')
        }
    })
})
