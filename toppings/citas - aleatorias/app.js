const button = document.getElementById('boton-cambiar-cita')
const cita = document.getElementById('cita')
const autor = document.getElementById('autor')

function indiceAleatorio(min,max){
    return Math.floor(Math.random() * (max-min) + min)
}

function cambiarCita(){
    let citaCambiada = indiceAleatorio(0, citas.length)
    autor.innerHTML = citas[citaCambiada].texto
    cita.innerText = `"${citas[citaCambiada].autor}"`;
    
}

cambiarCita()
button.addEventListener('click',cambiarCita)

