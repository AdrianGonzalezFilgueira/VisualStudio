// Declare the necessary variables for the algorithm.
// Declaro las variables necesarias para el algoritmo
let example = "Muy222 bien. to2do3.33.5,5/10";
let num;
let sum = 0;


// Extract the numbers in the string with MATCH, I use (/(\d+)/g) for this algorithm. Returns an array; I store it in the variable "arrayNum".
/* Notes:
    1. Match() is an inbuilt function in JavaScript that searchs a string for a match against any regular expression.
    2. The regular expression "\d+" means any digit from 0 to 9 (\d) repeated one or more times (+). "g" will make the search global (non-stop).
    3. I add the conditional "|| []" to create an empty array, since there are quotes with no numbers, and this regular expression returns "null" in those cases, an empty array equals 0. 
*/

// Extraigo los números en el string con MATCH, utilizo (/(\d+)/g) para este algoritmo. Devuelve un array que almaceno en la variable "arrayNum".
/* Notas:
    1. Match() es una función propia de JavaScript que busca en este string las coincidencias con la expresión regular que le indico.
    2. La expresión regular "\d+" significa cualquier dígito del 0 al 9 (\d) repitiendo una o más veces (+). "g" hará que la búsqueda sea global (hasta el final).
    3. Añado el condicional "|| []" para crear un array vacío, ya que hay frases sin números, y esta expresión regular devuelve "null" en esos casos. Un array vacío devuelve 0. 
*/

let arrayNum = example.match(/(\d+)/g) || [];


// Here, I traverse the array with the method forEach.
// Aquí, recorro el array con el método forEach
arrayNum.forEach(element => {

    // Change the value of the array (which is a string) and parseInt it to an Integer (number), without this, the value would be a string and it will combine it, not sum it.
    // Cambio el valor del array (que es un string) a un Integer (número) utilizando parseInt, sin esto, el valor sería un string que se concatena y no se suma.
    num = parseInt(element);

    // And sum each number it has 
    // Y sumo cada número que tiene
    sum += num;
});

// Doing beautiful and simple math
console.log(sum);



/* CÓDIGO PARA CODEWARS
function sumOfIntegersInString(s){
    
    let num;
    let sum = 0;

    let arrayNum = s.match(/(\d+)/g) || [];

    arrayNum.forEach(element => {
        num = parseInt(element);
        sum += num;
    });
      return sum;
}
    
*/



