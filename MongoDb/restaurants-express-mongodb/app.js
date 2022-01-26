const express = require('express');

// Vuestra connection string a Mongo Atlas. Sin especificar la base de datos
const uri = "mongodb+srv://root:root@cluster0.30idj.mongodb.net";

const MongoClient = require('mongodb').MongoClient;

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


const app = express();

app.get('/', async (req, res) => {

    const db = client.db('sample_restaurants');
    const restaurants = db.collection('restaurants');

    let queryid;
    let queryborough;
    let queryname;
    
    // La propiedad del objeto Request (req) donde vamos a tener los parámetros de la querystring? req.query

    // req.query.restaurant_id
    queryid = { "restaurant_id": req.query.restaurant_id };
    queryborough = {"borough": req.query.borough};
    queryname = {"name": {$regex: req.query.name}};
    const resultsid = await restaurants.find(queryid).limit(20).toArray();
    const resultsborough = await restaurants.find(queryborough).limit(20).toArray();
    const resultsname = await restaurants.find(queryname).limit(20).toArray();
    console.log("La id:" +resultsid+ " El barrio:" + resultsborough + " El Nombre:"+resultsname);
    res.render('index.ejs', {
        restaurants: resultsid,
        restaurants: resultsborough,
        restaurants: resultsname,
    })
});

// Usamos una función de callback que se ejecuta cuando la conexión a la base de datos se ha efectuado (y es el punto seguro donde podemos empezar a hacer cosas, como por ejemlo, levantar el servior Express en el puerto 3000)
client.connect(function (err) {
    if (err) throw err;

    console.log('Conectado a la base de datos correctamente.')

    // Objeto Db de MongoDB; para poder acceder a las bases de datos, colecciones, etc.
    app.listen(3000)
});


