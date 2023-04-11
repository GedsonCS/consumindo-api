
async function renderizaPokemons() {
    var ulTag = document.querySelector('ul')

    const listaDePokemons = await consomePokeAPI()
    console.log(listaDePokemons)

    listaDePokemons.results.forEach(pokemon => {
        const numeroNaPokedex = pokemon.url.slice(34, -1)
        ulTag.insertAdjacentHTML('beforeend', `
            <li class="Card">
                <img class="IMG_Card" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroNaPokedex}.png" alt=${pokemon.name}>
                <h3 class="Nome_Pokemon">${pokemon.name}</h3>
            </li>
        `)
    })
}

renderizaPokemons()


async function renderizaPokemonsPesquisa() {

    var ulTag = document.querySelector('ul')
    ulTag.innerHTML = ''
    const searchInput = document.querySelector('.input_pesquisa')
    var listaDePokemonsPesquisa = await getPokemonByName(searchInput.value.toLowerCase().trim())
    
        const numeroNaPokedex = listaDePokemonsPesquisa.id
        ulTag.insertAdjacentHTML('beforeend', `
            <li class="Card">
                <img class="IMG_Card" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroNaPokedex}.png" alt=${listaDePokemonsPesquisa.name}>
                <h3 class="Nome_Pokemon">${listaDePokemonsPesquisa.name}</h3>
            </li>
        `)
    
}



function renderSearch() {
    
    const searchBtn = document.querySelector('.Img_pesquisa')
  
    searchBtn.addEventListener('click', () => {
        renderizaPokemonsPesquisa()
    })
  }

renderSearch()

