async function getApi(){

    let response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=200');
    let data = await response.json();
    let pokemonResult = data.results;
    console.log(pokemonResult[0]);

    let pokemonSelector = document.querySelector("#select-pokemon");
    let i = 0;
    pokemonResult.forEach(element => {
        
        let pokemonOption = document.createElement("option");
        pokemonOption.value = pokemonResult[i].name;
        pokemonOption.textContent = pokemonResult[i].name;
        pokemonSelector.appendChild(pokemonOption);
        i++;
    });

    let contenedorPokemon = document.querySelector("#card-body");
    
    

    return data;    

}