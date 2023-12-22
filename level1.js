
function mejorarTiroAlAro() {
    alert("Trabajando en mejorar tu tiro al aro...");
    var puntosNivel = 0;

  for (let i = 1; i <= 3; i++) {
    alert(`Entrenador: ¿Qué aspecto del tiro al aro quieres mejorar?\n1. Mecánica del tiro\n2. Precisión\n3. Fuerza`);
    
    let opcionTiro = prompt(`Elige una opción (1-3) - Intento ${i}/3:`);

    if (opcionTiro >= 1 && opcionTiro <= 3) {
      puntosNivel += 5; // Otorgar puntos 
      alert(`Entrenador: ¡Excelente elección! Trabajaremos en mejorar la opción ${opcionTiro}.`);
    } else {
      alert("Entrenador: Opción no válida. Intenta de nuevo.");
      i--; // Disminuir el contador para repetir el intento
    }
  }
  alert(`Entrenador: ¡Bien hecho! Has mejorado tu tiro al aro y ganaste ${puntosNivel} puntos.`);
    
  }

  export function iniciandoNivel1 (){
    mejorarTiroAlAro();
  }