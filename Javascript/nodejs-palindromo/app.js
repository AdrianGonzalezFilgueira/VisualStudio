const { resolveNaptr } = require("dns");
const http = require("http");

function palindromeChecker(str) {
    const strReversed = str.split("").reverse().join("");

    return strReversed === str;
}
const server = http.createServer((req, res) => {

    if (req.url.includes("/comprobar")) {

        let palabra = req.url.split("=")[1];

        if (!palabra) {
            res.end("No me has pasado ningún QueryString!!");
            return;
        }

        // BONUS: Comprobar que el parámetro de la QueryString es "palabra"; si no, devolver un error

        console.log("Palabra: ", palabra);
        let esPalindromo = palindromeChecker(palabra);

        res.writeHead(200, { "Content-type": "text/plain; charset=utf-8" })
        if (esPalindromo) {
            res.write(`La palabra ${palabra} es un palíndromo`);
        }

        else {
            res.write(`La palabra ${palabra} NO es un palíndromo`)
        }
    }

    // en el caso que nos hagan una petición a "/", es decir, que req.url == "/"; usar res.write para devolver un formulario HTML debidamente configurado; para que al introducir una palabra en su campo input, nos haga una petición del estilo 'http://localhost:3000/comprobar?palabra=Lapalabraquehayaintroduicodoelusuarioenelformulario

    else if (req.url == "/") {
        res.write(`
            <h1>Introduce una palabra para comprobar si es un palíndromo</h1>
            <form action="comprobar">
                <label for="palabra">Escribe una palabra: </label>
                <input type="text" id="palabra" name="palabra">
                <input type="submit" value="Comprobar">
            </form>
        
        `)
    }



    res.end();

});

server.listen(3000);