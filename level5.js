function mejorarAgilidad() {
    alert("¡Bienvenido al nivel de agilidad! En este nivel, trabajaremos en mejorar tu capacidad para moverte con rapidez y precisión.");

  
  let opcionAgilidad;

  
  alert("¿Qué quieres practicar?\n1. Conos\n2. Zigzag\n3. Cambio de dirección");

  
  opcionAgilidad = prompt("Introduce tu elección:");

  // Si la opción es válida, realizamos el ejercicio correspondiente
  switch (opcionAgilidad) {
    case "1":
      alert("¡Vamos a practicar conos! ¡Intenta pasar entre los conos lo más rápido posible!");
      break;
    case "2":
      alert("¡Vamos a practicar zigzag! ¡Intenta esquivar los obstáculos lo más rápido posible!");
      break;
    case "3":
      alert("¡Vamos a practicar cambio de dirección! ¡Intenta cambiar de dirección lo más rápido posible!");
      break;
    default:
      alert("¡Opción no válida! Inténtalo de nuevo.");
  }
}
  

  export function iniciandoNivel5 (){
    mejorarAgilidad();
  }