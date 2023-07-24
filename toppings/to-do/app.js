const input = document.getElementById('ingresar-tarea')
const button = document.getElementById('submit')
const listaDeTareas = document.getElementById('lista-de-tareas')

function crearTarea() {
    if (input.value) {

        /* crear una tarea nueva */
        let nuevaTarea = document.createElement('div')
        nuevaTarea.classList.add('tarea')

        /* texto */
        let texto = document.createElement('p')
        texto.innerText = input.value
        nuevaTarea.appendChild(texto)

        /* crear contenedor de iconos */
        let icon = document.createElement('div')
        icon.classList.add('iconos')
        nuevaTarea.appendChild(icon)

        /* icono completar */
        let completar = document.createElement('i')
        completar.classList.add('bi', 'bi-check-circle-fill', 'icono-completar')
        icon.appendChild(completar)

        let eliminar = document.createElement('i')
        eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-elimnar')
        icon.appendChild(eliminar)



        listaDeTareas.append(nuevaTarea)
    }else{
        alert('Puedes ingresar una tarea')
    }
}

button.addEventListener('click', crearTarea)