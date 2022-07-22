import axios from 'axios'
import { Fragment, useCallback, useEffect, useState } from 'react'
import { Container, OptionButton } from '../../src/styles/pages/Home'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { PokemonCard } from '../components/PokemonCard'
import Pokemon from '../interfaces/pokemon'
import Axios from '../services/axios'

const Home: React.FC = () => {
  const [pokemonOptions, setPokemonOptions] = useState<Pokemon[]>([])
  const [pokemon, setPokemon] = useState<Pokemon | null>(null)
  const [errorPokemonNotFound, setErrorPokemonNotFound] =
    useState<boolean>(false)
  const [answerIsCorrect, setAnswerIsCorrect] = useState<boolean | null>(null)

  const generateRandomNumber = (maxLimit: number = 898): number => {
    return Math.round(Math.random() * maxLimit)
  }

  const getPokemon = useCallback(async (): Promise<void> => {
    try {
      const response = await axios.all([
        Axios.get(`pokemon/${generateRandomNumber()}`),
        Axios.get(`pokemon/${generateRandomNumber()}`),
        Axios.get(`pokemon/${generateRandomNumber()}`)
      ])
      const index: number = generateRandomNumber(3)
      const pokemons: Pokemon[] = response.map(({ data }) => ({
        id: data.id,
        name: data.name.toUpperCase().replaceAll('-', ' '),
        type: data.types,
        imageUrl: data.sprites.front_default
      }))
      setPokemonOptions(pokemons)
      setPokemon(pokemons[index - 1])
    } catch (error) {
      console.error(error)
      setErrorPokemonNotFound(true)
    }
  }, [])

  const playAgain = async (): Promise<void> => {
    setAnswerIsCorrect(null)
    await getPokemon()
  }

  useEffect(() => {
    getPokemon()
  }, [])

  return (
    <Fragment>
      <Header />
      <Container>
        {!errorPokemonNotFound ? (
          <PokemonCard correctPokemon={pokemon} answerState={answerIsCorrect} />
        ) : (
          <p>Pokemon not found</p>
        )}
        {answerIsCorrect === null ? pokemonOptions.map(poke => {
          return (
            <OptionButton
              key={poke.id + generateRandomNumber()}
              onClick={() => poke.id === pokemon.id ? setAnswerIsCorrect(true) : setAnswerIsCorrect(false)}
            >
              {poke.name}
            </OptionButton>
          )
        }) : <OptionButton onClick={playAgain}>Play again!</OptionButton>}
      </Container>
      <Footer />
    </Fragment>
  )
}

export default Home
