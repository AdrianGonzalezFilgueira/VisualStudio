// Los objetos pueden alberguas otros objetos pero también funciones

// Vamos a crear un método (funcion) que cuando la invoquemos, el gato maulle por el terminal

// Vamos a crear otro método que cuando la invoquemos el gato va a cumplir años

// Vamos a crear otro método que cuando lo invoquemos nos va a decir el número de vacunas que tiene

// Ejercicio: Crea un método que nos diga si el gato está vacunado contra una deerminida enfermedad
// tieneVacuna: function(nombre)
// Devuelve la FECHA de la vacuna que coincide con
// 'nombre'; o en caso contrario, devuelve false.

// gatoLokiVacunas.tieneVacuna("Trvivalente")
// "2021-06-01"

// gatoLokiVacunas.tieneVacuna("Varicela")
// false

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

    ],
    maullar: function () {
        console.log("Miau!");
    },
    cumpleGato() {
        this.edad++;
    },
    numeroVacunas: function () {
        return this.vacunas.length;
    }
}

// Los objetos pueden albergar cualquier tipo de dato, incluso funciones

gatoLokiVacunas.maullar();
gatoLokiVacunas.cumpleGato();

console.log(gatoLokiVacunas);

console.log("El gato Loki tiene:", gatoLokiVacunas.numeroVacunas());