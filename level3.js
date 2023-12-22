function mejorarDefensa() {
    alert("¡Bienvenido al nivel de defensa! En este nivel, trabajaremos en mejorar tu capacidad para defender al oponente.");

  // Declaramos una variable para almacenar la opción elegida por el jugador
  let opcionDefensa;

  // Mostramos las opciones disponibles
  alert("¿En qué quieres centrarte?\n1. Defensa individual\n2. Defensa zonal\n3. Defensa en transición");

  // Leemos la opción elegida por el jugador
  opcionDefensa = prompt("Introduce tu elección:");

  // Si la opción es válida, realizamos el ejercicio correspondiente
  switch (opcionDefensa) {
    case "1":
      alert("¡Vamos a practicar la defensa individual! ¡Intenta defender a un jugador del equipo contrario!");
      break;
    case "2":
      alert("¡Vamos a practicar la defensa zonal! ¡Intenta defender una zona del campo!");
      break;
    case "3":
      alert("¡Vamos a practicar la defensa en transición! ¡Intenta defender a un jugador que está en transición!");
      break;
    default:
      alert("¡Opción no válida! Inténtalo de nuevo.");
  }
  alert("Entrenador: ¡Bien hecho! Has mejorado tu defensa");
}

  export function iniciandoNivel3 (){
    mejorarDefensa();
  }