const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: false }))

let fotos = [];

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/subir-imagen', function (req, res) {
    res.sendFile(__dirname + '/subir-imagen.html')
});

app.post('/subir-imagen', (req, res) => {

    let foto = {
        titulo: req.body.titulo,
        url: req.body.url,
        fecha: req.body.fecha
    }
    fotos.push(foto);
    res.sendFile(__dirname + '/index.html');
    
});


app.get('/mostrar-imagen', function (req, res) {
    res.sendFile(__dirname + '/mostrar-imagen.html')
    
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})