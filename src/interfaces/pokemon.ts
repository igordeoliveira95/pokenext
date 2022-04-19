interface PokemonTypeObject {
  name: string
  url: string
}

interface PokemonType {
  slot: number
  type: PokemonTypeObject
}

interface Pokemon {
  name: string
  id: number
  imageUrl: string
  type: PokemonType[]
}

export default Pokemon
