// Script.js

crearDinoSeto();
crearMeteorito();
// Cada 5 segundos me gustaría que el título del dinoDom cambie de color. Cada 5 segundos tengo que ejecutar la función cambiarColorTituloAleatorio

const myTimeout = setInterval(cambiarColorTituloAleatorio, 5000);
const movimientoMeteorito = setInterval(cambiarPosicionMeteorito(10,10), 1000);
// Obtener un botón que cada vez que lo pulsemos obtengamos una chiste de la API de chuck Norris jokes y cuadro de texto

