
// Importamos el módulo interno HTTP
let http = require("http");

http.createServer((peticion, respuest))

// createServer devuelve un objeto del tipo "Server"
let servidor = http.createServer((peticion, respuesta) => {
    console.log("Petición URL:", peticion.url);
    console.log("Método HTTP: ", peticion.method);

    // Tenemos una base de datos. Vamos a ir al pais que nos pasan por parémtro y vamos a devolver una respuesta.
    let casosMexico = 45000; // De la base de datos nos han informado que hay 45000 casos de covid activos

    // Genero una respuesta para el cliente y finalmente la envio
    respuesta.writeHead(200, { "Content-Type": "text/html" });
    respuesta.write("------------------------------");
    respuesta.write(`<h1>Los casos de Covid en Mexico son ${casosMexico}</h1>`);
    respuesta.write("------------------------------");

    // Enviar respuesta
    respuesta.end();
});

// El servidor empieza a escuchar en el puerto 3000
servidor.listen(3000);


