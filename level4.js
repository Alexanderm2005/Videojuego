function mejorarSaltoVertical() {
    alert("¡Bienvenido al nivel de salto vertical! En este nivel, trabajaremos en mejorar tu capacidad para saltar más alto.");

  // Declaramos una variable para almacenar la opción elegida por el jugador
  let opcionSaltoVertical;

  // Mostramos las opciones disponibles
  alert("¿En qué quieres centrarte?\n1. Saltos simples\n2. Saltos con pesas\n3. Saltos con obstáculos");

  // Leemos la opción elegida por el jugador
  opcionSaltoVertical = prompt("Introduce tu elección:");

  // Si la opción es válida, realizamos el ejercicio correspondiente
  switch (opcionSaltoVertical) {
    case "1":
      alert("¡Vamos a practicar saltos simples! ¡Intenta saltar lo más alto posible!");
      break;
    case "2":
      alert("¡Vamos a practicar saltos con pesas! ¡Intenta saltar lo más alto posible con pesas!");
      break;
    case "3":
      alert("¡Vamos a practicar saltos con obstáculos! ¡Intenta saltar por encima de los obstáculos!");
      break;
    default:
      alert("¡Opción no válida! Inténtalo de nuevo.");
  }
  alert("¡Genial tu salto vertical a mejorado!");
}

  export function iniciandoNivel4 (){
    mejorarSaltoVertical();
  }