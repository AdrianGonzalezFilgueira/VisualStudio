// Lista invitados es un script para gestionar la lista de invitados a un evento por línea de comandos

// Tendremos una "base de datos" en un fichero de nombre "invitados.txt"; donde iremos acumulando todos los invitados

// node lista-invitados Alex
// Añade a Alex al fichero invitados.txt

// Requisito 1: Si el usuario ejecuta "node lista-invitados mostrar"; debe mostrar por el terminal la lista de invitados
// Requisito 2: Si el usuario ejecuta "node lista-invitados añadir Pepe"; añade a Pepe a la lista de invitados. BONUS: Si "Pepe" ya está en la lista de invitados, devolver un mensaje "Pepe ya está en la lista de invitados"

const fs = require('fs')

// Primer parámetro: Ruta al fichero que queremos leer
// Segundo parámetro: Codificación que además hace que parsee los bytes leídos a texto
// Tercer parámetro: Función de callback (ya he acabado de hacer 'algo', ejecútame)
fs.readFile('invitados.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(data)
})

// const data = fs.readFileSync('./invitados.txt',
//     { encoding: 'utf8', flag: 'r' });
// console.log(data);

console.log("HOLI!")