function mejorarResistencia() {
    alert("¡Bienvenido al nivel de resistencia! En este nivel, trabajaremos en mejorar tu capacidad para mantener la actividad física durante un periodo de tiempo prolongado.");

    // Declaramos una variable para almacenar la opción elegida por el jugador
    let opcionResistencia;
  
    // Mostramos las opciones disponibles
    alert("¿Qué quieres practicar?\n1. Carrera\n2. Circuito\n3. HIIT");
  
    // Leemos la opción elegida por el jugador
    opcionResistencia = prompt("Introduce tu elección:");
  
    // Si la opción elegida es válida, realizamos el ejercicio correspondiente
    switch (opcionResistencia) {
      case "1":
        alert("¡Vamos a practicar una carrera! ¡Intenta correr durante el mayor tiempo posible!");
        break;
      case "2":
        alert("¡Vamos a practicar un circuito! ¡Intenta completar los ejercicios del circuito lo más rápido posible!");
        break;
      case "3":
        alert("¡Vamos a practicar HIIT! ¡Intenta realizar los intervalos de alta intensidad lo más rápido posible!");
        break;
      default:
        alert("¡Opción no válida! Inténtalo de nuevo.");
    }
    alert("¡Genial! lograste pasar este nivel");
  }
  export function iniciandoNivel6 (){
    mejorarResistencia();
  }