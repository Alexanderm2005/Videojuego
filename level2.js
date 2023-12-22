function mejorarPasesPrecisos() {
    alert("¡Bienvenido al nivel de pases precisos! En este nivel, trabajaremos en mejorar tu capacidad para pasar el balón con precisión.");

  // Mostramos las opciones disponibles
  alert("¿Qué quieres practicar?\n1. Pases cortos\n2. Pases largos\n3. Pases con una mano");

  // Leemos la opción elegida por el jugador
  const opcionPases = prompt("Introduce tu elección:");

  // Si la opción es válida, realizamos el ejercicio correspondiente
  switch (opcionPases) {
    case "1":
      alert("¡Vamos a practicar pases cortos! ¡Intenta pasar el balón a la canasta!");
      break;
    case "2":
      alert("¡Vamos a practicar pases largos! ¡Intenta pasar el balón a un compañero!");
      break;
    case "3":
      alert("¡Vamos a practicar pases con una mano! ¡Intenta pasar el balón a tu compañero con una sola mano!");
      break;
    default:
      alert("¡Opción no válida! Inténtalo de nuevo.");
  }
  alert("¡Perfecto tus pases presisos han mejorado!")
}

  export function iniciandoNivel2 (){
    mejorarPasesPrecisos();
  }