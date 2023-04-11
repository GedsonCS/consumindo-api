
async function consomePokeAPI() {
    const loading = document.querySelector('#loading')

    const pokemonsDaAPI = await fetch('https://pokeapi.co/api/v2/pokemon')
    
      .then(
        response => response.json()
      )
      .catch(
        error => console.log(error)
      )

    loading.classList.add('hidden')
    console.log(pokemonsDaAPI)

    return pokemonsDaAPI
    
}




async function getPokemonByName(NamePokemon) {
    const dataPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${NamePokemon}`)
      .then(
        response => response.json()
      )
      .catch(
        error => console.log(error)
      )
        
    return dataPokemon
}

consomePokeAPI()
getPokemonByName('bulbasaur')