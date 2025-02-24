// Variables
let listaNombresSorteados = [] // Va guardando los nombres que ya salieron para no repetir. 
let nombres = [] //Lista con los nombres que participan

// Ingreso de Nombres para el Sorteo
function agregarAmigo() { //Función que conecta con HTML
    let inputElement = document.querySelector('#amigo'); // Referencia al input
    let inputNombre = inputElement.value.trim(); // Obtiene el valor y elimina espacios
    
    if (inputNombre.trim() !== '') { // Evita agregar registros vacíos
      nombres.push(inputNombre);
      console.log(nombres); // Muestra la lista actualizada en la consola (Verificación)
      inputElement.value = ''; // Limpia el campo de texto
    } else {
      alert("El campo está vacío"); // Mensaje de alerta si el campo está vacío
    }
  }

//Generación de Nombre de Amigo Secreto
function sortearAmigo(){
    // Si hay nombres en la lista antes de sortear
    if (nombres.length === 0) {
        alert("No es posible sortear. Agrega nombres primero.");
        return;
    }

    // Si ya se sortearon todos los nombres
    if (listaNombresSorteados.length === nombres.length) {
        alert("Ya se sortearon todos los nombres posibles.");
        return;
    }

    let nombreGenerado;

    // Buscar un nombre que no haya sido sorteado aún
    do {
        nombreGenerado = nombres[Math.floor(Math.random() * nombres.length)];
    } while (listaNombresSorteados.includes(nombreGenerado));

    listaNombresSorteados.push(nombreGenerado); // Agregar el nombre sorteado a la lista

    alert(`Nombre sorteado: ${nombreGenerado}`);
    console.log("Nombres sorteados hasta ahora:", listaNombresSorteados);

    return nombreGenerado;
}

//Limpiar Registros
//function limpiarRegistros() {
  //  document.querySelector('#nombres').value ='';
  //  document.querySelector('#listaNombresSorteados').value ='';
//}

//Reinciar el Juego
//function reinciarJuego() {
    //Limpiar registros
  //  limpiarRegistros();
    //Indicar mensaje de Ingreso de nombres
    //Generar el nombre aleatorio
    //Deshabilitar el botón de nuevo Juego
    //document.querySelector('#reinciar').setAttribute('disable','true')
//}


