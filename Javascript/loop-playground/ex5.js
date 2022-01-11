/**
 * Ejercicio 5: El siguiente bucle no se ejecuta nunca. 
 * Compruébalo con "node ex5.js"
 * ¿Sabrías decir porque?
 * 
 * ---------------------------------------------------
 * Una vez lo averigues, arreglalo para que el bucle se ejecute exactamente 10 veces. 
 * Reestricción: SOLO puedes cambiar el valor de la variable 'veces' para conseguirlo
 */

 let veces = 15;

 for (let i=5; i<veces; i++) {
     console.log("No me voy a ejecutar..." +(i-4))
 }