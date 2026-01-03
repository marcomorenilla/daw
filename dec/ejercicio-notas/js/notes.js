document.addEventListener('DOMContentLoaded', () => {
    //Declaro elementos del DOM
    const btnAdd = document.getElementById('add-note')
    const listContainer = document.getElementById('list-container')
    const warn = document.getElementById('warn');

    //Creo elemento de lista
    const list = document.createElement('ol')

    //Añado elemento al contenedor
    listContainer.appendChild(list)

    //Defino funciones
    //Añadir elemento a la lista
    function appendListNote() {
        const note = document.getElementById('note').value
        const listNode = document.createElement('li')
        const delButton = document.createElement('button')
        const textNode = document.createTextNode(`${note} `)
        delButton.textContent = 'Eliminar'
        delButton.className = 'del-note'
        if (note) {
            listNode.appendChild(textNode)
            listNode.appendChild(delButton)
            list.appendChild(listNode)
            delButton.addEventListener('click', () => listNode.remove())
        } else {
            alert('Hay que rellenar la nota para añadirla')
        }


    }

    //Asocio función al botón añadir
    btnAdd.addEventListener('click', appendListNote)





})