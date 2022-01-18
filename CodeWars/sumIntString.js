// Declare the necessary variables for the algorithm.

let example = "Muy222 bien to2do333.";
let num;
let sum = 0;


// Extract the numbers in the string with MATCH, we use (/(\d+)/g) for this algorithm. It gives an array; I store it in the variable "arrayNum".

/* Notes:
    1. Match() is an inbuilt function in JavaScript that searchs a string for a match against any regular expression.
    2. The regular expression "\d+" means any digit from 0 to 9 (\d) repeated one or more times (+). "g" will make the search global (non-stop).
    3. I add the conditional "|| []" to create an empty array, since there are quotes with no numbers, and this regular expression returns "null" in those cases, an empty array equals 0. 
*/

let arrayNum = example.match(/(\d+)/g) || [];


// Here, I traverse the array with the method forEach.
arrayNum.forEach(element => {

    // Change the value of the array (which is a string) and parseInt it to an Integer (number), without this, the value would be a string and it will combine it, not sum it.
    num = parseInt(element);

    // And sum each number it has 
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



