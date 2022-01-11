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
        },
        {
            fecha: "2022-01-07",
            vacuna: "Covidgato"
        }

    ]
}

console.log("Play2:", gatoLokiVacunas);

// Quiero recuperar la edad del gato y mostrarla por el terminal
// Qué edad tiene este gato?

let edad = gatoLokiVacunas.edad;
console.log("Edad del gato:", edad);

// Cual es la comida favorita del gato?
console.log("Marcas favoritas del gato: ", gatoLokiVacunas.marcas_favoritas);

// Cual fue la PRIMERA comida favorita de este gato? La que ocupa la primera posición del Array
console.log("Primera comida:", gatoLokiVacunas.marcas_favoritas[0]);

// Cual fue la ÚLTIMA fecha de la vauna que pusieron a Loki?
console.log("FECHA de la última vacuna de Loki", gatoLokiVacunas.vacunas[gatoLokiVacunas.vacunas.length - 1].fecha);

// Modificar un objeto
// Loki ha cumplido un año más.

gatoLokiVacunas.edad = gatoLokiVacunas.edad + 1;
console.log("Edad del  tras cumplir años:", gatoLokiVacunas.edad);

gatoLokiVacunas.nombre = "NEW LOKI";
console.log("Nombre del gato tras cambiarlo en el registro civil: ", gatoLokiVacunas);
