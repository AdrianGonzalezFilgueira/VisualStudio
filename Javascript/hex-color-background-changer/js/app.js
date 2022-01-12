// RECUERDA: Plantear paso a paso lo que debe hacer la aplicación; no escribir directamente código JavaScript

// QuerySelectors para el botón y el body
let selectorButton = document.querySelector("#btn");
let selectorBody = document.querySelector("body");

// Evento para el botón cuando hacemos click
selectorButton.addEventListener('click', (event) => {

/* Declaro la variable color para visualizarla por console y mediante un alert. Esta variable equivale al background 
   color del body, que a su vez equivale a un Math Random con un formato Hexadecimal. */

   let color = selectorBody.style.backgroundColor = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart('6','0');
   console.log(color);
   //alert(color);

/*Notas: 
    1. << 0 equivale a un Math.floor() [Devuelve el máximo entero menor o igual a un número.]
    2. toString es necesario, nos permite cambiar el valor numérico del Math.random a un valor alfanumérico 
    3. padStart nos asegura que el resultado alfanumérico no sea menor ni superior a 6 caracteres */
});


