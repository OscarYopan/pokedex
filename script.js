const pokeContainer = document.getElementById('poke-container')
const pokeomCount = 150
const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5'
}

const fetchPokemons = async () => {
  for (let i = 1; i <= pokeomCount; i++) {
    await getPokemon(i)
  }
}

const getPokemon = async id => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const res = await fetch(url)
  const data = await res.json()
  createPokemonCard(data)
}

const createPokemonCard = pokemon => {
  const pokemonEl = document.createElement('div')
  pokemonEl.classList.add('pokemon')

  const pokemonInnerHTML = `
  <div class="pokemon" style="background-color: #0A285F">
    <div class="img-container">
      <!-- <img src="" alt="Exemplo"> -->
    </div>
    <div class="info">
      <span class="number">#001</span>
      <h3 class="name">Gengar</h3>
      <small class="type">Type: <span>Ghost</span></small>
    </div>
  </div>
  `
  pokemonEl.innerHTML = pokemonInnerHTML
}

fetchPokemons()
