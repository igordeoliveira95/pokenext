import { Fragment, useCallback, useEffect, useState } from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Container } from '../components/Header/styles'
import { PokemonCard } from '../components/PokemonCard'
import Pokemon from '../interfaces/pokemon'
import Axios from '../services/axios'
const defaultPokemonObject: Pokemon = {
  name: '',
  id: 0,
  imageUrl: '',
  type: []
}

const Home: React.FC = () => {
  const [pokemon, setPokemon] = useState<Pokemon>(defaultPokemonObject)
  const [errorPokemonNotFound, setErrorPokemonNotFound] =
    useState<boolean>(false)

  const getPokemon = useCallback(async (search: string | number) => {
    if (search === 0) {
      return
    }
    try {
      const pokemonSearch: string | number =
        typeof search === 'string' ? search.toLocaleLowerCase() : search
      const { data } = await Axios.get(`pokemon/${pokemonSearch}`)
      setPokemon({
        name: data.name,
        id: data.id,
        imageUrl: data.sprites.front_default,
        type: data.types
      })
    } catch {
      setErrorPokemonNotFound(true)
    }
  }, [])

  useEffect(() => {
    getPokemon(1)
  }, [])

  return (
    <Fragment>
      <Header />
      <Container>
        {!errorPokemonNotFound ? (
          <PokemonCard {...pokemon} />
        ) : (
          <p>Pokemon not found</p>
        )}
      </Container>
      <Footer />
    </Fragment>
  )
}

export default Home
