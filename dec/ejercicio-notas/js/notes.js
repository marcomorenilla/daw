document.addEventListener('DOMContentLoaded', () => {
    //Declaro elementos del DOM
    const btnAdd = document.getElementById('add-note')
    const listContainer = document.getElementById('list-container')
    const warn = document.getElementById('warn');

    //Creo elemento de lista
    const list = document.createElement('ol')

    //Añado elemento al contenedor
    listContainer.appendChild(list)

    function showList(){
        if(list.childNodes.length === 0){
            warn.style = "display:block;"
            listContainer.style="display:none;"
        }else{
            warn.style="display:none;"
            listContainer.style="display:flex;"
        }
    }

    //Decido si mostrar lista para mostrar warn según carga la página
    showList();

    //Defino funciones
    //Añadir elemento a la lista
    function appendListNote() {
        const note = document.getElementById('note')
        const listNode = document.createElement('li')
        const delButton = document.createElement('button')
        const textNode = document.createTextNode(`${note.value} `)
        delButton.textContent = 'Eliminar'
        delButton.className = 'del-note'
        if (note.value) {
            listNode.appendChild(textNode)
            listNode.appendChild(delButton)
            list.appendChild(listNode)
            delButton.addEventListener('click', () => {
                listNode.remove()
                showList()})
        } else {
            alert('Hay que rellenar la nota para añadirla')
        }
        note.value =''
        showList()

    }

    //Asocio función al botón añadir
    btnAdd.addEventListener('click', appendListNote)

    //Añado escuchador para el enter
    document.addEventListener('keydown', (event)=>{
        if(event.key == 'Enter'){
            appendListNote()
        }
    })

})