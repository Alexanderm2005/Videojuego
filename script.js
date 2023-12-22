import { iniciandoNivel1 } from "./level1.js";
import { iniciandoNivel10 } from "./level10.js";
import { iniciandoNivel2 } from "./level2.js";
import { iniciandoNivel3 } from "./level3.js";
import { iniciandoNivel4 } from "./level4.js";
import { iniciandoNivel5 } from "./level5.js";
import { iniciandoNivel6 } from "./level6.js";
import { iniciandoNivel7 } from "./level7.js";
import { iniciandoNivel8 } from "./level8.js";
import { iniciandoNivel9 } from "./level9.js";

let nombreJugador
do{
    nombreJugador = prompt("Ingrese su nombre");
} while (!nombreJugador);
alert(`Bienvenido, ${nombreJugador}!`)

let puntos = 0;
function jugarBasquet() {
    
      alert("¡Bienvenido al entrenamiento de básquet!");
      interactuarConEntrenador();
         
  }
 
function interactuarConEntrenador() {
    while (true) {
        alert(`Puntos actuales: ${puntos}`);
        alert("Entrenador: ¿Qué habilidad deseas mejorar?. \n1. Tiro al aro. \n2. Pases precisos. \n3. Defensa. \n4. Salto vertical. \n5. Agilidad. \n6. Resistencia. \n7. Manejo de balón. \n8. Visión de juego. \n9. Velocidad. \n10. Bloqueo");
        chooseLevel();
        const continuar = confirm("¿Quieres continuar jugando?");
    if (!continuar) {
      alert(`Gracias por jugar, ${nombreJugador}! Puntuación final: ${puntos}`);
      break;
    }
  }
}

    function chooseLevel (){
    const eleccion = prompt("Selecciona una opción (1-10):");
    
    
    switch (eleccion) {
        case "1":
          alert("Entrenador: ¡Vamos a mejorar tu tiro al aro!");
          iniciandoNivel1();
          puntos += 15;
          break;
        case "2":
          alert("Entrenador: Trabajemos en tus pases precisos.");
          iniciandoNivel2();
          puntos += 15;
          break;
        case "3":
          alert("Entrenador: Concentrémonos en mejorar tu defensa.");
          iniciandoNivel3();
          puntos += 15;
          break;
        case "4":
          alert("Entrenador: Trabajemos en tu salto vertical.");
          iniciandoNivel4();
          puntos += 15;
          break;
        case "5":
          alert("Entrenador: Concentrémonos en mejorar tu agilidad.");
          iniciandoNivel5();
          puntos += 15;
          break;
        case "6":
          alert("Entrenador: Trabajemos en tu resistencia física.");
          iniciandoNivel6();
          puntos += 15;
          break;
          case "7":
          alert("Entrenador: Mejoremos tu manejo de balón.");
          iniciandoNivel7();
          puntos += 15;
          break;
        case "8":
          alert("Entrenador: Trabajemos en tu visión de juego.");
          iniciandoNivel8();
          puntos += 15;
          break;
        case "9":
          alert("Entrenador: Concentrémonos en mejorar tu velocidad.");
          iniciandoNivel9();
          puntos += 15;
          break;
        case "10":
          alert("Entrenador: Trabajemos en tu habilidad de bloqueo.");
          iniciandoNivel10();
          puntos += 15;
          break;
          default:
          alert("Entrenador: Opción no válida. Inténtalo de nuevo.");
          // Opciones no válidas
      }
      
    }
    

   
jugarBasquet();
chooseLevel();