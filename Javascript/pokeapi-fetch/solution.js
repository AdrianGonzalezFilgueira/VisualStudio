async function getApi(){

    // Hacemos fetch a la api, con un limite de 200 pokemons
    let response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=200');
    let data = await response.json();
    let pokemonResult = data.results;
    //console.log(pokemonResult);

    /* QuerySelector para el Select. Declaramos I para poder acceder a cada elemento del array que recibimos con 
       el fetch */
    let pokemonSelector = document.querySelector("#select-pokemon");
    let i = 0;
    pokemonResult.forEach(element => {
        
        let pokemonOption = document.createElement("option");
        pokemonOption.value = pokemonResult[i].name;
        pokemonOption.textContent = pokemonResult[i].name;
        pokemonSelector.appendChild(pokemonOption);
        i++;
    });
    return data;    
}

/*
function choosePokemon(){

    let contenedorPokemon = document.querySelector(".card");
   
        let pokemonImage = document.createElement("IMG");
        pokemonImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
        contenedorPokemon.appendChild(pokemonImage);
    
*/
const P = new Pokedex.Pokedex()
function getNewPokemon(event) {

    P.getPokemonByName(event.target.value) // with Promise
        .then(function (response) {
            console.log(response)
            updatePokemon(response)
        })
}
