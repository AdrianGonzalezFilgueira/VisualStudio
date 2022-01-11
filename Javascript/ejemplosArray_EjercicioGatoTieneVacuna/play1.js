// Una manera de definir un coche blanco de la marca Fiat que "según el concesionario" tan solo lleva 10000km de quilometraje.

let cocheColor = "blanco";
let cocheModelo = "Fiat";
let cocheKm = 10000;

// Los objetos contienen información sobre el "entidad", "cosa", "objeto" que representan

let cocheFiat = {
    color: "rojo",
    modelo: "Fiat",
    quilometraje: 10000
};

let cocheSeat = {
    color: "verde",
    modelo: "Panda",
    quilometraje: 40000
}

console.log(cocheFiat);
console.log(cocheSeat);

// Queremos representar un gato. El gato tiene un mombre, tiene una edad gatuna, un conjunto de comidas para gato favoritas, si está vacunado contra la rabia

let gatoLoki = {
    nombre: "Loki",
    edad: 3,
    marcas_favoritas: ["Wild", "Mercagato"],
    vacunaRabia: true
};

console.log(gatoLoki);

// Queremos saber todo su historial de vacunación. Es decir, qué vacuna le han puesto y cual fue la fecha

let gatoLokiVacunas = {
    nombre: "Loki",
    edad: 3,
    marcas_favoritas: ["Wild", "Mercagato"],
    vacunas: [
        {
            fecha: "2021-06-01",
            vacuna: "Trivalente"
        },
        {
            fecha: "2022-01-01",
            vacuna: "Rabia"
        }

    ]
}

console.log(gatoLokiVacunas);
