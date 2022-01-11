// ESTADO DE LA APP

// Variable que me indica si el cielo está pintado o no
let estaPintado = false;

// Añadir una elemento HTML al DOM de forma dinámica

// 1. Identificar donde lo queremos añadir
// 2. Crearlo. Establecer las propiedades del objeto
// 3 Añadirlo como hijo del nodo del que queremos que "cuelgue"

// Objetivo: Crar un tag IMG e introducirlo en el DOM.

let contenedorDinoSeto = document.querySelector("#dinoseto");
let imagenDinoseto = document.createElement("IMG");

imagenDinoseto.src = "./img/dinoseto.png";
imagenDinoseto.setAttribute("alt", "dinoseto vigo");


contenedorDinoSeto.appendChild(imagenDinoseto);

// Vamos a crear un "botón" que oculte o muestre el dinosaurio
// 1. Recuperar el nodo al que queremos asociar el evento 'click'
// 2. Asociar el evento click para que ejecuta una función

let boton = document.querySelector("#dinoBoton");
boton.addEventListener("click", () => { // ES6
    console.log("Has hecho click");
    // Recuperar el Nodo de la imagen del dinoseto
    // Modificar la propiedad style.display a 'none'
    let dinoImagen = document.querySelector("IMG");
    dinoImagen.style.display = "none";

});

// Vamos a crear en HTML un botón que nos va a permitir pintar el "cielo" (body) de color azul
// Este azul no lo vamos a poner como estilo en línea sino como una clase CSS

// 1. Seleccionar el elemento del DOM del boton id=pintar
// 2. Asociar un evento click y entonces añadir la clase "fondo" al nodo "body"

// 3. Si le doy al botón quiero pintar el cielo.
// Pero si le vuelvo a dar, quiero "limpiarlo"
// Lo quiero hacer usando el mismo botón 


// La primera vez que hacemos click pintamos el cielo azul; y cambiamos el texto a "Cielo Blanco"
// Si pulsamos "Cielo Blanco" el cielo debe volverse a poner blanco y el texto volver a "Cielo Azul"

let botonPintar = document.querySelector("#pintar");
botonPintar.addEventListener("click", () => {

    if (!estaPintado) {
        let body = document.querySelector("body");
        body.classList.add("fondo");
        botonPintar.textContent = "Cielo Blanco";
        estaPintado = true;
    }

    else {
        let body = document.querySelector("body");
        body.classList.remove("fondo");
        botonPintar.textContent = "Cielo Azul";
        estaPintado = false;
    }
});


// Queremos habilitar un area de texto para que todo lo que escribamos quede en un parte definida 

let cambiarTexto = document.querySelector("#cambiaTexto");

cambiarTexto.addEventListener("input", (event) => {
    // Recupero el texto introducido en el input
    let textoIntroducido = event.target.value;

    document.querySelector("#title").textContent = textoIntroducido;
});