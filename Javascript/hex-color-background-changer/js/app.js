// RECUERDA: Plantear paso a paso lo que debe hacer la aplicación; no escribir directamente código JavaScript

let selectorButton = document.querySelector("#btn");
let selectorBody = document.querySelector("body");

selectorButton.addEventListener('click', (event) => {
    let color = selectorBody.style.backgroundColor = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    alert(color);

});


