// Importamos dos módulos ya disponibles de forma nativa por NodeJS que sirven para crear servidores y manejar archivos; respectivamente.

const http = require("http");
const fs = require('fs')

// const checkIfPalindromo = require("./utils/handle-strings").checkIfPalindromo;

// const { checkIfPalindromo } = require("./utils/handle-strings"); // ES6

let Phrase = require("mkdirwils-palindrome");




let numComprobaciones = 0;

const requestListener = (req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf8' })
        fs.readFile("./index.html", 'utf8', (err, html) => {
            console.log(html)
            err ? console.log(err) :
                res.write(html)
            res.end();
        })
    } else if (req.url.includes("/comprobar")) {

        // [https://localhost:3000/comprobar?palabra=patata
        // https://pokeapi.co/?pokeName=Pikachu
        let palabra = req.url.split("palabra=")[1];

        if (!palabra) {
            // No hemos podido partir el QueryString por el parámetor palabra=. Algo está mal en la petición que nos ha hecho el cliente
            res.writeHead(400, { 'Content-Type': 'text/html; charset=utf8' });
            res.end("<p style='color: red'>Petición enviada de forma errónea</p>");
            return;
        }

        // En este punto del código ya podemos asegurar que "todo" ha ido bien; y podemos actualizar la variable numComprobaciones
        numComprobaciones++;

        let respuesta = ""; // SI, NO
        let esPalindromo = new Phrase(palabra);

        console.log("Variable esPalindromo:", esPalindromo);

        respuesta = esPalindromo.palindrome() ? 'SI' : 'NO';

        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf8' });
        res.write(`<p>La palabra ${palabra} ${respuesta} es un palíndromo</p>`);
        res.write(`<p>Has utilizado el servicio ${numComprobaciones} veces</p>`);

        res.end();
    }
}

// PAsamos como función de callback la función almacenada en 'requestListener'
const server = http.createServer(requestListener);

server.listen(8080);
console.log("Server started on Port 8080:")