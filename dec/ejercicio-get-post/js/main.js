//Declaro función para obtener tareas
async function getTasks() {
    const url = 'https://jsonplaceholder.typicode.com/todos'

    try {
        const request = await fetch(url);

        if (request.ok) {
            const res = await request.json();
            console.log(`Petición ${request.status}`)
            return res
        } else {
            throw new Error('Algo falló en la petición')
        }

    } catch (err) {
        console.error(err.message)
    }

}

// Hago solicitud para obtener las tareas y obtengo el resultado con await
// Método diferente para resolver promesas al .then() .catch()
const tasks = await getTasks()

//Obtengo el contenedor que va a mostrar las tareas
const taskList = document.getElementById('task-list');

//Declaro función para renderizar las tareas que se ejecuta al cargar la página y una vez el formulario sea enviado
function renderTasks(tasks) {
    taskList.innerHTML =""
    tasks.forEach(element => {
        const li = document.createElement('li')
        const check = document.createElement('input')
        check.type = 'checkbox'
        check.checked = element.completed
        const liText = document.createTextNode(` - ${element.title}`)
        li.appendChild(check)
        li.appendChild(liText)
        taskList.appendChild(li)
    });
}

//Declaro función para enviar tareas
async function sendTask(task) {
    const url = 'https://jsonplaceholder.typicode.com/todos'
    console.log(task)
    try{
        const request = await fetch(url,{
            headers:{
                'content-type':'application/json'
            },
            method:'POST',
            body:JSON.stringify(task)
        })

        if(request.ok){
            console.log(`post: ${request.status}`)
            let newTasks = [task,...tasks]
            console.log(newTasks)
            renderTasks(newTasks)
        }else{
            throw new Error('Algo falló en el post')
        }
    }catch(err){
        console.error(err.message)
    }
    
}

//Hago primera renderización al cargar el script al final de la página
renderTasks(tasks)

//Obtengo formulario
const form = document.getElementById('task-form')

//pongo listener al formulario
form.addEventListener('submit', (e)=>{
    e.preventDefault()

    //Declaro regex para formulario vacío
    const emptyFormReg = /^\S.{3,}$/

    //Cojo el texto que tenga el input
    const formTask = document.getElementById('task')

    //Valido que se cumpla la regex
    if(emptyFormReg.test(formTask.value)){
        //Envío la tarea
        sendTask({title: formTask.value, completed: false})
        console.log(tasks[0])
        form.reset()

    }else{
        alert('el form no puede estar vacío')
    }




})

