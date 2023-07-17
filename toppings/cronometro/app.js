// Seleccionar los botones.
const botonInicioPausa = document.querySelector('#boton-inicio-pausa');
const botonReiniciar = document.querySelector('#boton-reiniciar');

// Variables para almacenar los segundos, minutos y horas.
let [segundos, minutos, horas] = [0, 0, 0];

// Variables para almacenar el intervalo de tiempo que debe
// transcurrir para actualizar el cronometro y el estado 
// del cronometro.
let intervaloDeTiempo;
let estadoCronometro = 'pausado'; // Dos estados posibles: 'pausado' o 'andando'.

// Actualizar el cronometro.
function actualizarCronometro() {
    segundos++;
  
    if (segundos / 60 === 1) {
      segundos = 0;
      minutos++;
  
      if (minutos / 60 === 1) {
        minutos = 0;
        horas++;
      }
    }
  
    // Agregar un cero a la izquierda si es necesario.
    const segundosConFormato = asignarFormato(segundos);
    const minutosConFormato = asignarFormato(minutos);
    const horasConFormato = asignarFormato(horas);
  
    // Actualizar el contenido del cronometro.
    const cronometro = document.getElementById('cronometro');
    cronometro.innerText = `${horasConFormato}:${minutosConFormato}:${segundosConFormato}`;
  }
  