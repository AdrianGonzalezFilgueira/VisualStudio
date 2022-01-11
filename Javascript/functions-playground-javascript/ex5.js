/**
 * Extiende la función del ex4.
 * 
 * Ahora, también vamos a determinar el agua necesaria en función de la condición física del ciclista. 
 * 
 * Si la condición es 'buena', el ciclista necesita 0.5l por cada km
 * Si la condicion es 'regular', el ciclista necesita 0.6l por cada km
 * Si la condición es 'mala', el ciclista necesita 0.7l por cada km
 */

/** La función está incompleta */


function agua_necesaria(condicion, km){

    km = document.getElementById("km").value;
    condicion = document.getElementById("estado").value;
    let agua_por_km;
    let litros_totales;

    if (condicion == 'buena') {
        agua_por_km = km*0.51;
        litros_totales = agua_por_km;
    }
    else if(condicion == 'regular'){
        agua_por_km = km*0.61;
        litros_totales = agua_por_km;
    }
    else if(condicion == 'mala'){
        agua_por_km = km*0.71;
        litros_totales = agua_por_km;
    }
    console.log(`Este ciclista deberia necesitar ${litros_totales} litros de agua en total`);
    alert(`Este ciclista deberia necesitar ${litros_totales} litros de agua en total`);

    return litros_totales;
    
}
    

/*let condicion = 'buena';
let km = 5;
let agua = agua_necesaria(condicion, km);*/