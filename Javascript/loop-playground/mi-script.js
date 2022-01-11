/**
 * Ejercicio final
 * 
 * Disponemos de un función, dibujarCirculo() ; que pinta en nuestro HTML un círculo.
 * 
 * Escribe un bucle que pinte por pantalla exactamente el número de círculos: (numeroFinal-numeroInicial).
 * Por ejemplo, para la configuración inicial, debería pintar 10 círculos. Hazlo usando un bucle WHILE
 */

 let numeroInicial=0;
 let numeroFinal=10;
 // Elimina el código siguiente y codifica la solución


 /*
 while(numeroInicial<numeroFinal){
  dibujarCirculo();
  numeroInicial++;
}
*/


 /**
  * BONUS: Modifica el bucle para introducir la variable 'tocaHexagono'. El bucle debe funcionar como antes, pero ahora, cuando nos encontremos en la iteración número 'tocaHexagono', se debe pintar un hexagono amarillo. Investiga el fichero "script-externo.js" para averiguar como podríamos pintar un hexágono
  */
let tocaHexagono = 4;
while(numeroInicial<numeroFinal){
  dibujarCirculo();
  numeroInicial++;
  if(numeroInicial == tocaHexagono){
    dibujarHexagono();
  }
}

/**
 * Ejemplo: si numeroInicial=0, numeroFinal=10, y tocaHexagono=4, deberíamos pintar:
 * 
 * circulo circulo circulo círculo hexagono círculo círculo círculo círculo círculo
 * 
 */