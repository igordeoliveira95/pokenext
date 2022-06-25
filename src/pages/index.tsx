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

  const generateRandomNumber = (maxLimit: number = 898) => {
    const randomNumber: number = Math.round(Math.random() * maxLimit)
    return randomNumber
  }

  const getPokemon = useCallback(async () => {
    try {
      const searchId = generateRandomNumber()
      const maxOptions: number = 3
      for (let i: number = 0; i < maxOptions; i++) {}
      const { data } = await Axios.get(`pokemon/${searchId}`)
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
    getPokemon()
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
